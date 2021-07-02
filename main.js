//This will manage components for the todo list
//We will use local storage for objects

//There will be a subdirectory of projects that todods can be placed under

//Data Structure
//Name:String, Date:Date, Checked: Boolean

//Data Structure
//Name:String, Todos: Array(Todos^)

//Filters
//Today, This Week, Unchecked, Soonest to Farthest

//Needed Actions - Todo
//Create,Delete,Edit,Check

//Needed Actions - Projects
// Create, Delete, Edit, Create Todo

//Main Elements
const content = document.getElementById("todos");

//Todo Factory  
function ToDo(name, checked = false, date = null,) {
    this.name = name;
    this.date = date;
    this.checked = checked;


    return this;
};
//Project Factory
function Project(name) {
    this.toDoList = [];
    this.name = name;
    return this;
};

const currTodos = [];
const currProj = [];

function createProject(name) {
    const newProject = new Project(name);
    currProj.push(newProject);
    console.log(currProj);
}

function createTodo(name, checked = false, date = null) {
    const newTodo = new ToDo(name, checked, date);
    currTodos.push(newTodo);
    console.log(currTodos);

}
function displayTodos() {
    let display = ``;
    currTodos.forEach((todo) => {
        display += `<div>${todo.name}</div>`;
    });
    content.innerHTML = display;
};

createProject('Project1');
createTodo('Todo1');
createTodo('Todo2');

displayTodos();