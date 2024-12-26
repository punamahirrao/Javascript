// String concatenation
let greeting = "Hello";
let name = "Alice";
let result = greeting + ", " + name + "!"; // "Hello, Alice!"
let result2 = greeting.concat(", ", name, "!"); // "Hello, Alice!"


// Template Literals
let age = 25;
let sentence = `I am ${age} years old.`; // "I am 25 years old."


// Access characters
let str = "Hello";
console.log(str[0]); // "H"
console.log(str.charAt(1)); // "e"


// String Length and Case
let str1 = "Hello, World!";
console.log(str1.length); // 13
let str2 = "JavaScript";
console.log(str2.toUpperCase()); // "JAVASCRIPT"
console.log(str2.toLowerCase()); // "javascript"


// Substrings 
let str3 = "JavaScript";

console.log(str3.slice(0, 4)); // "Java" (start, end)
console.log(str3.substring(0, 4)); // "Java" (similar to slice)
console.log(str3.substr(0, 4)); // "Java" (start, length)


// Searching strings
let str4 = "Hello, World!";
console.log(str4.indexOf("o")); // 4
console.log(str4.lastIndexOf("o")); // 8


// Trimming
let str5 = "   Hello, World!   ";
console.log(str5.trim()); // "Hello, World!"
console.log(str5.trimStart()); // "Hello, World!   "
console.log(str5.trimEnd()); // "   Hello, World!"


// Splitting strings
let str6 = "Apple, Banana, Cherry";
let fruits = str6.split(", "); // ["Apple", "Banana", "Cherry"]


// Comparing strings
let a = "apple";
let b = "banana";
console.log(a === b); // false
console.log(a < b); // true (alphabetical order)


// Replacing text
let str7 = "Hello, World!";
console.log(str7.replace("World", "JavaScript")); // "Hello, JavaScript!"
console.log(str7.replace(/world/i, "JavaScript")); // Case-insensitive with regex

