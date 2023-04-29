const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
	localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
	const li = (event.target.parentElement);
	li.remove();
	toDos = toDos.filter(item => item.id !== parseInt(li.id));
	saveToDos();
}

function paintToDo(newToDoObj){
	const li = document.createElement("li");
	li.id = newToDoObj.id;
	const span = document.createElement("span");
	span.innerText = newToDoObj.text;
	const button = document.createElement("button");
	button.innerText = "❌";
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
	button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	const newToDoObj = {
		text: newToDo,
		id: Date.now(),
	};
	toDos.push(newToDoObj);
	paintToDo(newToDoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if (savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	parsedToDos.forEach(item => {
		paintToDo(item);
		toDos.push(item);
	});
}
