const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

const savedToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const deleteToDo = (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    savedToDos(toDos);
}

const paintToDo = (newToDo) => {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = " ❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    savedToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);
console.log(savedToDo);
if (savedToDo !== null) {
    const parsedToDos = JSON.parse(savedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}else{
    paintToDo(toDos);
}