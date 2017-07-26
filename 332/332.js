"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createList_1 = require("./createList");
function checkArray(input) {
    var palindrome = true, i = 0, j = input.length - 1;
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
function checkLinkedList(input) {
    var palindrome, cur = input, arr = [];
    while (cur) {
        arr.push(cur.value);
        cur = cur.next;
    }
    palindrome = checkArray(arr);
    return palindrome;
}
var ar1 = 'anitalavalatina'.split('');
var ar2 = 'tuesday'.split('');
var li1 = createList_1.default(['a', 'b', 'a', 'b', 'a']);
console.log(checkArray(ar1));
console.log(checkArray(ar2));
console.log(checkLinkedList(li1));
