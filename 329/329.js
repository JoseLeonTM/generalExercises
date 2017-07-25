"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const values_1 = require("./values");
var words = ['abc', 'bc', 'bcd', 'abb', 'def'];
function sort(words) {
    var sorted = [];
    var sums = {};
    //GET THE SUMS OF EACH WORD//
    for (let i = 0; i < words.length; i++) {
        sums[words[i]] = 0;
        for (let j = 0; j < words[i].length; j++) {
            sums[words[i]] += values_1.default[words[i][j].toUpperCase()];
        }
    }
    //PUSH THE MINIMUN INTO THE SORTED ARRAY//
    let q = [...words];
    while (sorted.length < words.length) {
        let min = q[0];
        for (let i = 1; i < q.length; i++) {
            if (sums[min] > sums[q[i]]) {
                min = q[i];
                q.splice(i, 1);
            }
        }
        if (min == q[0]) {
            q.shift();
        }
        sorted.push(min);
    }
    return sorted;
}
console.log(sort(words));
