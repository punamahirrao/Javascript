function dateDifference(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
}

console.log(dateDifference(new Date("2024-12-25"), new Date("2024-12-21"))); // 4
