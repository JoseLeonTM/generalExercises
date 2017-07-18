

function merge(ar1, ar2) {
    var arr = [], i = 0, o = 0;
    while (arr.length < ar1.length + ar2.length) {
        if (ar1[i] < ar2[o]) {
            arr.push(ar1[i++]);
        }
        else {
            arr.push(ar2[o++]);
        }
    }
    return arr;
}

var arr1 = [1, 4, 67, 100, 1000],
    arr2 = [-100, -10, 12, 67, 101, 1000, 1200, 6000];

var final = merge(arr1, arr2);
console.log(final);