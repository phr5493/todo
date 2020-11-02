import addTab from './addTab.js';
import deleteTab from './deleteTab.js';
import switchTab from './switchCurrentTab.js';
import generateForm from './addTaskForm.js';
import updateTasks from './updateTasks.js';

/*Object Classes*/
class Project{
    constructor(title){
        this.title = title
        this.tasks = []
    }

}

class Task {
    constructor(title, description, dueDate, priority){
        this.title = title
        this.description = description 
        this.dueDate = dueDate 
        this.priority = priority
        this.subTasks = []
    }

}

/*Functions*/
function initDefaultProject(){

    projectList[0] = new Project("Default")

    addTab("Default")

    currProject = projectList[0]

    document.getElementById("Default").addEventListener("click", function() {
        changeCurrentProject(currProject.title, this.id)
    });

    document.getElementById("Default").classList.add("current");

    window.localStorage.setItem('projects', JSON.stringify(projectList));
}

function readLocalProject(inProjects){
    let i

    for(i in inProjects){
        projectList[i] = new Project(inProjects[i].title)
        if(inProjects[i].tasks != null){
            /*add tasks to array*/
        }
        
        addTab(projectList[i].title)

        document.getElementById(projectList[i].title).addEventListener("click", function() {
            changeCurrentProject(currProject.title, this.id)
        });
    }

}

function findProject(inTitle) {
let i

for (i in projectList){
    if(projectList[i].title == inTitle){
        return i;
    }
}

}

function changeCurrentProject(oldTitle, newTitle){

switchTab(newTitle, oldTitle)

currProject = projectList[findProject(newTitle)]
window.localStorage.setItem('current', JSON.stringify(currProject));

}

/*Set up variables*/
let projectList = []
let currProject, localProjects

/*Reload last state from localstorage*/
localProjects = JSON.parse(window.localStorage.getItem('projects'))
currProject = JSON.parse(window.localStorage.getItem('current'))

/*If localstorage is blank, load the default project. Otherwise, load from local storage*/
if(localProjects == null || currProject == null) initDefaultProject()
else readLocalProject(localProjects)

document.getElementById(currProject.title).classList.add("current");

/*Button Listeners*/
document.getElementById("addProject").addEventListener("click", function() {
    let newTitle = prompt("What is the name of your new project?")
    if (newTitle == null){
        return;
    }
    else if(newTitle == ""){
        alert("A valid name was not put in.\nPlease enter a valid name for the project.")
        return;
    }

    projectList[projectList.length] = new Project(newTitle)
    addTab(newTitle)
    document.getElementById(newTitle).addEventListener("click", function() {
        changeCurrentProject(currProject.title, this.id)
    });
    window.localStorage.setItem('projects', JSON.stringify(projectList));
});

document.getElementById("deleteProject").addEventListener("click", function() {
    /*remove event listener*/
    document.getElementById(currProject.title).removeEventListener("click", function() {
        changeCurrentProject(currProject.title, this.id)
    });

    /*remove tab*/
    deleteTab(currProject.title)

    /*remove from project list*/
    projectList.splice(findProject(currProject.title), 1)

    /*Set new current project*/
    currProject = projectList[0]
    document.getElementById(projectList[0].title).classList.add("current");

    /*update local storage*/
    window.localStorage.setItem('projects', JSON.stringify(projectList));
    window.localStorage.setItem('current', JSON.stringify(currProject));
});

document.getElementById("addTask").addEventListener("click", function(){
    /*Add input form to info container*/
    generateForm(["title", "description", "dueDate", "priority"], ["text", "text", "dateTime", "number"])

    /*Add eventlistener for submit button click*/
    document.getElementById("submitBtn").addEventListener("click", function(){
        currProject.tasks[currProject.tasks.length()] = new Task(document.querySelector("#title").value, document.querySelector("#description").value, document.querySelector("#dueDate").value, document.querySelector("#priority").value)
        updateTasks(currProject.tasks[currProject.tasks])
    });
});