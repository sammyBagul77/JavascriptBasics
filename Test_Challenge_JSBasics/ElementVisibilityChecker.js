let isPresent = true
let isDisplayed = true
let isEnabled = false

let elementStatus = (isPresent === true && isDisplayed === true && isEnabled === true) ? "READY"
    : (isPresent === true && isDisplayed === true && isEnabled === false) ? "DISABLED"
    : (isPresent === true && isDisplayed === false) ? "HIDDEN" : "NOT FOUND";

let severity = (isPresent === false) ? "CRITICAL"
    : (isPresent === true && (isDisplayed === false || isEnabled === false)) ? "WARNING"
    : (isPresent === true && isDisplayed === true && isEnabled === true) ? "OK" : "OK";

console.log(`Status : ${elementStatus}, Severity : ${severity}`)