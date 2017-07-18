

export default function A(n1, n2) {
    let p1 = [], p2 = [];
    function parents(node) {
        let cur = node, arr = [];
        while (cur) {
            arr.push(cur.parent);
            cur = cur.parent;
        }
        return arr;
    }
    p1 = parents(n1);
    p2= parents(n2);
    for(let i =0, l1= p1.length;i<l1;i++){
        for(let o=0, l2=p2.length;o<l2;o++){
            if(p1[i]==p2[o]){                
                return p1[i];
            }
        }
    }
}