let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var elem = document.createElement("li");
	elem.innerHTML = "Fourth Element";
	document.querySelector("#myList").appendChild(elem);
});
