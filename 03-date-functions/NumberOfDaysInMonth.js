function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

console.log(daysInMonth(2024, 12)); // 29 (February 2024)
console.log(daysInMonth(2023, 1)); // 28 (February 2023)
