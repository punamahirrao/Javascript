function timestampToDate(timestamp) {
    return new Date(timestamp).toLocaleString();
}

console.log(timestampToDate(1703414400000)); // e.g., "12/24/2024, 12:00:00 AM"
