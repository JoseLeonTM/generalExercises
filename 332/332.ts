import createList, { node } from './createList';

function checkArray(input: string[]): boolean {
    var palindrome: boolean = true,
        i: number = 0,
        j: number = input.length - 1;
    while (palindrome) {
        if (input[i] != input[j]) {
            palindrome = false;
        }
        if (i == j) {
            return palindrome;
        }
        i++;
        j--;
    }
    return palindrome;
}
function checkLinkedList(input: node): boolean {
    var palindrome: boolean,
        cur = input,
        arr: string[] = [];
    while (cur) {
        arr.push(cur.value);
        cur = cur.next;
    }
    palindrome = checkArray(arr);
    return palindrome;
}
var ar1 = 'anitalavalatina'.split('');
var ar2 = 'tuesday'.split('');
var li1 = createList(['a', 'b', 'a','b','a']);
console.log(checkArray(ar1));
console.log(checkArray(ar2));
console.log(checkLinkedList(li1));
