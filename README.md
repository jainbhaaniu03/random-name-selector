# Random Name Selector

A simple, web-based tool for randomly selecting names from a customizable list. Perfect for classroom activities, team selections, prize drawings, or any situation where you need to pick names fairly and randomly.

## 🌟 Features

- **Excel File Import** - Upload `.xlsx` or `.xls` files containing names
- **Manual Name Entry** - Add individual names or multiple names at once
- **Bulk Name Addition** - Add the same name multiple times (1-50 repetitions)
- **Smart Name Parsing** - Automatically separates names using commas, semicolons, or line breaks
- **Search Functionality** - Find and count occurrences of specific names
- **Random Selection with Animation** - Engaging 2-second spin animation before revealing the selected name
- **Selective Deletion** - Remove individual occurrences or all instances of a name
- **Export to Excel** - Download your name list as an Excel file
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🛠️ How to Use

### 1. Adding Names

#### Upload Excel File
- Click the file upload area
- Select an Excel file (.xlsx or .xls) containing names
- Names can be in any column or row - the tool extracts all text automatically

#### Add Names Manually
- **Single Name Multiple Times**: Enter a name and specify how many times to add it (1-50)
- **Multiple Different Names**: Enter names separated by commas, semicolons, or new lines
  - Example: `John, Mary; Bob` or one name per line

### 2. Managing Names

- **View Current List**: See all names with their individual delete buttons
- **Search Names**: Use the search box to find and count specific names
- **Delete Individual**: Click the ❌ button next to any name to remove one occurrence
- **Clear All**: Remove all names at once with confirmation
- **Export List**: Download your current name list as an Excel file

### 3. Random Selection

- Click "Select Random Name" to start the selection process
- Watch the 2-second animation as it "spins" through options
- The selected name appears with options to delete all occurrences of that name

## 🔧 Technical Details

- **Frontend Only**: Pure HTML, CSS, and JavaScript - no server required
- **Libraries Used**:
  - React 18.2.0 (for UI components)
  - SheetJS (for Excel file handling)
  - Tailwind CSS (for styling)
  - Custom Lucide React icons
- **File Support**: Excel files (.xlsx, .xls)
- **Browser Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)
