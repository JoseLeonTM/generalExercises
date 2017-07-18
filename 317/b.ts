
export default function B(n1, n2) {
    var par2 = n2.parent;
    function checkParents(node) {
        var par1 = node.parent;
        while (par1) {
            if (par1 == par2) {
                return par1;
            }
            par1 = par1.parent;
        }
    }
    while(par2){
        var common = checkParents(n1);
        if(common){
            return common;
        }
        par2 = par2.parent;
        
    }
}