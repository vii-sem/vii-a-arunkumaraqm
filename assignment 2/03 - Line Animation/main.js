var rotator, interval;
var imageDir = 'images/';
var delayInSecs = 2;

var images = ['Line 1.jpg', 'Line 2.jpg', 'Line 3.jpg', 'Line 4.jpg'];
for (var i = images.length - 1; i >= 0; i--) {
	temp = new Image();
	temp.src = imageDir + images[i];
	images[i] = temp;
}

var idx = 0;
var len = images.length;
function animate() {
	rotator.src = images[idx].src;
	idx = (idx + 1) % len;
}


window.onload = function(){

	rotator = document.getElementById('rotating-image');
	console.log(rotator);

	interval = setInterval(animate, delayInSecs * 100);
}


function faster(){
	clearInterval(interval);
	delayInSecs -= 0.5;
	if (delayInSecs == 0) {delayInSecs = 0.5;}
	interval = setInterval(animate, delayInSecs * 100);
}
function slower(){
	clearInterval(interval);
	delayInSecs += 0.5;
	interval = setInterval(animate, delayInSecs * 100);
}