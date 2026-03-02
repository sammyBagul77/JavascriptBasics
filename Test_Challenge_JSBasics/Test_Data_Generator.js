let role  = ["admin","editor","manager","viewer","tester","developer","designer","content manager"]
var totalEmployees = 0;
const dominName = "@testingacademy.com"
let userName = ["Manish","Siva","Deepak","Prabhu","Jay","Adarsh","Sai","Malli"]


for(let i= 1 ; i<= role.length ; i++){
  if(i%3===0){
    console.log(  `user00${i} | ${userName[i-1]} | ${userName[i-1]}${dominName} | ${role[i-1]} | INACTIVE`)
  }else{
    console.log(  `user00${i} | ${userName[i-1]} | ${userName[i-1]}${dominName} | ${role[i-1]} | ACTIVE`)
  }
     
}