// Simple Lucide-React icon components
const Upload = ({ size = 20, className = "" }) => (
    React.createElement('svg', { 
        className: `lucide-icon ${className}`, 
        width: size, 
        height: size, 
        viewBox: "0 0 24 24" 
    },
        React.createElement('path', { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        React.createElement('polyline', { points: "7,10 12,15 17,10" }),
        React.createElement('line', { x1: "12", x2: "12", y1: "15", y2: "3" })
    )
);

const Plus = ({ size = 20, className = "" }) => (
    React.createElement('svg', { 
        className: `lucide-icon ${className}`, 
        width: size, 
        height: size, 
        viewBox: "0 0 24 24" 
    },
        React.createElement('circle', { cx: "12", cy: "12", r: "10" }),
        React.createElement('path', { d: "M8 12h8" }),
        React.createElement('path', { d: "M12 8v8" })
    )
);

const Trash2 = ({ size = 20, className = "" }) => (
    React.createElement('svg', { 
        className: `lucide-icon ${className}`, 
        width: size, 
        height: size, 
        viewBox: "0 0 24 24" 
    },
        React.createElement('path', { d: "M3 6h18" }),
        React.createElement('path', { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
        React.createElement('path', { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
        React.createElement('line', { x1: "10", x2: "10", y1: "11", y2: "17" }),
        React.createElement('line', { x1: "14", x2: "14", y1: "11", y2: "17" })
    )
);

const Shuffle = ({ size = 20, className = "" }) => (
    React.createElement('svg', { 
        className: `lucide-icon ${className}`, 
        width: size, 
        height: size, 
        viewBox: "0 0 24 24" 
    },
        React.createElement('path', { d: "M16 3h5v5" }),
        React.createElement('path', { d: "M4 20L21 3" }),
        React.createElement('path', { d: "M21 16v5h-5" }),
        React.createElement('path', { d: "M15 15l6 6" }),
        React.createElement('path', { d: "M4 4l5 5" })
    )
);

const Download = ({ size = 20, className = "" }) => (
    React.createElement('svg', { 
        className: `lucide-icon ${className}`, 
        width: size, 
        height: size, 
        viewBox: "0 0 24 24" 
    },
        React.createElement('path', { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        React.createElement('polyline', { points: "7,10 12,15 17,10" }),
        React.createElement('line', { x1: "12", x2: "12", y1: "15", y2: "3" })
    )
);

const Search = ({ size = 20, className = "" }) => (
    React.createElement('svg', { 
        className: `lucide-icon ${className}`, 
        width: size, 
        height: size, 
        viewBox: "0 0 24 24" 
    },
        React.createElement('circle', { cx: "11", cy: "11", r: "8" }),
        React.createElement('path', { d: "M21 21l-4.35-4.35" })
    )
);

const Loader = ({ size = 20, className = "" }) => (
    React.createElement('svg', { 
        className: `lucide-icon ${className}`, 
        width: size, 
        height: size, 
        viewBox: "0 0 24 24" 
    },
        React.createElement('path', { d: "M21 12a9 9 0 11-6.219-8.56" })
    )
);

const X = ({ size = 20, className = "" }) => (
    React.createElement('svg', { 
        className: `lucide-icon ${className}`, 
        width: size, 
        height: size, 
        viewBox: "0 0 24 24" 
    },
        React.createElement('path', { d: "M18 6 6 18" }),
        React.createElement('path', { d: "m6 6 12 12" })
    )
);
