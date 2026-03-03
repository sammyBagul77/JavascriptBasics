var count = 0;
let urls= ["admndmin@testingacademy.com","admin@testingacademy.com","dmin@testingacademy.com","admin@testingacademy.com"]
let passwords =["Test@1234","Test@123","Test@12","Test@1234"]
let i=0
do{

if(count >= 3){
 console.log(`Attempt ${i+1}: 🔒 ACCOUNT LOCKED - Rejected`);
} else if(urls[i]==="admin@testingacademy.com" && passwords[i]==="Test@1234"){
 console.log("Welcome to your Account");
} else {
     count ++;
     console.log(`Attempt ${i+1}: ❌ FAILED - Strike ${count}/3`);
     if(count >= 3){
      console.log("🚨 ACCOUNT LOCKED");
     }
}
i++;

}while(i<=urls.length-1)