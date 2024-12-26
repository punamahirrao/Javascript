// Adding elements to the end of an array using push()
const pushElement = () => {
    let fruits = ["Apple", "Banana"];
    fruits.push("Orange", "Grapes");
    console.log(fruits); // ["Apple", "Banana", "Orange", "Grapes"]
}

// Removing elements from the end of the array using pop()
const popElement = () => {
    let lastFruit = fruits.pop();
    console.log(lastFruit); // "Grapes"
    console.log(fruits); // ["Apple", "Banana", "Orange"]
}

// Removing elements from the front of the array using shift()
const shiftElement = () => {
    let firstVeggie = vegetables.shift();
    console.log(firstVeggie); // "Tomato"
    console.log(vegetables); // ["Cucumber", "Carrot", "Potato"]
}

// Adding elements to the front of an array using unshift()
const unShiftElement = () => {
    let vegetables = ["Carrot", "Potato"];
    vegetables.unshift("Tomato", "Cucumber");
    console.log(vegetables); // ["Tomato", "Cucumber", "Carrot", "Potato"]
}

// Iterate using forEach()
const forEachLoop = () => {
    let numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(num, index) {
        console.log(`Element at index ${index} is ${num}`);
    });
}


// Transform array into another array using map()
const mapArray = () => {
    let numbers = [1, 2, 3, 4, 5];
    let doubled = numbers.map(function(num) {
        return num * 2;
    });
    console.log(doubled); // [2, 4, 6, 8, 10]
}

// Filter elements in an array
const FilterArray = () => {
    let numbers = [1, 2, 3, 4, 5, 6];
    let evenNumbers = numbers.filter(function(num) {
        return num % 2 === 0;
    });
    console.log(evenNumbers); // [2, 4, 6]
}



// Find element in an array
const FindArrayElement = () => {
    let products = [
        { name: "Shirt", price: 30 },
        { name: "Pants", price: 50 },
        { name: "Shoes", price: 80 }
    ];
    let expensiveProduct = products.find(function(product) {
        return product.price > 60;
    });
    console.log(expensiveProduct); // { name: "Shoes", price: 80 }
}

// Sort an array
const SortArray = () => {
    let numbers = [5, 3, 8, 1, 2];

    // Ascending order
    numbers.sort(function(a, b) {
        return a - b;
    });
    console.log(numbers); // [1, 2, 3, 5, 8]

    // Descending order
    numbers.sort(function(a, b) {
        return b - a;
    });
    console.log(numbers); // [8, 5, 3, 2, 1]
}


