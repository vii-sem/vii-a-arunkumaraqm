function validateRollno() {
	var rollno = document.getElementById('rollno-input').value;
	var msg;
	var isValid = false;
	console.log('here');

	if (isNaN(rollno)) {
		msg = 'Not a number';
	}
	else {
		console.log('parsing');
		rollno = parseInt(rollno);
		var nfDigits = 0;
		while (rollno)
		{
			rollno = Math.floor(rollno/10);
			nfDigits ++;
			console.log(rollno)
		}

		if (nfDigits == 7) {
			msg = "";
			isValid = true;
		}
		else {
			msg = "not two digits"
		}
	}

	var validationErrorTextElement = document.getElementById('rollno-validation-error');
	validationErrorTextElement.innerHTML = isValid? '<span style="color:green;">⚑</span>': '<span style="color:red;">⚑</span>';
	
}

// ⚑