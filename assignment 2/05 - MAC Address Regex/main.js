const readline = require("readline-sync");

mystring = readline.question("Enter MAC address: ")
regexp = new RegExp(/^([0-9A-F][0-9A-F]:){5,5}[0-9A-F][0-9A-F]$/)
if (regexp.test(mystring)){
	console.log('Yes, it is a MAC address.')
}
else{
	console.log('No.')
}