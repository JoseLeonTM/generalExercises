

const arr = [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16];
const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function findMissing(arr){
    let index=0;
    while(true){
        if(index+1>arr.length){
            console.log("No number is missing");
            return null;
        }
        if(arr[index]!=++index){
            console.log(index+" is missing");
            return index;
        }        
    }
}
findMissing(arr);
findMissing(arr2);