function countWords() {
	var text = document.getElementById('description-input').value;
	var count = 0;

	// for (var i = 0; i < text.length; ++i)
	// {
	// 	if (text[i] == ' ') {
	// 		count ++;	
	// 	}
	// }
	// count++;

	// var words = text.split(' '); // fails for multiple continuious spaces

	var words = text.split(/ +/) // this regex works

	console.log(words);
	count = words.length;

	document.getElementById("show-count").innerHTML = count;
}

function validateAge() {
	var age = document.getElementById('age-input').value;
	var msg = "";
	if (age == "") {
		return;
	}
	else if (isNaN(age)) {
		msg = "Input must be a number";
	}
	else if (age < 18) {
		msg = "Invalid age.";
	}
	else{
		msg = "";
	}

	var validationErrorTextElement = document.getElementById('age-validation-error');
	validationErrorTextElement.innerHTML = msg;

}