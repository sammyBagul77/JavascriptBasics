let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_LIMIT = 500
let count =0
let SLA_breches=0
 let minResponseTime =  responseTimes[count];
 let maxResponseTime =  responseTimes[count] ;

while(count<=responseTimes.length-1){

if(minResponseTime>responseTimes[count]){
    minResponseTime = responseTimes[count]
}
if(maxResponseTime<responseTimes[count]){
    maxResponseTime = responseTimes[count]
}


     if(responseTimes[count]>SLA_LIMIT){
          SLA_breches ++;
   }
   count++;
}

if(SLA_breches>0){
    console.log(`Total Requests: ${responseTimes.length} Min Response: ${minResponseTime}ms Max Response: ${maxResponseTime}ms SLA Breaches: ${SLA_breches} (${(SLA_breches/responseTimes.length)*100}%) Overall Status: ❌ SLA VIOLATED`)
}else{
    console.log(`Total Requests: ${responseTimes.length} Min Response: ${minResponseTime}ms Max Response: ${maxResponseTime}ms SLA Breaches: ${SLA_breches} (${(SLA_breches/responseTimes.length)*100}%) Overall Status: SLA LIMIT PASSED`)
}