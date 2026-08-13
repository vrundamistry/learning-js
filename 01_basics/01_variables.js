const accountId = 19993
let accountEmail = "vrunda@google.com"
var accountPassword = "123456"
accountCity = "Surat"
let accountState;

// accountId = 9 // not allowed


accountEmail = "vm@gmail.com"
accountPassword = "19191919"
accountCity = "Vadodara"


console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])