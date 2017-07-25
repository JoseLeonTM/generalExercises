import values from './values';

var words = ['abc', 'bc', 'bcd', 'abb', 'def'];

function sort(words: string[]): string[] {
    var sorted: string[] = [];
    var sums = {};
    //GET THE SUMS OF EACH WORD//
    for (let i = 0; i < words.length; i++) {
        sums[words[i]] = 0;
        for (let j = 0; j < words[i].length; j++) {
            sums[words[i]] += values[words[i][j].toUpperCase()];
        }
    }
    //PUSH THE MINIMUN INTO THE SORTED ARRAY//
    let q: string[] = [...words];
    while (sorted.length < words.length) {
        let min: string = q[0];
        for (let i = 1; i < q.length; i++) {
            if (sums[min] > sums[q[i]]) {
                min = q[i];
                q.splice(i, 1);
            }
        }
        if(min==q[0]){
            q.shift();
        }
        sorted.push(min);
    }
    return sorted;
}
console.log(sort(words));
