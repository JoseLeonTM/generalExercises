
interface Node {
    parent: Node | null;
    children: Node[];
    value: number;
    level: number;
}
function buildTree() {
    var root, index = 0, cur = null, lvl = 0;
    function buildNode(val: number, lvl: number): Node {
        return {
            parent: cur,
            children: [],
            value: val,
            level: lvl
        }
    }
    return {
        init() {
            root = buildNode(index++, lvl);
            cur = root;
        },
        addNode() {
            cur.children.push(buildNode(index++, lvl + 1));
        },
        selectParent() {
            lvl--;
            cur = cur.parent ?
                cur.parent :
                cur;
        },
        selectChild(i) {
            lvl++;
            cur = cur.children[i] ?
                cur.children[i] :
                cur;
        },
        printNode() {
            let par = cur.parent ? cur.parent.value : null;
            console.log("Parent: [" + par + "]");
            console.log("Node: [" + cur.value + "]");
            console.log("Level: --" + cur.level + "--");
            let children = '';
            for (let i in cur.children) {
                children += "[" + cur.children[i].value + "] ";
            }
            console.log("Children: ", children);
        },
        returnNode() {
            return cur;
        }
    }
}

// export default buildTree();
var build = buildTree();
export var root, node1, node2;
(function () {
    build.init();
    build.addNode();
    build.addNode();
    build.addNode();
    build.selectChild(2);
    build.addNode();
    build.selectParent();
    build.selectChild(0);
    build.addNode();
    build.addNode();
    build.addNode();
    build.selectParent();
    build.selectChild(2);
    build.selectChild(0);
    build.addNode();
    build.selectChild(0);
    build.addNode();
    // node2 = build.returnNode(); /*Node value 8 */
    build.selectParent();
    build.selectParent();
    build.selectParent();
    build.selectChild(0);
    build.selectChild(0);
    build.addNode();
    build.selectChild(0);
    node1 = build.returnNode(); /*Node value 10*/
    build.selectParent();
    build.selectParent();
    build.selectChild(2);
    node2 = build.returnNode(); /*Node value 7*/
    build.selectParent();
    build.selectParent();
    root = build.returnNode();
})(); 
