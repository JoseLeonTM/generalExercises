"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sort(arr) {
    var myArray = [...arr], len = myArray.length, result = [];
    function minHeap() {
        let temp;
        for (let i = 0; i < len; i++) {
            let left = myArray[2 * i + 1], right = myArray[2 * i + 2];
            if (myArray[i] > left) {
                temp = myArray[i];
                myArray[i] = left;
                myArray[2 * i + 1] = temp;
            }
            if (myArray[i] > right) {
                temp = myArray[i];
                myArray[i] = right;
                myArray[2 * i + 2] = temp;
            }
        }
        ///SEND THE LARGEST TO THE END///
        temp = myArray[0];
        myArray[0] = myArray[myArray.length - 1];
        myArray[myArray.length - 1] = temp;
    }
    function remove() {
        result.push(myArray.pop());
    }
    while (result.length < len) {
        minHeap();
        remove();
    }
    console.log("Heapsort: ", result);
    return result;
}
exports.default = sort;
