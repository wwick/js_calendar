function hidden() {
	console.log("reached");
	var hidden = document.getElementsByClassName("hidden");
	var i = 0;
	for (i = 0; i < hidden.length; i++){

		hidden[i].style.display="none";
	}
	show();
}
