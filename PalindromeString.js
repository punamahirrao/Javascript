
// isPalindrome function return true if string is palindrome and false if its not.
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("xyzyx")); // true
console.log(isPalindrome("abcde")); // false