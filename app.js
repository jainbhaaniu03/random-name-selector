// localStorage keys used to persist app state across page refreshes
const STORAGE_KEYS = {
    NAMES: 'raffleApp_nameMap',
    HISTORY: 'raffleApp_drawHistory'
};

const DEFAULT_NAME_ENTRIES = [
        ['Nimesh & Rinku Shah', 20],
        ['Chetan & Smita Koradia', 20],
        ['Arvin & Jaya Shah', 20],
        ['Pratik & Sangeen Shah', 24],
        ['Corazon Imaging', 8],
        ['Optalis Health &amp; Rehabilitation', 8],
        ['Amit & Nidhi Pathak', 8],
        ['Manish & Madhu Salecha', 12],
        ['Dhiju & Rachna Parakh', 12],
        ['Raj & Neeru Jaggi', 12],
        ['Dimple & Dipa Shah', 12],
        ['Bipin & Vijaya Shah', 12],
        ['Pritish & Shreya Shah', 12],
        ['Avinash & Hema Rachmale', 12],
        ['Prakash & Kirti Singhvi', 12],
        ['Rajiv & Mamata Maheshwari', 12],
        ['Dilip & Kalpana Shah', 8],
        ['Hemesh & Pratiksha Shah', 8],
        ['Niyat Patel', 4],
        ['Piyush Dave', 4],
        ['Jignesh & Jayshree Madhani', 8],
        ['Rajen & Lona Mody', 8],
        ['Tushar & Naiomi Vakhariya', 4],
        ['Nalin & Gita Shah', 8],
        ['Rakesh & Lisa Sheth', 4],
        ['Amit & Kruti Sanghvi', 8],
        ['Amit & Usha Singhi', 8],
        ['Rajesh Jain & Vinita Parekh', 8],
        ['Pradeep & Madhu Modi', 8],
        ['Rajendra & Pratibha Modi', 8],
        ['Kirit & Vasu Tolia', 8],
        ['Kamal & Paru Tolia', 4],
        ['Manish Mehta', 8],
        ['Rahul & Gayatri Munot', 8],
        ['Jitesh & Kavita Shah', 8],
        ['Naveen & Richa Jain', 8],
        ['Chintan Shah & Deepali Jain', 4],
        ['Bhavin & Ishani Dalal', 4],
        ['Rajiv & Reepal Shah', 4],
        ['Biren & Avani Shah', 4],
        ['Radisson Southfield', 2],
        ['Shailesh & Jyoti Jain', 1],
        ['Saurabh & Prachi Shah', 6],
        ['Jinansh & Priya Shah', 1],
        ['Suresh & Bina Shah', 6],
        ['Ankur & Kanira Jain', 2],
        ['Narendra Agarwal', 2],
        ['Bhupendra & Neena Shah', 2],
        ['Sandeep & Manisha Garg', 2],
        ['H. R. Technologies', 2],
        ['Manit & Jini Jain', 2],
        ['Sanjay & Manisha Bhandari', 4],
        ['Tarav & Dhara Shah', 4],
        ['Anand & Mona Bora', 4],
        ['Anil & Savita Jain', 4],
        ['Kamal & Sunitha Jain', 4],
        ['Akshat & Priyanka Jain', 4],
        ['Abhishek & Shikha Jain', 4],
        ['Priyank Vora', 2],
        ['Bhumika Dedhia', 2],
        ['Gunvant & Shobhana Vora', 4],
        ['Prakash & Mayusha Shah', 4],
        ['Paresh & Chetna Shah', 4],
        ['Ashokbhai Shah', 2],
        ['Amit & Megha Shah', 4],
        ['Lalit Jain & Rachna Bhagat', 4],
        ['Sudeep & Abhilasha Jain', 4],
        ['Dr. Virendra Mehta', 2],
        ['Devendra & Madhu Mehta', 4],
        ['Amit & Ritu Shah', 4],
        ['Jigar & Purvi Shah', 4],
        ['Kritesh & Hiral Mehta', 4],
        ['Puneet Jain & Akanksha Singhal', 4],
        ['Vinod & Kappu Raghunathan', 4],
        ['Rajiv Sanghvi & Dr. Niketa Dani', 2],
        ['Ritesh & Ekta Nath', 2],
        ['Ramesh & Sucheta Gandhi', 2],
        ['Bharat & Padmaja Doshi', 2],
        ['Bharat & Bharati Doshi', 4],
        ['Alka & Nutan Shah', 4],
        ['Rocky & Sangeeta Mehta', 4],
        ['Ajay & Sujata Jain', 4],
        ['Anant & Rashmika Shah', 4],
        ['Manish & Bharti Shah', 4],
        ['Pravin & Jyoti Shah', 4],
        ['Nitin & Bindu Golechha', 4],
        ['Nehal Sanghvi', 2],
        ['Ekta Jhaveri', 2],
        ['Kushant & Nirali Shah', 4],
        ['Mahendra & Veena Kavdia', 4],
        ['Chirag & Namrata Shah', 4],
        ['Pradeep & Divya Shah', 4],
        ['Rajiv & Bhavana Shah', 4],
        ['Paresh & Rita Shah', 4],
        ['Nalin & Dipti Kothari', 4],
        ['Hemant & Veena Shah', 4],
        ['Ashoka & Kirti Jain', 4],
        ['Vijay & Usha Vasani', 4],
        ['Ashok & Asha Jain', 4],
        ['Paresh & Anuja Shah', 4],
        ['Jayprakash & Saroj Raisoni', 4],
        ['Naresh & Kalpana Ravani', 4],
        ['Nilesh & Kapila Ravani', 4],
        ['Ramesh & Shanta Chheda', 4],
        ['Pradip & Hema Shah', 4],
        ['Vivek & Sheetal Agarwal', 4],
        ['Chandresh & Hemali Doshi', 4],
        ['Nilesh & Hina Shah', 4],
        ['Chirag & Angel Shah', 4],
        ['Vinit & Anuja Shah', 4],
        ['Girish & Shashi Bapna', 4],
        ['Rajnikant & Jyoti Mehta', 4],
        ['Deepak & Kiran Shah', 4],
        ['Dipak & Panna Shah', 4],
        ['Jindas & Gita Shah', 4],
        ['Niranjan & Bharati Modi', 4],
        ['Suresh & Chandani Shah', 4],
        ['Kandarp & Indu Doshi', 4],
        ['Ashish & Minal Manek', 4],
        ['Deepak & Sujata Jhaveri', 4],
        ['Suresh & Rekha Shah', 4],
        ['Bipin & Sohini Shah', 4],
        ['Jayant & Heena shah', 4],
        ['Jayprakash & Bharti Shah', 4],
        ['Niki & Asmi Mehta', 4],
        ['Sanjay & Bela Shah', 4],
        ['Smita Sheth', 2],
        ['Manjula Boyed', 2],
        ['Shoba Shah', 1],
        ['Govind Gangrade', 2],
        ['Dr. Lalit J Shah', 2],
        ['Smita Kothari', 2],
        ['Rama Sanghvi', 2],
        ['Sulochanaben Shah', 2],
        ['Kumud Kothari', 2],
        ['Bhadra Doshi', 2],
        ['Gunvant Shah', 2],
        ['Chandrakant Ravani', 2],
        ['Girish & Asha Shah', 4],
        ['Ramesh & Sheela Shah', 4],
        ['Shirish & Parul Shah', 4],
        ['Kirit & Parindu Sheth', 4],
        ['Rohit & Devyani Shah', 4],
        ['Saurabh & Sonal Shah', 4],
        ['Diyakant & Mina Shah', 4],
        ['Rohit & Nilpa Shah', 4],
        ['Bhavesh & Ragini Kothari', 4],
        ['Hemendra & Devangi Shah', 4],
        ['Sharad & Nalini Shah', 4],
        ['Shital Shah', 2],
        ['Parag Shah', 2],
        ['Ramila A Shah', 2]
];

// Main Component
const NameSelector = () => {
    // Load nameMap from localStorage if it exists, otherwise fall back to the
    // default hardcoded list. Using the lazy-init form of useState so this only
    // runs once, on first mount.
    const [nameMap, setNameMap] = React.useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEYS.NAMES);
            if (saved) {
                return new Map(JSON.parse(saved));
            }
        } catch (error) {
            console.error('Failed to load saved names, using defaults:', error);
        }
        return new Map(DEFAULT_NAME_ENTRIES);
    });
    const wheelRef = React.useRef(null);
    const [ghost, setGhost] = React.useState(null);
    const [pendingSpin, setPendingSpin] = React.useState(null);
    const [selectedName, setSelectedName] = React.useState('');
    const [newName, setNewName] = React.useState('');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isSpinning, setIsSpinning] = React.useState(false);
    const [singleName, setSingleName] = React.useState('');
    const [repeatCount, setRepeatCount] = React.useState(1);
    const [selectedForDelete, setSelectedForDelete] = React.useState(new Set());
    const [drawHistory, setDrawHistory] = React.useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEYS.HISTORY);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (error) {
            console.error('Failed to load saved draw history:', error);
        }
        return [];
    });

    // Always-current copy of the list for use inside the wheel's finish callback
    const nameMapRef = React.useRef(nameMap);
    nameMapRef.current = nameMap;

    // One wheel slice per unique name (the wheel redraws itself when this changes)
    const baseNames = Array.from(nameMap.keys());
    const wheelNames = (ghost && !nameMap.has(ghost.name))
        ? [...baseNames.slice(0, ghost.index), ghost.name, ...baseNames.slice(ghost.index)]
        : baseNames;

    // Get total count of all names
    const getTotalNames = () => {
        return Array.from(nameMap.values()).reduce((sum, count) => sum + count, 0);
    };

    // Convert nameMap to flat array for random selection
    const getFlatNameArray = () => {
        const flatArray = [];
        for (const [name, count] of nameMap) {
            for (let i = 0; i < count; i++) {
                flatArray.push(name);
            }
        }
        return flatArray;
    };

    // Download draw history (manual only)
    const downloadDrawHistory = (history) => {
        if (history.length === 0) return;
        
        try {
            const ws = XLSX.utils.aoa_to_sheet([
                ['Draw Order', 'Selected Name', 'Date', 'Time'],
                ...history.map((draw, index) => {
                    const date = new Date(draw.timestamp);
                    return [
                        index + 1,
                        draw.name,
                        date.toLocaleDateString(),
                        date.toLocaleTimeString()
                    ];
                })
            ]);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Draw History');
            XLSX.writeFile(wb, `draw_history_${new Date().toISOString().split('T')[0]}.xlsx`);
        } catch (error) {
            console.error('Error downloading draw history:', error);
        }
    };

    const selectRandomName = () => {
        const flatNames = getFlatNameArray();
        if (flatNames.length === 0) {
            alert('No names available to select!');
            return;
        }

        // Pick the winner up front (still weighted by ticket count). The previous
        // draw's leftover slice is dropped from the wheel first; the spin itself
        // starts in the effect below, once the wheel has re-rendered.
        const selected = flatNames[Math.floor(Math.random() * flatNames.length)];
        setIsSpinning(true);
        setGhost(null);
        setPendingSpin(selected);
    };

    // Runs after a draw lands: record it and automatically remove ONE ticket for that name
    const finishDraw = (selected) => {
        setSelectedName(selected);
        setIsSpinning(false);
        setDrawHistory(prev => [...prev, { name: selected, timestamp: Date.now() }]);

        const current = nameMapRef.current;
        if ((current.get(selected) || 0) <= 1) {
            // Last ticket: keep its slice on the wheel until the next draw (set BEFORE the removal)
            const idx = Array.from(current.keys()).indexOf(selected);
            if (idx >= 0) setGhost({ name: selected, index: idx });
        }
        setNameMap(prev => {
            const m = new Map(prev);
            const c = m.get(selected) || 0;
            if (c <= 1) m.delete(selected);
            else m.set(selected, c - 1);
            return m;
        });
    };

    React.useEffect(() => {
        if (pendingSpin === null) return;
        const selected = pendingSpin;
        setPendingSpin(null);
        wheelRef.current.spinTo(selected, () => finishDraw(selected));
    }, [pendingSpin]);

    const updateNameQuantity = (name, newQuantity) => {
        const newMap = new Map(nameMap);
        if (newQuantity <= 0) {
            newMap.delete(name);
        } else {
            newMap.set(name, newQuantity);
        }
        setNameMap(newMap);
    };

    const addSingleName = () => {
        if (singleName.trim() && repeatCount > 0 && repeatCount <= 50) {
            const newMap = new Map(nameMap);
            const trimmedName = singleName.trim();
            const currentCount = newMap.get(trimmedName) || 0;
            newMap.set(trimmedName, currentCount + repeatCount);
            setNameMap(newMap);
            setSingleName('');
            setRepeatCount(1);
        }
    };

    const addName = () => {
        if (newName.trim()) {
            const namesToAdd = newName
                .split(/[,;\n]/)
                .map(name => name.trim())
                .filter(name => name.length > 0);
            
            if (namesToAdd.length > 0) {
                const newMap = new Map(nameMap);
                namesToAdd.forEach(name => {
                    const currentCount = newMap.get(name) || 0;
                    newMap.set(name, currentCount + 1);
                });
                setNameMap(newMap);
                setNewName('');
            }
        }
    };

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Read sheet data as an array of rows (2D array)
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Ticket count from column B: a whole number >= 1, otherwise null
            const parseCount = (cell) => {
                if (typeof cell === 'number') return Number.isInteger(cell) && cell >= 1 ? cell : null;
                if (typeof cell === 'string' && /^\d+$/.test(cell.trim())) {
                    const n = parseInt(cell.trim(), 10);
                    return n >= 1 ? n : null;
                }
                return null;
            };

            // Header check: if the first non-empty row has text in column A but no
            // ticket number in column B (e.g. "Attendees" or "Name | Tickets"),
            // treat it as a header and skip it. If there's no header, start at row 1.
            const firstIndex = jsonData.findIndex(row =>
                row.some(cell => cell !== undefined && cell !== null && String(cell).trim() !== '')
            );
            const headerIndex = (firstIndex >= 0 &&
                typeof jsonData[firstIndex][0] === 'string' &&
                parseCount(jsonData[firstIndex][1]) === null) ? firstIndex : -1;

            const newMap = new Map();
            const skipped = [];

            jsonData.forEach((row, i) => {
                if (i === headerIndex) return;
                const nameCell = row[0];
                if (!(typeof nameCell === 'string' && nameCell.trim())) return;

                const name = nameCell.trim().replace(/\s+/g, ' ');
                const count = parseCount(row[1]);

                // No number next to the name -> not in the raffle
                if (count === null) {
                    skipped.push(name);
                    return;
                }

                // Add to existing count if the name appears multiple times in the file
                newMap.set(name, (newMap.get(name) || 0) + count);
            });

            if (newMap.size > 0) {
                setNameMap(newMap);
                setGhost(null);
                setSelectedName('');
                // Clear file input
                event.target.value = '';
                if (skipped.length > 0) {
                    alert(`Imported ${newMap.size} names. Left out ${skipped.length} with no ticket number: ` +
                        skipped.slice(0, 5).join(', ') + (skipped.length > 5 ? ', ...' : ''));
                }
            } else {
                alert('No valid names found in the Excel file.');
            }
        } catch (error) {
            console.error('File upload error:', error);
            alert('Error reading Excel file. Please make sure it\'s a valid .xlsx or .xls file.');
        }
    };
    reader.readAsArrayBuffer(file);
};

    const exportToExcel = () => {
        if (nameMap.size === 0) {
            alert('No names to export!');
            return;
        }

        try {
            const data = Array.from(nameMap.entries()).flatMap(([name, count]) => 
                Array(count).fill([name])
            );
            const ws = XLSX.utils.aoa_to_sheet([['Names'], ...data]);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Names');
            XLSX.writeFile(wb, 'names_list.xlsx');
        } catch (error) {
            console.error('Export error:', error);
            alert('Error exporting file. Please try again.');
        }
    };

    const clearAllNames = () => {
        if (window.confirm('Are you sure you want to clear all names? This action cannot be undone.')) {
            setNameMap(new Map());
            setGhost(null);
            setSelectedName('');
            setSelectedForDelete(new Set());
        }
    };

    const clearDrawHistory = () => {
        if (window.confirm('Are you sure you want to clear the draw history? This action cannot be undone.')) {
            setDrawHistory([]);
        }
    };

    // Puts the ticket list back to the default counts. Draw history is left alone.
    const resetRaffleCount = () => {
        if (window.confirm('Reset the raffle names and ticket counts back to the default list? Your draw history will be kept.')) {
            setNameMap(new Map(DEFAULT_NAME_ENTRIES));
            setGhost(null);
            setSelectedForDelete(new Set());
        }
    };

    const resetToDefaults = () => {
        if (window.confirm('Reset everything to the default name list? This will erase your current names, draw history, and any saved changes. This action cannot be undone.')) {
            setNameMap(new Map(DEFAULT_NAME_ENTRIES));
            setGhost(null);
            setDrawHistory([]);
            setSelectedName('');
            setNewName('');
            setSearchTerm('');
            setSingleName('');
            setRepeatCount(1);
            setSelectedForDelete(new Set());
        }
    };

    const toggleSelectForDelete = (name) => {
        const newSelected = new Set(selectedForDelete);
        if (newSelected.has(name)) {
            newSelected.delete(name);
        } else {
            newSelected.add(name);
        }
        setSelectedForDelete(newSelected);
    };

    const selectAllForDelete = () => {
        if (selectedForDelete.size === nameMap.size) {
            setSelectedForDelete(new Set());
        } else {
            setSelectedForDelete(new Set(nameMap.keys()));
        }
    };

    const deleteMassSelected = () => {
        if (selectedForDelete.size === 0) return;
        
        if (window.confirm(`Are you sure you want to delete ${selectedForDelete.size} selected entries?`)) {
            const newMap = new Map(nameMap);
            selectedForDelete.forEach(name => {
                newMap.delete(name);
            });
            setNameMap(newMap);
            setSelectedForDelete(new Set());
        }
    };

    const getSearchResults = () => {
        if (!searchTerm.trim()) return { matches: [], count: 0 };
        
        const searchLower = searchTerm.toLowerCase();
        const matches = Array.from(nameMap.entries()).filter(([name]) => 
            name.toLowerCase().includes(searchLower)
        );
        
        const totalCount = matches.reduce((sum, [, count]) => sum + count, 0);
        
        return { matches, count: totalCount };
    };

    const searchResults = getSearchResults();

    // Persist nameMap to localStorage whenever it changes
    React.useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEYS.NAMES, JSON.stringify(Array.from(nameMap.entries())));
        } catch (error) {
            console.error('Failed to save names to localStorage:', error);
        }
    }, [nameMap]);

    // Persist draw history to localStorage whenever it changes
    React.useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(drawHistory));
        } catch (error) {
            console.error('Failed to save draw history to localStorage:', error);
        }
    }, [drawHistory]);

    // Handle keyboard shortcuts
    React.useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.ctrlKey && event.key === 'Enter') {
                event.preventDefault();
                if (!isSpinning && getTotalNames() > 0) {
                    selectRandomName();
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [isSpinning, nameMap, ghost]);

    // NOTE: Data is now saved to localStorage automatically (see the two
    // useEffect hooks above), so refreshing the page no longer loses the
    // name list or draw history. The old "are you sure you want to leave"
    // warning has been removed since it's no longer accurate.

    return React.createElement(React.Fragment, null,
    React.createElement('div', { className: "max-w-4xl mx-auto p-6 rounded-lg main-container", style: { paddingBottom: '90px' } },
        React.createElement('h1', { className: "text-3xl font-bold text-center mb-4 text-gray-800" }, 'JSGD Fundraising Dinner Raffle'),

        // Random Selection Section
        React.createElement('div', { className: "mb-6 p-6 event-background rounded-lg" },
            React.createElement('div', { className: "text-center" },
                React.createElement('div', { className: "mb-6" },
                    React.createElement(NameWheel, { ref: wheelRef, names: wheelNames })
                ),

                React.createElement('button', {
                    onClick: selectRandomName,
                    disabled: getTotalNames() === 0 || isSpinning,
                    className: "px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-lg font-semibold flex items-center mx-auto shadow-lg transition-colors"
                },
                    React.createElement(Shuffle, { className: "mr-2", size: 24 }),
                    isSpinning ? `Drawing Raffle #${drawHistory.length + 1}...` : `Draw Raffle #${drawHistory.length + 1}`
                ),
                getTotalNames() > 0 && React.createElement('p', { className: "text-sm text-gray-600 mt-2" },
                    `Ready to draw from ${getTotalNames()} entries • Press Ctrl+Enter`
                ),

                // Winner box sits directly under the draw button
                (selectedName || isSpinning) && React.createElement('div', { className: "border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6 text-left" },
                    React.createElement('h3', { className: "text-xl font-semibold text-yellow-800 mb-4" },
                        isSpinning ? `Drawing Raffle #${drawHistory.length + 1}...` : '🎉 Winner:'
                    ),
                    isSpinning
                        ? React.createElement('div', { className: "text-center py-4" },
                            React.createElement('div', { className: "text-lg text-yellow-700" }, 'Spinning the wheel...')
                        )
                        : React.createElement('div', { className: "text-3xl font-bold text-yellow-900 text-center" }, selectedName)
                )
            )
        ),

        // Draw History
        drawHistory.length > 0 && React.createElement('div', { className: "mb-6 p-4 rounded-lg transparent-section" },
                React.createElement('div', { className: "flex items-center justify-between mb-3" },
                    React.createElement('h3', { className: "text-lg font-semibold text-gray-800 flex items-center" }, 
                        React.createElement(History, { className: "mr-2", size: 20 }),
                        `Draw History (${drawHistory.length} draws)`
                    ),
                    React.createElement('div', { className: "flex items-center gap-2" },
                        React.createElement('button', {
                            onClick: () => downloadDrawHistory(drawHistory),
                            className: "px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center text-sm transition-colors"
                        },
                            React.createElement(Download, { size: 14, className: "mr-1" }),
                            'Download'
                        ),
                        React.createElement('button', {
                            onClick: clearDrawHistory,
                            className: "px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center text-sm transition-colors"
                        },
                            React.createElement(Trash2, { size: 14, className: "mr-1" }),
                            'Clear History'
                        )
                    )
                ),
                React.createElement('div', { className: "overflow-y-auto", style: { maxHeight: '260px' } }, // fits 10 rows
                    React.createElement('div', { className: "space-y-0.5" },
                        drawHistory.slice(-50).reverse().map((draw, index) => {
                            const actualIndex = drawHistory.length - index;
                            return React.createElement('div', { 
                                key: draw.timestamp,
                                className: "text-sm flex justify-between items-center px-3 py-0.5 rounded transparent-box"
                            },
                                React.createElement('span', { className: "font-medium" }, 
                                    `${actualIndex}. ${draw.name}`
                                ),
                                React.createElement('span', { className: "text-gray-500 text-xs" }, 
                                    new Date(draw.timestamp).toLocaleTimeString()
                                )
                            );
                        })
                    )
                ),
                React.createElement('p', { className: "text-xs text-gray-700 mt-2" }, 
                    'Click Download button above to save history • Showing last 50 draws'
                )
            ),

        // Search Section
        React.createElement('div', { className: "mb-6 p-4 rounded-lg transparent-section" },
            React.createElement('h2', { className: "text-lg font-semibold mb-3 flex items-center" },
                React.createElement(Search, { className: "mr-2", size: 20 }),
                'Search & Edit Names'
            ),
            React.createElement('div', { className: "space-y-2" },
                React.createElement('input', {
                    type: 'text',
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    placeholder: 'Search for a name...',
                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                }),
                searchTerm.trim() && React.createElement('div', { className: "text-sm text-blue-700" },
                    searchResults.count > 0 
                        ? `Found ${searchResults.matches.length} name(s) with ${searchResults.count} total raffle tickets`
                        : `No matches found for "${searchTerm}"`
                ),
                searchTerm.trim() && searchResults.matches.length > 0 && React.createElement('div', { className: "space-y-1 mt-3" },
                    searchResults.matches.map(([name, count]) =>
                        React.createElement('div', { 
                            key: name,
                            className: "px-3 py-1.5 rounded-lg flex justify-between items-center transparent-box"
                        },
                            React.createElement('span', { className: "font-medium" }, `${name} (${count} raffle ticket${count === 1 ? '' : 's'})`),
                            React.createElement('div', { className: "flex items-center gap-2" },
                                React.createElement('button', {
                                    onClick: () => updateNameQuantity(name, count - 1),
                                    className: "p-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                                }, React.createElement(Minus, { size: 16 })),
                                React.createElement('input', {
                                    type: 'number',
                                    value: count,
                                    onChange: (e) => updateNameQuantity(name, Math.max(0, parseInt(e.target.value) || 0)),
                                    className: "quantity-input px-2 py-1 border border-gray-300 rounded text-center text-sm",
                                    min: 0
                                }),
                                React.createElement('button', {
                                    onClick: () => updateNameQuantity(name, count + 1),
                                    className: "p-1 bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors"
                                }, React.createElement(Plus, { size: 16 }))
                            )
                        )
                    )
                )
            )
        ),

        // Current Names Display
        React.createElement('div', { className: "mb-6" },
            React.createElement('div', { className: "mb-3" },
                React.createElement('div', { className: "flex gap-2 flex-wrap mb-3" },
                    nameMap.size > 0 && React.createElement('button', {
                        onClick: selectAllForDelete,
                        className: "px-2 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center text-xs transition-colors"
                    },
                        selectedForDelete.size === nameMap.size ? 'Deselect All' : 'Select All'
                    ),
                    selectedForDelete.size > 0 && React.createElement('button', {
                        onClick: deleteMassSelected,
                        className: "px-3 py-1 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center text-sm transition-colors"
                    },
                        React.createElement(Trash2, { size: 14, className: "mr-1" }),
                        `Delete ${selectedForDelete.size}`
                    ),
                    React.createElement('button', {
                        onClick: exportToExcel,
                        className: "px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center text-sm transition-colors",
                        disabled: nameMap.size === 0
                    },
                        React.createElement(Download, { size: 14, className: "mr-1" }),
                        'Export'
                    ),
                    React.createElement('button', {
                        onClick: clearAllNames,
                        className: "px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center text-sm transition-colors",
                        disabled: nameMap.size === 0
                    },
                        React.createElement(Trash2, { size: 14, className: "mr-1" }),
                        'Clear All'
                    ),
                    React.createElement('button', {
                        onClick: resetRaffleCount,
                        className: "px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-800 flex items-center text-sm transition-colors"
                    },
                        React.createElement(RotateCcw, { size: 14, className: "mr-1" }),
                        'Reset Raffle Count'
                    )
                ),
                React.createElement('h2', { className: "text-lg font-semibold" }, 
                    `Current Names (${nameMap.size} unique, ${getTotalNames()} raffle tickets)`
                )
            ),
            
            nameMap.size > 0 ?
                React.createElement('div', { className: "p-4 rounded-lg max-h-60 overflow-y-auto transparent-section" },
                    React.createElement('div', { className: "space-y-1" },
                        Array.from(nameMap.entries())
                            .sort(([a], [b]) => a.localeCompare(b))
                            .map(([name, count]) =>
                            React.createElement('div', { 
                                key: name,
                                className: `px-3 py-1.5 rounded-lg text-sm flex justify-between items-center transition-colors transparent-box ${selectedForDelete.has(name) ? 'bg-red-100 bg-opacity-50' : ''}`
                            },
                                React.createElement('div', { className: "flex items-center gap-2" },
                                    React.createElement('input', {
                                        type: 'checkbox',
                                        checked: selectedForDelete.has(name),
                                        onChange: () => toggleSelectForDelete(name),
                                        className: "rounded"
                                    }),
                                    React.createElement('span', { className: "font-medium" }, `${name} (${count} raffle ticket${count === 1 ? '' : 's'})`)
                                ),
                                React.createElement('div', { className: "flex items-center gap-2" },
                                    React.createElement('button', {
                                        onClick: () => updateNameQuantity(name, count - 1),
                                        className: "p-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors",
                                        title: "Decrease quantity"
                                    }, React.createElement(Minus, { size: 16 })),
                                    React.createElement('input', {
                                        type: 'number',
                                        value: count,
                                        onChange: (e) => updateNameQuantity(name, Math.max(0, parseInt(e.target.value) || 0)),
                                        className: "quantity-input px-2 py-1 border border-gray-300 rounded text-center text-sm",
                                        min: 0
                                    }),
                                    React.createElement('button', {
                                        onClick: () => updateNameQuantity(name, count + 1),
                                        className: "p-1 bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors",
                                        title: "Increase quantity"
                                    }, React.createElement(Plus, { size: 16 })),
                                    React.createElement('button', {
                                        onClick: () => updateNameQuantity(name, 0),
                                        className: "p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors",
                                        title: "Delete all occurrences"
                                    }, React.createElement(X, { size: 16 }))
                                )
                            )
                        )
                    )
                ) :
                React.createElement('p', { className: "text-gray-500 text-center py-8" }, 'No names available. Upload a file or add names manually.')
        ),

        // Add Names (upload + manual entry)
        React.createElement('div', { className: "mb-6 p-4 rounded-lg transparent-section" },
            React.createElement('h2', { className: "text-lg font-semibold mb-3 flex items-center" },
                React.createElement(Upload, { className: "mr-2", size: 20 }),
                'Upload Excel File'
            ),
            React.createElement('input', {
                type: 'file',
                accept: '.xlsx,.xls',
                onChange: handleFileUpload,
                className: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            }),
            React.createElement('p', { className: "text-sm text-gray-600 mt-2" }, 'Upload an Excel file (.xlsx or .xls) containing names')
        ),

        React.createElement('div', { className: "mb-6 p-4 rounded-lg transparent-section" },
            React.createElement('h2', { className: "text-lg font-semibold mb-3 flex items-center" },
                React.createElement(Plus, { className: "mr-2", size: 20 }),
                'Add Names Manually'
            ),
            
            // Single Name with Repeat Count
            React.createElement('div', { className: "mb-4 p-3 rounded-lg transparent-box" },
                React.createElement('h3', { className: "text-sm font-medium text-gray-700 mb-2" }, 'Add Single Name Multiple Times'),
                React.createElement('div', { className: "flex gap-2 items-center" },
                    React.createElement('input', {
                        type: 'text',
                        value: singleName,
                        onChange: (e) => setSingleName(e.target.value),
                        onKeyPress: (e) => e.key === 'Enter' && addSingleName(),
                        placeholder: 'Enter a name',
                        className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    }),
                    React.createElement('input', {
                        type: 'number',
                        value: repeatCount,
                        onChange: (e) => setRepeatCount(Math.max(1, Math.min(50, parseInt(e.target.value) || 1))),
                        min: 1,
                        max: 50,
                        className: "w-16 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-center"
                    }),
                    React.createElement('span', { className: "text-sm text-gray-600" }, 'times'),
                    React.createElement('button', {
                        onClick: addSingleName,
                        disabled: !singleName.trim(),
                        className: "px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center text-sm transition-colors"
                    },
                        React.createElement(Plus, { size: 14, className: "mr-1" }),
                        'Add'
                    )
                ),
                React.createElement('p', { className: "text-xs text-gray-500 mt-1" }, 'Add the same name 1-50 times at once')
            ),

            // Multiple Names Section  
            React.createElement('div', { className: "p-3 rounded-lg transparent-box" },
                React.createElement('h3', { className: "text-sm font-medium text-gray-700 mb-2" }, 'Add Multiple Different Names'),
                React.createElement('div', { className: "space-y-2" },
                    React.createElement('textarea', {
                        value: newName,
                        onChange: (e) => setNewName(e.target.value),
                        placeholder: 'Enter names (separate multiple names with commas, semicolons, or new lines)\nExample: John, Mary; Bob\nSarah',
                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none text-sm",
                        rows: 3
                    }),
                    React.createElement('button', {
                        onClick: addName,
                        disabled: !newName.trim(),
                        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center transition-colors"
                    },
                        React.createElement(Plus, { size: 16, className: "mr-1" }),
                        'Add Names'
                    )
                ),
                React.createElement('p', { className: "text-xs text-gray-500 mt-1" }, 'Separate with commas, semicolons, or new lines')
            )
        ),

        // Reset to Default - very bottom of the page
        React.createElement('div', { className: "mt-8 text-center" },
            React.createElement('button', {
                onClick: resetToDefaults,
                className: "px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 inline-flex items-center text-sm transition-colors"
            },
                React.createElement(RotateCcw, { size: 14, className: "mr-1" }),
                'Reset to Default'
            ),
            React.createElement('p', { className: "text-xs text-gray-600 mt-1" }, 'Clears everything (names, draw history) back to the original state')
        )
    ),
    // Fixed credit in the bottom-right corner
    React.createElement('div', {
        style: { position: 'fixed', right: '10px', bottom: '8px', zIndex: 40, padding: '6px 14px', fontSize: '18px', fontWeight: 600, lineHeight: 1.25, textAlign: 'right', color: '#374151', background: 'rgba(255,255,255,0.8)', borderRadius: '12px', pointerEvents: 'none' }
    }, 'Designed and developed', React.createElement('br'), 'by Bhaaniu Jain')
    );
};

ReactDOM.render(React.createElement(NameSelector), document.getElementById('root'));
