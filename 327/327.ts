
function recursive(n: number): number {
    var x: number = 1,
        result: number;
    if (n > 1) {
        x = recursive(n - 1);
    }
    result = x * n;
    return result;
}
function iterative(n: number): number {
    var result: number=n;
        for(let i=1;i<n;i++){            
            result*=n-i;
        }
    return result;
}
console.log(recursive(4));
console.log(recursive(7));
console.log(iterative(4));
console.log(iterative(7));