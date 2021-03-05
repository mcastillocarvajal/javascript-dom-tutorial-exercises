// Your code here

const addTask = document.querySelector("#addToDo");
const removeTask = document.querySelectorAll(".fa-trash");

addTask.addEventListener("keypress", function(event) {
	console.log(event.key);
	if (event.key == "Enter") {
		const taskInput = event.target.value;
		console.log(taskInput);
		const newListItem = document.createElement("li");
		console.log(newListItem);
		const getListItem = document.querySelector("ul");
		const htmlAddition = `<span><i class="fa fa-trash"></i></span> ${taskInput}`;
		newListItem.innerHTML = htmlAddition;
		getListItem.appendChild(newListItem);
	}
});

removeTask.forEach(element => {
	console.log(element);
	element.addEventListener("click", function(event) {
		let iconSelected = event.target.parentNode.parentNode;
		const getListItem = document.querySelector("ul");
		getListItem.removeChild(iconSelected);
	});
});
