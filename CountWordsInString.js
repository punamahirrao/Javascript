function wordCount(str) {
    return str.trim().split(/\s+/).length;
}

console.log(wordCount("   JavaScript is awesome   ")); // 3
