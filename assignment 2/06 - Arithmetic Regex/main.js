const readline = require("readline-sync");

function parseArith(mystring) {

	regexp = new RegExp(/^ *(\-?\d+(\.\d+)?) *([\+\*\/\-]) *(\-?\d+(\.\d+)?)$/)
	if (regexp.test(mystring)) {
		console.log('Yes, it is an arithmetic expr.')

		mystring = mystring.replace(regexp, "$1 $3 $4");
		return mystring.split(' ')
	}
	else {
		console.log('No.')
	}
}
mystring = readline.question("Enter expression: ")
var ret = parseArith(mystring);
if (ret) {
	console.log(ret)
}