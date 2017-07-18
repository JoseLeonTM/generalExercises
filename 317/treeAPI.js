"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildTree() {
    var root, index = 0, cur = null;
    function buildNode(val) {
        return {
            parent: cur,
            children: [],
            value: val
        };
    }
    return {
        init() {
            root = buildNode(index++);
            cur = root;
        },
        addNode() {
            cur.children.push(buildNode(index++));
        },
        selectParent() {
            cur = cur.parent ?
                cur.parent :
                cur;
        },
        selectChild(i) {
            cur = cur.children[i] ?
                cur.children[i] :
                cur;
        },
        printNode() {
            let par = cur.parent ? cur.parent.value : null;
            console.log("Parent: ", par);
            console.log("Node: ", cur.value);
            console.log("Children:");
            for (let i in cur.children) {
                console.log("[" + cur.children[i].value + "]");
            }
        }
    };
}
exports.default = buildTree();
