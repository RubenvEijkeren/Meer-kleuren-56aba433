var bg;
var title;
function bgcolor(){
	bg = document.querySelector("input").value;
}
function titlecolor(){
	title = document.querySelector("input").value;
}
function apply(){
	document.body.style.backgroundColor = bg;
	document.querySelector("h1").style.color = title;
}