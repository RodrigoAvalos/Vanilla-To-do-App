
/*
-------------------------------------------------------------------------
Objetivo: Escribir en un input y que se vaya agregando
una lista hacia abajo con un checkbox
-------------------------------------------------------------------------
*/


//Guardamos nuestros elementos en variables
var newTask = document.getElementById("new-task");
var taskList = document.getElementById("task-list");

function addTask(e){

  e.preventDefault();
  //Si presiono la letra enter (keycode y wich es dependiendo el browser)
  if(e.keyCode === 13 || e.wich === 13){

    // Creamos un nuevos elementos
    var newtaskLista = document.createElement("li");
    var newTask = document.createElement("span");
    var newTaskCheckbox = document.createElement("input");

    // decimos que el elemento input sea del tipo checkbox
    newTaskCheckbox.type = "checkbox";

    // Agregamos un nuevo contenido a newTask asignandole el valor ingresado
    newTask.textContent = this.value;

    //Agregamos el elemento checkbox y span a la nueva lista creada
    newtaskLista.appendChild(newTaskCheckbox);
    newtaskLista.appendChild(newTask);

    // La nueva lista creada es agregada al elemento "ul" del html
    taskList.appendChild(newtaskLista);

    //Una vez terminado todo esto, se resetea el valor en un string vacio
    this.value = "";

    //Ejecutamos la función de tarea completada
    completeTask();
  }
}

// Se crea el evento y se le pasa la funcion recien creada al evento tecla levantada
newTask.addEventListener("keyup",addTask)



/*
-------------------------------------------------------------------------
Objetivo: lograr que al hacer check la tarea se complete
-------------------------------------------------------------------------
*/

function completeTask(){
  for(var i = 0 ; i<taskList.children.length; i++){
    var check = taskList.children[i].querySelector("input");
    check.addEventListener("change",function(){
      if(this.checked){
        this.parentElement.classList.add("completed");
      }else{
        this.parentElement.removeClass();
      }
    });
  }
}
