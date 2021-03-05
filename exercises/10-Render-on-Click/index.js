let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var elem = document.createElement("div");
	elem.innerHTML = "Hello World";
	elem.style.background = "yellow";
	document.querySelector("body").appendChild(elem);
});
