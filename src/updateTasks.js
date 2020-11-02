const taskCon = document.getElementById("taskContainer");

function clearTasks() {

    while (taskCon.firstChild) {
        taskCon.removeChild(taskCon.firstChild);
    }

}

function sortByDate(unordered){
    

}

function orderByDate(unordered){

    

}

function orderByPriority(unordered){



}

const updateTasks = (tasks) => {

    const taskCon = document.getElementById("taskContainer");

    clearTasks();

    const newTask = document.createElement("BUTTON");
    newTask.className = "task"
    newTask.id = task.title
    newTask.textContent = title
    taskCon.appendChild(newTask);

}

export default updateTasks