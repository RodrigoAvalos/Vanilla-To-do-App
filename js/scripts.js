

//Guardamos nuestros elementos en variables
var newTask = document.getElementById("new-task");
var taskList = document.getElementById("task-list");

function addTask(e){

  e.preventDefault();
  if(e.keyCode === 13 || e.wich === 13){
    var newtaskEl = document.createElement("li");
    var newTask = document.createElement("span");
    var newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type = "checkbox";
    newTask.textContent = this.value;
    newtaskEl.appendChild(newTaskCheckbox);
    newtaskEl.appendChild(newTask);
    taskList.appendChild(newtaskEl);
    this.value = "";
  }
}

newTask.addEventListener("keyup",addTask)
