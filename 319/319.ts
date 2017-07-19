
import Quick from './quicksort';
import Merge from './mergesort';
import Heap from './heapsort';

const arr = [12,5,89,654,2100,87,5,15,32];
// const arr = [7,2,1,8,6,3,5,4];
// const arr= [1,5,3,4,2];

var quicksorted = Quick(arr);
var mergesorted = Merge(arr);
var heapsorted = Heap(arr);
console.log("Original: ",arr);
