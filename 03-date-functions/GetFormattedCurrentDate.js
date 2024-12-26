// 1. Get current date
const now = new Date();
console.log(now); // e.g., "2024-12-21T10:30:00.000Z"

// 2. Get current date in format YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

console.log(formatDate(new Date())); // e.g., "2024-12-21"
