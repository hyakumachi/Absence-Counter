// index.js

// Function to count absences
function countAbsences(attendanceList) {
    return attendanceList.filter(day => !day.present).length;
}

// Example usage
const attendanceList = [
    { date: '2023-10-01', present: true },
    { date: '2023-10-02', present: false },
    { date: '2023-10-03', present: true },
    { date: '2023-10-04', present: false },
];

const absences = countAbsences(attendanceList);
console.log(`Total absences: ${absences}`);