const accountId = 144553
let accountEmail = "lakshyamittal23503"
var accountPassword = "12345"
accountCity = "Jaipur"

let accontState;
/*
prefer not to use "var"
because of issue in block scope and functional scope

always use "const" and "let"
*/

// accountId = 2 // not allowed

accountEmail = "darshan@123"
accountPassword = 54321
accountCity = "Kishangarh"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accontState])