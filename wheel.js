// NameWheel: a canvas wheel that shows every name on its own slice.
//
// - One slice per unique name. The slice count, slice size, label size and even
//   the wheel's overall size adjust automatically whenever the list changes.
// - The wheel image is drawn once into an offscreen canvas (only re-built when
//   the list changes), then just rotated each animation frame, so it stays
//   smooth even with a lot of names.
// - Parent calls wheelRef.current.spinTo(name, onDone). The winner is decided by
//   the parent (so ticket weighting still applies); the wheel just animates to it.

const WHEEL_TAU = Math.PI * 2;
const WHEEL_COLORS = [
    '#e63946', '#e07a1f', '#2a9d8f', '#457b9d', '#8e44ad',
    '#d62882', '#43aa8b', '#3d5a80', '#c0392b', '#6a994e'
];
const WHEEL_MARGIN = 18; // space between canvas edge and the slices (rim + shadow live here)

const wheelMod = (x, m) => ((x % m) + m) % m;

// Pick a slice color; make sure the last slice never matches the first one.
const wheelColor = (i, n) => {
    let c = i % WHEEL_COLORS.length;
    if (n > 1 && i === n - 1 && c === 0) c = 4;
    return WHEEL_COLORS[c];
};

// Draw the static wheel (slices, names, rim, hub) into an offscreen canvas.
function buildWheelImage(names, size, dpr) {
    const off = document.createElement('canvas');
    off.width = Math.round(size * dpr);
    off.height = Math.round(size * dpr);
    const c = off.getContext('2d');
    c.scale(dpr, dpr);
    c.translate(size / 2, size / 2);

    const n = names.length;
    const R = size / 2 - WHEEL_MARGIN;

    // White rim with a soft shadow
    c.save();
    c.shadowColor = 'rgba(0,0,0,0.4)';
    c.shadowBlur = 8 * dpr;
    c.shadowOffsetY = 3 * dpr;
    c.beginPath();
    c.arc(0, 0, R + 5, 0, WHEEL_TAU);
    c.lineWidth = 10;
    c.strokeStyle = '#ffffff';
    c.stroke();
    c.restore();

    // Empty state
    if (n === 0) {
        c.beginPath();
        c.arc(0, 0, R, 0, WHEEL_TAU);
        c.fillStyle = '#e5e7eb';
        c.fill();
        c.fillStyle = '#6b7280';
        c.font = '600 18px "Segoe UI", system-ui, sans-serif';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText('Add names to fill the wheel', 0, 0);
        return off;
    }

    const a = WHEEL_TAU / n;

    // Slices
    for (let i = 0; i < n; i++) {
        c.beginPath();
        c.moveTo(0, 0);
        c.arc(0, 0, R, i * a, (i + 1) * a);
        c.closePath();
        c.fillStyle = wheelColor(i, n);
        c.fill();
    }

    // Thin separators between slices (skipped for very thin slices to avoid a muddy look)
    if (n > 1) {
        c.strokeStyle = 'rgba(255,255,255,0.55)';
        c.lineWidth = n > 80 ? 0.4 : 1.2;
        for (let i = 0; i < n; i++) {
            c.beginPath();
            c.moveTo(0, 0);
            c.lineTo(Math.cos(i * a) * R, Math.sin(i * a) * R);
            c.stroke();
        }
    }

    // ---- Labels ----
    // Names are written along the radius, ending near the rim. Pick ONE font size
    // for the whole wheel: as big as possible while the widest name still fits
    // inside its slice (slices get narrower toward the center).
    const outer = R * 0.95;
    const maxLen = R * 0.75;
    const fontFor = (fs) => `600 ${fs}px "Segoe UI", system-ui, -apple-system, Roboto, sans-serif`;

    c.font = fontFor(100);
    let widest = 0;
    for (const nm of names) widest = Math.max(widest, c.measureText(nm).width);
    const widthPerPx = widest / 100;
    const longestAt = (fs) => Math.min(maxLen, widthPerPx * fs);

    let fs = Math.min(24, size / 16);
    // Keep the font small enough that the longest name fits on two lines (not below 11px)
    fs = Math.min(fs, Math.max(11, (2 * maxLen) / (1.2 * widthPerPx)));
    while (fs > 5 && a * (outer - longestAt(fs)) * 0.9 < fs) fs -= 0.5;

    c.font = fontFor(fs);
    c.textAlign = 'right';
    c.textBaseline = 'middle';
    c.fillStyle = '#ffffff';

    // Shorten a name with an ellipsis if it's longer than the label area
    const fit = (txt) => {
        if (c.measureText(txt).width <= maxLen) return txt;
        let lo = 1, hi = txt.length;
        while (lo < hi) {
            const mid = Math.ceil((lo + hi) / 2);
            if (c.measureText(txt.slice(0, mid).trimEnd() + '…').width <= maxLen) lo = mid;
            else hi = mid - 1;
        }
        return txt.slice(0, lo).trimEnd() + '…';
    };

    // If a name is too long for one line, try wrapping it onto two lines
    // (only when the slice is wide enough at the inner end of those lines).
    const toLines = (txt) => {
        if (c.measureText(txt).width <= maxLen) return [txt];
        const mid = txt.length / 2;
        let best = -1;
        for (let k = 0; k < txt.length; k++) {
            if (txt[k] === ' ' && (best < 0 || Math.abs(k - mid) < Math.abs(best - mid))) best = k;
        }
        if (best >= 0) {
            const two = [fit(txt.slice(0, best)), fit(txt.slice(best + 1))];
            const w = Math.max(c.measureText(two[0]).width, c.measureText(two[1]).width);
            if (a * (outer - w) >= fs * 2.0) return two;
        }
        return [fit(txt)];
    };

    if (fs >= 9) {
        c.shadowColor = 'rgba(0,0,0,0.35)';
        c.shadowBlur = 2 * dpr;
    }
    for (let i = 0; i < n; i++) {
        const lines = toLines(names[i]);
        c.save();
        c.rotate((i + 0.5) * a);
        lines.forEach((ln, li) => {
            const y = lines.length === 1 ? 0 : (li === 0 ? -0.58 : 0.58) * fs;
            c.fillText(ln, outer, y);
        });
        c.restore();
    }
    c.shadowColor = 'transparent';
    c.shadowBlur = 0;

    // Little gold "bulbs" around the rim
    c.fillStyle = '#f7b731';
    for (let k = 0; k < 24; k++) {
        const ang = (k / 24) * WHEEL_TAU;
        c.beginPath();
        c.arc(Math.cos(ang) * (R + 5), Math.sin(ang) * (R + 5), 2.4, 0, WHEEL_TAU);
        c.fill();
    }

    // Center hub
    const hub = Math.max(12, R * 0.07);
    c.beginPath();
    c.arc(0, 0, hub, 0, WHEEL_TAU);
    c.fillStyle = '#ffffff';
    c.fill();
    c.lineWidth = 3;
    c.strokeStyle = '#333333';
    c.stroke();
    c.beginPath();
    c.arc(0, 0, hub * 0.35, 0, WHEEL_TAU);
    c.fillStyle = '#333333';
    c.fill();

    return off;
}

const NameWheel = React.forwardRef(function NameWheel({ names }, ref) {
    const n = names.length;
    // Bigger wheel for bigger lists (so labels stay as legible as possible)
    const size = Math.round(Math.max(380, Math.min(620, 380 + n * 1.6)));
    const key = names.join('\u0001');

    const canvasRef = React.useRef(null);
    const fxRef = React.useRef(null);
    const pointerRef = React.useRef(null);
    const labelRef = React.useRef(null);
    const offRef = React.useRef(null);
    const rotRef = React.useRef(0);          // current rotation (radians)
    const winnerRef = React.useRef(-1);      // index of highlighted winner slice
    const dimRef = React.useRef(0);          // 0..1 spotlight strength
    const pulseRef = React.useRef(0);        // timestamp while outline is pulsing, else 0
    const animRef = React.useRef(0);
    const fxAnimRef = React.useRef(0);
    const tickAnimRef = React.useRef(null);
    const prevKeyRef = React.useRef(null);
    const dprRef = React.useRef(1);
    const sizeRef = React.useRef(size);
    const namesRef = React.useRef(names);
    namesRef.current = names;
    sizeRef.current = size;

    // Paint the current frame: rotated wheel + (optional) winner spotlight
    const drawRef = React.useRef(null);
    drawRef.current = () => {
        const canvas = canvasRef.current;
        const off = offRef.current;
        if (!canvas || !off) return;
        const ctx = canvas.getContext('2d');
        const W = canvas.width;
        const dpr = dprRef.current;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, W, W);
        ctx.save();
        ctx.translate(W / 2, W / 2);
        ctx.rotate(rotRef.current);
        ctx.drawImage(off, -W / 2, -W / 2);

        const count = namesRef.current.length;
        const w = winnerRef.current;
        if (w >= 0 && w < count && dimRef.current > 0) {
            const R = (sizeRef.current / 2 - WHEEL_MARGIN) * dpr;
            const a = WHEEL_TAU / count;
            // Dim everything...
            ctx.beginPath();
            ctx.arc(0, 0, R, 0, WHEEL_TAU);
            ctx.fillStyle = `rgba(0,0,0,${0.55 * dimRef.current})`;
            ctx.fill();
            // ...then re-draw the winning slice at full brightness
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, R, w * a, (w + 1) * a);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(off, -W / 2, -W / 2);
            ctx.restore();
            // Outline (pulses for a moment after landing)
            const lw = pulseRef.current ? 3 + 2 * Math.sin(pulseRef.current / 110) : 3;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, R, w * a, (w + 1) * a);
            ctx.closePath();
            ctx.lineWidth = lw * dpr * dimRef.current;
            ctx.strokeStyle = '#ffffff';
            ctx.lineJoin = 'round';
            ctx.stroke();
        }
        ctx.restore();
    };

    // Rebuild the wheel image whenever the list (or size) changes
    React.useEffect(() => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        dprRef.current = dpr;
        const px = Math.round(size * dpr);
        canvasRef.current.width = canvasRef.current.height = px;
        fxRef.current.width = fxRef.current.height = px;
        offRef.current = buildWheelImage(namesRef.current, size, dpr);
        if (prevKeyRef.current !== key) {
            // List changed: old winner highlight no longer applies
            winnerRef.current = -1;
            dimRef.current = 0;
            pulseRef.current = 0;
            prevKeyRef.current = key;
        }
        drawRef.current();
    }, [key, size]);

    // Stop any running animation if the component goes away
    React.useEffect(() => () => {
        cancelAnimationFrame(animRef.current);
        cancelAnimationFrame(fxAnimRef.current);
    }, []);

    // Pointer "flapper" kick each time a slice boundary passes
    const tick = (fast, big) => {
        const p = pointerRef.current;
        if (!p || !p.animate) return;
        const deg = big ? 24 : fast ? 7 : 16;
        if (tickAnimRef.current) tickAnimRef.current.cancel();
        tickAnimRef.current = p.animate([
            { transform: 'translateX(-50%) rotate(0deg)' },
            { transform: `translateX(-50%) rotate(${-deg}deg)`, offset: 0.35 },
            { transform: 'translateX(-50%) rotate(0deg)' }
        ], { duration: big ? 380 : fast ? 70 : 130, easing: 'ease-out' });
    };

    // Confetti burst from the pointer
    const confetti = () => {
        const fx = fxRef.current;
        if (!fx) return;
        const ctx = fx.getContext('2d');
        const dpr = dprRef.current;
        const sz = sizeRef.current;
        const parts = Array.from({ length: 90 }, (_, i) => {
            const ang = -Math.PI / 2 + (Math.random() - 0.5) * 2.0;
            const sp = 5 + Math.random() * 6;
            return {
                x: sz / 2, y: 26,
                vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
                rot: Math.random() * WHEEL_TAU, vr: (Math.random() - 0.5) * 0.4,
                w: 5 + Math.random() * 5, h: 3 + Math.random() * 4,
                color: WHEEL_COLORS[i % WHEEL_COLORS.length]
            };
        });
        let frames = 0;
        const step = () => {
            frames++;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, fx.width, fx.height);
            ctx.scale(dpr, dpr);
            for (const p of parts) {
                p.vy += 0.22;
                p.vx *= 0.99;
                p.x += p.vx;
                p.y += p.vy;
                p.rot += p.vr;
                ctx.save();
                ctx.globalAlpha = Math.max(0, 1 - frames / 130);
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
            if (frames < 130) fxAnimRef.current = requestAnimationFrame(step);
            else ctx.clearRect(0, 0, fx.width, fx.height);
        };
        fxAnimRef.current = requestAnimationFrame(step);
    };

    React.useImperativeHandle(ref, () => ({
        spinTo(name, onDone) {
            const list = namesRef.current;
            const idx = list.indexOf(name);
            if (idx < 0) { if (onDone) onDone(); return; }

            cancelAnimationFrame(animRef.current);
            cancelAnimationFrame(fxAnimRef.current);
            const fx = fxRef.current;
            if (fx) fx.getContext('2d').clearRect(0, 0, fx.width, fx.height);
            winnerRef.current = -1;
            dimRef.current = 0;
            pulseRef.current = 0;

            const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
            const count = list.length;
            const a = WHEEL_TAU / count;

            // Land somewhere inside the winning slice (not always dead center)
            const offset = (Math.random() - 0.5) * 0.7 * a;
            const targetMod = wheelMod(-Math.PI / 2 - ((idx + 0.5) * a + offset), WHEEL_TAU);
            const start = rotRef.current;
            const delta = wheelMod(targetMod - wheelMod(start, WHEEL_TAU), WHEEL_TAU);
            const spins = reduce ? 1 : 6 + Math.floor(Math.random() * 3);
            const total = delta + spins * WHEEL_TAU;

            const overshoot = reduce ? 0 : Math.min(0.3 * a, 0.12); // slight overshoot, then settles back
            const D1 = reduce ? 1500 : 5600; // main spin (was 2s)
            const D2 = reduce ? 0 : 500;     // settle-back

            let lastIdx = -1;
            let lastTick = 0;
            const t0 = performance.now();

            const finish = () => {
                if (namesRef.current[idx] === name) {
                    winnerRef.current = idx;
                    if (labelRef.current) labelRef.current.textContent = '';
                    tick(false, true);
                    if (reduce) {
                        dimRef.current = 1;
                        drawRef.current();
                    } else {
                        const s0 = performance.now();
                        const step = (now) => {
                            const t = now - s0;
                            dimRef.current = Math.min(1, t / 500);
                            pulseRef.current = now;
                            drawRef.current();
                            if (t < 1800) {
                                animRef.current = requestAnimationFrame(step);
                            } else {
                                pulseRef.current = 0;
                                drawRef.current();
                            }
                        };
                        animRef.current = requestAnimationFrame(step);
                        confetti();
                    }
                } else if (labelRef.current) {
                    labelRef.current.textContent = '';
                }
                if (onDone) onDone();
            };

            const frame = (now) => {
                const t = now - t0;
                let rot;
                if (t < D1) {
                    const p = 1 - Math.pow(1 - t / D1, 3); // ease-out cubic
                    rot = start + (total + overshoot) * p;
                } else if (t < D1 + D2) {
                    const q = (t - D1) / D2;
                    const e = 0.5 - 0.5 * Math.cos(Math.PI * q);
                    rot = start + total + overshoot * (1 - e);
                } else {
                    rot = start + total;
                }
                rotRef.current = rot;

                // Which slice is under the pointer (pointer is at the top = -90deg)?
                const cnt = namesRef.current.length;
                if (cnt > 0) {
                    const ca = WHEEL_TAU / cnt;
                    const ci = Math.min(cnt - 1, Math.floor(wheelMod(-Math.PI / 2 - rot, WHEEL_TAU) / ca));
                    if (ci !== lastIdx) {
                        lastIdx = ci;
                        tick(now - lastTick < 60, false);
                        lastTick = now;
                        if (labelRef.current) labelRef.current.textContent = namesRef.current[ci];
                    }
                }

                drawRef.current();
                if (t < D1 + D2) animRef.current = requestAnimationFrame(frame);
                else finish();
            };
            animRef.current = requestAnimationFrame(frame);
        }
    }), []);

    return React.createElement('div', { className: 'name-wheel-wrap' },
        React.createElement('div', { className: 'name-wheel', style: { width: size, maxWidth: '100%' } },
            React.createElement('canvas', { ref: canvasRef, style: { display: 'block', width: '100%', height: 'auto' } }),
            React.createElement('canvas', { ref: fxRef, style: { position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none' } }),
            React.createElement('div', { ref: pointerRef, className: 'wheel-pointer' })
        ),
        // Shows the name currently under the pointer while spinning (handy when there are many thin slices)
        React.createElement('div', { ref: labelRef, className: 'wheel-live-label' })
    );
});
