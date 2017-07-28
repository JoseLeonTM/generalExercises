"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPath(index, path) {
    var width = (path.length + 1) / 2, arr = [...path], cur = 0, height = Math.ceil(width);
    width = Math.floor(width);
    var hor = '-', line = '|';
    for (let i = 0; i < width; i++) {
        hor += '-';
    }
    hor += '-';
    console.log(hor + "/" + index + "/");
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // let pos = arr.shift();//array gets emptied
            if (path[cur][0] == j && path[cur][1] == i) {
                line += 'x';
                cur++;
            }
            else {
                line += 'o';
            }
        }
        line += '|';
        console.log(line);
        line = '|';
    }
    console.log(hor);
}
exports.default = printPath;
