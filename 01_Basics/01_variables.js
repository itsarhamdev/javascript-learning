const accountId = 144553
let accountEmail ="arhammjungleboy@gmail.com"
var accountPassword ="12345"
accountCity = "Lucknow"
let accountstate ;

// accountId = 32   //cannot change when writing const keyword 

console.log(accountId);

accountEmail ="abcd.com"
accountPassword ="68345"
accountCity = "Delhi"

console.table([ accountId , accountEmail , accountPassword , accountCity , accountstate ])

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
