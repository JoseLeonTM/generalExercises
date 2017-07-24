
import { BuType, Building } from './building';

var a = new Building(10);

// function 
a.addElevators([8,8,5,5]);
// a.addElevators([8]);
// setTimeout(() => {
    a.print();
    console.log("1 more in 3rd");
    a.addRequest(5, 1);
    console.log("2 more in 2nd");
    a.addRequest(2,2);
    console.log("1 more in 1st");
    a.addRequest(1,1);
    console.log("1 less in 8th");
    a.addRequest(8,-1);
    console.log("5 more in PB");
    a.addRequest(0,5);
    // console.log("7 more 3th");
    // a.addRequest(3,7);
    // console.log("3 less in 3rd");
    // a.addRequest(3,-3);
    // console.log("1 more in 2th");
    // a.addRequest(2,1);
// }, 1000);
// a.print();