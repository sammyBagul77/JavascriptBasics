
let frequency = "rarely";
let impact ="minor";

 if(frequency==="always"){
     if (impact==="blocker") {
        console.log("This is P0 level severity bug");
     }else if (impact==="major") {
          console.log("This is P1 level severity bug");
     }else if (impact==="minor") {
          console.log("This is P2 level severity bug");
     }else{
console.log("Something is wrong. Please provide proper impact as blocker, major or minor")

 }

 }else if(frequency==="often"){
     if (impact==="blocker") {
          console.log("This is P1 level severity bug");
     }else if (impact==="major") {
          console.log("This is P2 level severity bug");
     }else if (impact==="minor") {
          console.log("This is P3 level severity bug");
     }else{
console.log("Something is wrong. Please provide proper impact as blocker, major or minor")

 }


 }else if(frequency==="rarely"){
     if (impact==="blocker") {
          console.log("This is P2 level severity bug");
     }else if (impact==="major") {
          console.log("This is P3 level severity bug");
     }else if (impact==="minor") {
          console.log("This is P4 level severity bug");
     }else{
console.log("Something is wrong. Please provide proper impact as blocker, major or minor")

 }


 }else{
console.log("Something is wrong. Please provide proper frequency as always, often or rarely")

 }

 