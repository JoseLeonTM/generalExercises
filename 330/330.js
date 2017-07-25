function addDigits(n, target) {
    var add = 0;
    while (n) {
        if (n > 10) {
            let rem = n % 10;
            add += rem;
            n -= rem;
            n /= 10;
        }
        else {
            add += n;
            n = 0;
        }
    }
    if (add == target) {
        return true;
    }
    return false;
}
function checkNumbers(range, target) {
    var result = [], start = range[0], end = range[1];
    while (start <= end) {
        if (addDigits(start, target)) {
            result.push(start);
        }
        start++;
    }
    return result;
}
console.log(checkNumbers([1, 200], 5));
