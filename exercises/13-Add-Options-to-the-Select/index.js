window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	for (let i of countries) {
		document.querySelector("#mySelect");
		let element = document.createElement("option");
		element.innerHTML = i;
		document.querySelector("#mySelect").appendChild(element);
	}
};

let dropdown = document.getElementById("mySelect");
dropdown.addEventListener("change", function() {
	var result = dropdown.options[dropdown.selectedIndex].text;
	alert(result);
});
