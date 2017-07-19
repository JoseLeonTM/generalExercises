
const arr = [1, 2, 3, 4, 5, 6];
const second = [-10,-4,12,32,56,65,84,458,8912];

function bin(ar, target) {

    let b = 0, e = ar.length;
    while (true) {
        let half = Math.floor((e + b) / 2);
        if (ar[half] == target) {
            console.log(half);
            return half;
        }
        if (target < ar[half]) {
            e=half;            
        }
        if (target > ar[half]) {
            b=half;
        }
        if(b==e){
            console.log("Not found");
            return null;
        }
    }
}
bin(arr,2);
bin(arr, 0);
bin(arr,6);
bin(second,458);