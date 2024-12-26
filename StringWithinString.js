// return true if finds substring in mainstring.
function isSubstring(mainString, subString) {
    return mainString.includes(subString);
}

console.log(isSubstring("JavaScript is awesome", "awesome")); // true
console.log(isSubstring("Hello World", "Python")); // false
