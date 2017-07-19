
export default function sort(original) {
    function splitAndSort(ar) {
        if (ar.length == 1) return ar;
        let length = ar.length,
            half = Math.ceil(ar.length / 2),
            bef = splitAndSort(ar.slice(0, half)),
            aft = splitAndSort(ar.slice(half)),
            result = [],
            i = 0, j = 0;
        while (result.length < length) {
            if (!bef[i]) {
                result.push(aft[j++]);
            }
            else if (!aft[j]) {
                result.push(bef[i++]);
            }
            else if (bef[i] < aft[j]) {
                result.push(bef[i++]);
            }
            else {
                result.push(aft[j++]);
            }
        }   
        return result;
    }
    var result = splitAndSort(original);
    console.log("Mergesort: ",result);
    return result;
}
