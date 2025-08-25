# Training Records App

A simple React application for tracking daily step counts and training records.

## Features

- 📅 **Date-based tracking**: Record steps for specific dates
- 📊 **Step counting**: Track daily step counts
- ➕ **Add records**: Add new training records with date and step count
- 🗑️ **Delete records**: Remove unwanted records
- 📈 **Automatic sorting**: Records are automatically sorted by date (newest first)
- 🔄 **Duplicate handling**: Multiple entries for the same date are automatically combined

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TatiMarksman/training-records.git
cd training-records
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Add a new record**:
   - Select a date using the date picker
   - Enter the number of steps
   - Click "Add" to save the record

2. **View records**:
   - All records are displayed in a table format
   - Records are sorted by date (newest first)
   - Each record shows the date and total steps

3. **Delete a record**:
   - Click the "Delete" button next to any record to remove it

## Project Structure

```
training-records/
├── App.js          # Main application component
├── StepForm.js     # Form for adding new records
├── StepList.js     # Component for displaying records list
├── StepItem.js     # Individual record item component
└── README.md       # This file
```

## Technologies Used

- **React**: Frontend framework
- **JavaScript (ES6+)**: Programming language
- **CSS**: Styling (inline styles)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**TatiMarksman** - [GitHub Profile](https://github.com/TatiMarksman)

---

Feel free to star this repository if you find it useful! ⭐
