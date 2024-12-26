// Recursive logic
function factorialRec(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Non-recurvsive logic
function factorial(n){
    if (n === 0 || n === 1) return 1;

    var fact = 1;
    for(var i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;

}
console.log(factorial(5)); // 120
console.log(factorialRec(5)); // 120