export default function C(n1,n2){
    function level(n1,n2){
        while(n1.level>n2.level){
            n1 = n1.parent;
        }        
        return n1;
    }        
    if(n1.level>n2.level){
        n1=level(n1,n2);
    }
    else if(n2.level>n1.level){
        n2=level(n2,n1);
    }
    while(n1.parent!=n2.parent){
        n1= n1.parent;
        n2 = n2.parent;
    }
    return n1.parent;
}