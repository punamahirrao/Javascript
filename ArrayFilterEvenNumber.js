// 1
const numbers = [1, 2, 3, 4, 5];
const result = numbers
    .map(num => num * 2) // Double each number
    .filter(num => num > 5); // Keep numbers greater than 5
console.log(result); // [6, 8, 10]


// 2
function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
