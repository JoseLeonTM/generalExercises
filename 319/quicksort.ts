export default function sort(original) {
    var arr = [...original];
    function sub(ar) {
        var w = -1, j = 0, p = ar.length - 1, temp;
        while (j < p) {            
            if (ar[j] < ar[p]) {
                w++;                
                temp = ar[j];
                ar[j] = ar[w];
                ar[w] = temp;
            }
            j++;
        }
        w++;
        if (ar[p] < ar[w]) {
            temp = ar[p];
            ar[p] = ar[w];
            ar[w] = temp;
        }
        ////next sub arrays////
        var bef = ar.slice(0, w),
            aft = ar.slice(w + 1);        
        if (bef.length > 1) {
            bef = sub(bef);
        }
        if (aft.length > 1) {
            aft = sub(aft);
        }
        for (let i = 0; i < bef.length; i++) {
            ar[i] = bef[i];
        }
        for (let i = 0; i < aft.length; i++) {
            ar[w+1+i] = aft[i];
        }
        return ar;
    }
    sub(arr);
    console.log("Quicksort: ",arr);
    return arr;
}