
function checkPrime(n:number):boolean{
    for(let i=n-1;i>1;i--){
        if(n%i==0){
            // console.log(i);
            return false;
        }
    }
    return true;
}
console.log(checkPrime(3));
console.log(checkPrime(5));
console.log(checkPrime(6));
