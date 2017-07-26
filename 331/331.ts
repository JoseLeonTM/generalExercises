
var op1 = '12+4-1';
var op2 = "5-2*2";
var op3 = "-2-5+9";

function operate(n1: number, sign: string, n2: number): number {
    // console.log("values: ",n1,sign,n2);
    switch (sign) {
        case '*': return n1 * n2;
        case '/': return n1 / n2;
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        default: return undefined;
    }
}
function execute(operation: string): number {
    var result: number,
        op: any[];
    op = operation.match(/\d+|[+-/*]/g).map((i) => {
        if (i.match(/\d+/)) {
            return parseInt(i);
        }
        return i;
    });
    while (op.length != 1) {
        var n1: number, n2: number, sign: string;
        if (op[0] == '-') {
            op.shift();
            op[0] *= -1;
            // console.log("if -: ",op);
        }
        for (let i = 0; i < op.length; i++) {
            if (op[i + 1] == '*' || op[i + 1] == '/') {
                n1 = op[i]; sign = op[i + 1]; n2 = op[i + 2];
                op.splice(i, 2);
                op[i] = operate(n1, sign, n2);
            }
        }
        n1 = op[0]; sign = op[1]; n2 = op[2];
        op.splice(0, 2);
        op[0] = operate(n1, sign, n2);
    }
    return op[0];
}
console.log(op1+' = '+execute(op1));
console.log(op2+' = '+execute(op2));
console.log(op3+' = '+execute(op3));