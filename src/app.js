import "./css/style.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { format, getHours, getMinutes } from "date-fns";

const getLocalstorage = () => {
  const currentProjects = JSON.parse(localStorage.getItem("myProjects"));
  return currentProjects;
};

const projects = (() => {
  const current = [];
  return { current };
})();

const removeBoards = () => {
  let projectDetail = document.querySelector(".projectDetail");
  let taskBoard = document.querySelector(".taskBoard");
  if (projectDetail) {
    projectDetail.remove();
  }
  if (taskBoard) {
    taskBoard.remove();
  }
};

const projectDetail = (project, index) => {
  removeBoards();
  let section = document.querySelector("section");
  const projectDetail = document.createElement("div");
  projectDetail.classList.add("projectDetail");
  const h1 = document.createElement("h1");
  h1.innerText = `${project.title}`;
  projectDetail.appendChild(h1);
  const p = document.createElement("p");
  p.innerText = `${project.description}`;
  projectDetail.appendChild(p);
  const newTaskButton = document.createElement("button");
  newTaskButton.innerText = "Add New Task";
  projectDetail.appendChild(newTaskButton);
  section.appendChild(projectDetail);

  /*Task Board*/
  const taskBoard = document.createElement("div");
  taskBoard.classList.add("taskBoard");
  const taskBoardTitle = document.createElement("h2");
  taskBoardTitle.innerText = "Tasks";
  taskBoard.appendChild(taskBoardTitle);
  const taskList = document.createElement("ul");

  projects.current[index].tasks.forEach(function (task, taskIndex) {
    const taskListItem = document.createElement("li");
    taskListItem.innerText = `${task.taskTitle}`;
    const editTask = document.createElement("li");
    editTask.classList.add("fas", "fa-edit");
    taskListItem.appendChild(editTask);
    const removeTaskContainer = document.createElement("span");
    const removeTask = document.createElement("li");
    removeTask.classList.add("fas", "fa-trash-alt");
    removeTaskContainer.appendChild(removeTask);
    taskListItem.appendChild(removeTaskContainer);
    taskList.appendChild(taskListItem);

    /*TASK LISTENERS*/
    taskListItem.children[1].addEventListener("click", () => {
      taskListItem.parentNode.removeChild(taskListItem);
      projects.current[index].tasks.splice(taskIndex, 1);

      saveLocalstorage(projects.current);
    });
  });
  taskBoard.appendChild(taskList);
  section.appendChild(taskBoard);

  /*newTaskButton Listener*/
  newTaskButton.addEventListener("click", function () {
    form("newTask", "", index);
  });
};

const removeAvoidInteractionBox = () => {
  let avoidInteractionBox = document.querySelector(".avoidInteractionBox");
  if (avoidInteractionBox) {
    avoidInteractionBox.remove();
  }
};

const removeWindow = () => {
  if (document.querySelector(".new-box")) {
    const projectWindow = document.querySelector(".new-box");
    projectWindow.parentNode.removeChild(projectWindow);
  }
  removeAvoidInteractionBox();
};

const saveLocalstorage = (currentProjects) => {
  localStorage.setItem("myProjects", JSON.stringify(currentProjects));
  renderProjects();
  removeWindow();
};

const project = (title, description) => {
  return { title: title, description: description, tasks: [] };
};

const editProject = (title, description, index) => {
  let editedProject = project(title, description);
  projects.current[index] = editedProject;
  saveLocalstorage(projects.current);
  projectDetail(editedProject, index);
};

const createProject = (title, description) => {
  const newProject = project(title, description);
  projects.current.push(newProject);
  saveLocalstorage(projects.current);
};

const newProjectValidation = (title, description) => {
  if (title && description) {
    createProject(title, description);
  }
};

const editProjectValidation = (title, description, index) => {
  if (title && description) {
    editProject(title, description, index);
  }
};

const formButton = (buttonText, buttonClass) => {
  const button = document.createElement("input");
  button.setAttribute("type", "button");
  button.classList.add(`${buttonClass}`);
  button.setAttribute("value", `${buttonText}`);
  return button;
};

const priorityField = () => {
  const div6 = document.createElement("div");
  div6.classList.add("textbox");
  const i = document.createElement("i");
  i.classList.add("fas", "fa-calendar-week");
  div6.appendChild(i);
  const select = document.createElement("select");
  select.setAttribute("id", "priority");
  const opt1 = document.createElement("option");
  opt1.innerText = "Low";
  select.appendChild(opt1);
  const opt2 = document.createElement("option");
  opt2.innerText = "Normal";
  select.appendChild(opt2);
  const opt3 = document.createElement("option");
  opt3.innerText = "Hight";
  select.appendChild(opt3);
  div6.appendChild(select);
  return div6;
};

const hourField = () => {
  const div5 = document.createElement("div");
  div5.classList.add("textbox");
  const i = document.createElement("i");
  i.classList.add("far", "fa-clock");
  div5.appendChild(i);
  const input = document.createElement("input");
  input.setAttribute("type", "time");
  input.setAttribute("id", "time");
  div5.appendChild(input);
  return div5;
};

const dateField = () => {
  const div4 = document.createElement("div");
  div4.classList.add("textbox");
  const i = document.createElement("i");
  i.classList.add("fas", "fa-calendar-week");
  div4.appendChild(i);
  const input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("id", "date");
  div4.appendChild(input);
  return div4;
};

const descriptionField = (inputValue = "") => {
  const div3 = document.createElement("div");
  div3.classList.add("textbox");
  const i2 = document.createElement("i");
  i2.classList.add("fas", "fa-edit");
  const textarea = document.createElement("textarea");
  textarea.setAttribute("placeholder", "Description");
  textarea.setAttribute("id", "description");
  textarea.innerText = inputValue;
  div3.appendChild(textarea);
  return div3;
};

const titleField = (inputValue = "") => {
  const div2 = document.createElement("div");
  div2.classList.add("textbox");
  const i = document.createElement("i");
  i.classList.add("fas", "fa-tag");
  div2.appendChild(i);
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Title");
  input.setAttribute("id", "title");
  input.setAttribute("value", inputValue);
  div2.appendChild(input);
  return div2;
};

const formTitle = (title) => {
  const h1 = document.createElement("h1");
  h1.innerText = `${title}`;
  return h1;
};

const addNewTask = (
  newTaskTitle,
  newTaskDescription,
  newTaskDate,
  newTaskHour,
  newTaskPriority,
  index
) => {
  projects.current[index].tasks.push({
    taskTitle: newTaskTitle,
    taskDescription: newTaskDescription,
    taskDate: newTaskDate,
    taskHour: newTaskHour,
    taskPriority: newTaskPriority,
  });
  saveLocalstorage(projects.current);
};

const cancelButton = () => {
  const cancelButton = document.createElement("input");
  cancelButton.setAttribute("type", "button");
  cancelButton.classList.add("cancelButton");
  cancelButton.setAttribute("value", "Cancel");

  /* CANCEL BUTTON LISTENER*/
  cancelButton.addEventListener("click", function () {
    removeWindow();
  });
  return cancelButton;
};

const newTaskValidation = (
  newTaskTitle,
  newTaskDescription,
  newTaskDate,
  newTaskHour,
  newTaskPriority
) => {
  if (
    newTaskTitle &&
    newTaskDescription &&
    newTaskDate &&
    newTaskHour &&
    newTaskPriority
  ) {
    let today = format(new Date(), "dd/MM/yyyy");
    let selectedDay = format(
      new Date(newTaskDate.replace(/-/g, "/")),
      "dd/MM/yyyy"
    );
    if (selectedDay >= today) {
      if (selectedDay === today) {
        console.log("same day");
        let onlyTaskHour = parseInt(newTaskHour.split(":")[0]);
        let onlyTaskMinutes = parseInt(newTaskHour.split(":")[1]);
        if (onlyTaskHour > getHours(new Date())) {
          //console.log("mismo dia horas despues");
          return true;
        } else if (onlyTaskHour === getHours(new Date())) {
          //console.log("mismo dia misma hora");
          if (onlyTaskMinutes > getMinutes(new Date())) {
            //console.log("misma hora mayores minutos");
            return true;
          } else if (onlyTaskMinutes === getMinutes(new Date())) {
            //console.log("Los minutos no pueden ser iguales");
            return false;
          } else {
            //console.log("minutos deben ser mayores a los actuales");
            return false;
          }
        } else {
          //console.log("la hora no puede ser menor");
          return false;
        }
      } else {
        //console.log("crear tarea");
        return true;
      }
    } else {
      return false;
    }
  }
};

const form = (formType, project, index) => {
  let body = document.querySelector("body");
  let avoidInteractionBox = document.createElement("div");
  avoidInteractionBox.classList.add("avoidInteractionBox");

  let div = document.createElement("div");
  div.classList.add("new-box");
  switch (formType) {
    case "newProject":
      div.appendChild(formTitle("New Project"));
      div.appendChild(titleField());
      div.appendChild(descriptionField());
      div.appendChild(formButton("Create Project", "newProjectButton"));

      break;
    case "editProject":
      div.appendChild(formTitle("Edit Project"));
      div.appendChild(titleField(project.title));
      div.appendChild(descriptionField(project.description));
      div.appendChild(formButton("Save changes", "editProjectButton"));
      break;
    case "newTask":
      div.appendChild(formTitle("New Task"));
      div.appendChild(titleField());
      div.appendChild(descriptionField());
      div.appendChild(dateField());
      div.appendChild(hourField());
      div.appendChild(priorityField());
      div.appendChild(formButton("Add New Task", "taskButton"));
      break;
    case "editTask":
      div.appendChild(newProjectTitle("Edit Task"));
      break;
    default:
      break;
  }
  div.appendChild(cancelButton());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);

  /*LISTENERS*/
  if (formType === "newProject") {
    document
      .querySelector(".newProjectButton")
      .addEventListener("click", function () {
        let newProjectTitle = document.querySelector("#title").value;
        let newProjectDescription = document.querySelector("#description")
          .value;
        newProjectValidation(newProjectTitle, newProjectDescription);
      });
  }
  if (formType === "editProject") {
    document
      .querySelector(".editProjectButton")
      .addEventListener("click", function () {
        let editProjectTitle = document.querySelector("#title").value;
        let editProjectDescription = document.querySelector("#description")
          .value;
        editProjectValidation(editProjectTitle, editProjectDescription, index);
      });
  }
  if (formType === "newTask") {
    document
      .querySelector(".taskButton")
      .addEventListener("click", function () {
        let newTaskTitle = document.querySelector("#title").value;
        let newTaskDescription = document.querySelector("#description").value;
        let newTaskDate = document.querySelector("#date").value;
        let newTaskHour = document.querySelector("#time").value;
        let newTaskPriority = document.querySelector("#priority").value;
        if (
          newTaskValidation(
            newTaskTitle,
            newTaskDescription,
            newTaskDate,
            newTaskHour,
            newTaskPriority
          )
        ) {
          addNewTask(
            newTaskTitle,
            newTaskDescription,
            newTaskDate,
            newTaskHour,
            newTaskPriority,
            index
          );
          projectDetail(project, index);
        }
      });
  }
};

const renderProjects = () => {
  document.querySelector("#projectsList").innerHTML = "";
  getLocalstorage().forEach((project, index) => {
    const item = document.createElement("li");
    const title = document.createElement("h2");
    title.innerText = project.title;
    item.appendChild(title);
    const projectOptions = document.createElement("div");

    const spanEdit = document.createElement("span");
    spanEdit.setAttribute("id", "spanEdit");
    const editProject = document.createElement("li");
    editProject.classList.add("fas", "fa-edit");
    editProject.setAttribute("id", "editProject");
    spanEdit.appendChild(editProject);
    projectOptions.appendChild(spanEdit);

    const spanRemove = document.createElement("span");
    spanRemove.setAttribute("id", "spanRemove");
    const removeProject = document.createElement("li");
    removeProject.classList.add("fas", "fa-trash-alt");
    removeProject.setAttribute("id", "removeProject");
    spanRemove.appendChild(removeProject);
    projectOptions.appendChild(spanRemove);

    projectOptions.innerHTML += "<br><br>";
    const line = document.createElement("hr");
    line.setAttribute("id", "line");
    projectOptions.appendChild(line);
    item.appendChild(projectOptions);
    document.querySelector("#projectsList").appendChild(item);
    /*LISTENERS FOR EACH PROJECT*/
    title.addEventListener("click", function detail() {
      projectDetail(project, index);
    });
    projectOptions.children[0].addEventListener("click", function () {
      form("editProject", project, index);
    });
    projectOptions.children[1].addEventListener("click", function () {
      item.parentNode.removeChild(item);
      projects.current.splice(index, 1);
      saveLocalstorage(projects.current);
    });
  });
};

const home = () => {
  /* ASIDE */
  let aside = document.createElement("aside");
  let title = document.createElement("h2");
  title.innerText = "Projects";
  let img = document.createElement("img");
  img.setAttribute("src", "../src/images/add.svg");
  img.setAttribute("alt", "add-icon");
  img.setAttribute("id", "add-icon");
  title.appendChild(img);
  let ul = document.createElement("ul");
  ul.setAttribute("id", "projectsList");
  aside.appendChild(title);
  aside.appendChild(ul);
  document.querySelector(".content").appendChild(aside);

  /* SECTION */
  let section = document.createElement("section");
  let title2 = document.createElement("h2");
  title2.innerText = "TO-DO LIST";
  section.appendChild(title2);
  document.querySelector(".content").appendChild(section);

  /*LISTENERS*/
  document.querySelector("#add-icon").addEventListener("click", () => {
    form("newProject");
  });
};

const setDefault = () => {
  if (getLocalstorage()) {
    getLocalstorage().forEach((el) => {
      projects.current.push(el);
    });
  } else {
    const newProject = project("Default", "Al Projects");
    projects.current.push(newProject);
  }

  localStorage.setItem("myProjects", JSON.stringify(projects.current));
  home();
  renderProjects();
};
document.addEventListener("DOMContentLoaded", setDefault());
