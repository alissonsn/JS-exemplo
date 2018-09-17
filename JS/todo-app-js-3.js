// adaptado de https://codepen.io/franklynroth/pen/ZYeaBd
var taskInput = document.getElementById("new-task");//Add a new task.
var addButton = document.getElementsByTagName("button")[0];//first button
var taskHolder = document.getElementById("tasks");//ul of #incomplete-tasks

var createNewTaskElement = function(taskString){

	var listItem = document.createElement("li");
	var label = document.createElement("label");//label
	var deleteButton = document.createElement("button");//delete button

	label.innerText=taskString;
	deleteButton.innerText = "X";
	deleteButton.className = "delete";

	listItem.appendChild(label);
	listItem.appendChild(deleteButton);
	return listItem;
}

var addTask = function() {
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem = createNewTaskElement(taskInput.value);
	//Append listItem to incompleteTaskHolder
    taskHolder.appendChild(listItem);
	bindTaskEvents(listItem, task);

	taskInput.value="digite aqui";
}

var deleteTask = function() {
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}

var task = function(){
		console.log("Task...");

	var listItem=this.parentNode;
	tasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, task);

}

//Set the click handler to the addTask function.
//addButton.onclick=addTask;
addButton.addEventListener("click",addTask);

var bindTaskEvents = function(taskListItem,checkBoxEventHandler) {
	console.log("bind list item events");
    //select ListItems children
	var deleteButton=taskListItem.querySelector("button.delete");
    deleteButton.onclick=deleteTask;
}

//cycle over TaskHolder ul list items
	//for each list item
	for (var i=0; i < taskHolder.children.length; i++){

		//bind events to list items chldren(tasksCompleted)
		bindTaskEvents(taskHolder.children[i],task);
	}
