"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printPath_1 = require("./printPath");
function paths(range) {
    var width = range[0], height = range[1], len = width + height - 1, paths = [];
    function traverse(path, x, y) {
        // console.log('-----------------');
        var cur = [...path];
        // console.log("Path: ", cur);
        if (cur.length == len) {
            paths.push(cur);
            // console.log("ADDED NEW PATH: ",paths.length);
            // console.log("X: "+x+" Y: "+y);
            return true;
        }
        if (x + 1 < width) {
            // cur.push([x, y]);
            // console.log("Going RIGHT");
            traverse([...cur, [x + 1, y]], x + 1, y);
        }
        if (y + 1 < height) {
            // cur.push([x, y]);
            // console.log("Going DOWN");
            traverse([...cur, [x, y + 1]], x, y + 1);
        }
        // console.log("Path: ",path);
        return false;
    }
    ;
    traverse([[0, 0]], 0, 0);
    return paths;
}
var m1 = [4, 4];
var m2 = [3, 3];
var result = paths(m1);
console.log("Results: ", result.length);
for (let i in result) {
    printPath_1.default(i, result[i]);
}
