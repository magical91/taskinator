var formEl = document.querySelector("#task-form");
var tasksToDo = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
    event.preventDefault();
  
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDo.appendChild(listItemEl);
};


formEl.addEventListener("submit", createTaskHandler);

