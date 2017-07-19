
const values: string[] = ['f', 'a', 'c', 'e', 'b', 'd'],
    indexes: number[] = [1, 2, 5, 0, 3, 4];

function buildArray(vals:string[],inds:number[]):Array<string>{
    var result : Array<string> = [];
    result.length = vals.length;
    for(let i=0;i<result.length;i++){
        result[inds[i]] = values[i];
    }
    console.log(result);
    return result;
}
buildArray(values,indexes);
