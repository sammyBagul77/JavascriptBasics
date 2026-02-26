
let a =13;
let b =2;
let c= 1;

if (a === 0 || b === 0 || c === 0) {
    console.log("Not a triangle");
} else if (a === b && b === c) {
    console.log("Equilateral triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}

// if(a ===0 || b===0 || c===0){
//  console.log("This is not a triangle")
// }else{
// if(a===b || b===c || c===a){
//  console.log("This is isosceles triangle ");

// } else if(a === b && b === c){
//  console.log("This is equilateral triangle ");

// } else if(a !== b && b !== c){
//      console.log("This is scalene triangle ");
// }
// }