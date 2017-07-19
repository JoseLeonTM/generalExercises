const values = ['f', 'a', 'c', 'e', 'b', 'd'], indexes = [1, 2, 5, 0, 3, 4];
function buildArray(vals, inds) {
    var result = [];
    result.length = vals.length;
    for (let i = 0; i < result.length; i++) {
        result[inds[i]] = values[i];
    }
    console.log(result);
    return result;
}
buildArray(values, indexes);
