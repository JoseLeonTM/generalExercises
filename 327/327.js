function recursive(n) {
    var x = 1, result;
    if (n > 1) {
        x = recursive(n - 1);
    }
    result = x * n;
    return result;
}
function iterative(n) {
    var result = n;
    for (let i = 1; i < n; i++) {
        result *= n - i;
    }
    return result;
}
console.log(recursive(4));
console.log(recursive(7));
console.log(iterative(4));
console.log(iterative(7));
