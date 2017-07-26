
function deleteRepeated(arr:number[]):number[]{
    var present = {};
    for(let i =0;i<arr.length;i++){
        if(present[arr[i]]){
            arr.splice(i--,1);
        }
        else{
            present[arr[i]]=true;
        }
    }
    return arr;
}
var ar = [1,2,3,4,5];
var ar2 = [1,2,3,5,2,1,1,8,56];
console.log("BEFORE:");
console.log(ar);
console.log(ar2);

deleteRepeated(ar);
deleteRepeated(ar2);

console.log("AFTER:");
console.log(ar);
console.log(ar2);

