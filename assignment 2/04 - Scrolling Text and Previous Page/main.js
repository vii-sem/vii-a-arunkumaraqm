window.onload = function(){
	var scr = function() {window.scroll(0, window.scrollY + 50);};
	setTimeout(scr,1000);
	setInterval(scr,1000);
}