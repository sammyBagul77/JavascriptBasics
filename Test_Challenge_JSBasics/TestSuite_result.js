
let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]



let Passed =0;
let Failed =0;
let Skipped =0;
let rate =0;


for(let i=0; i< testResults.length; i++){

if(testResults[i]==="pass"){
    Passed++;
}else if(testResults[i]==="fail"){
    Failed++;
}else if(testResults[i]==="skip"){
    Skipped++;
}

}

rate = (Passed/testResults.length)*100;


const result = (Failed !==0 || Skipped !==0) ? "VERDICT: Minor failures. Review before release." : "VERDICT: All Passed"

console.log(`Total Tests: ${testResults.length}, Passed: ${Passed}, Failed: ${Failed}, Skipped: ${Skipped}, Rate: ${rate}%, ${result}`)