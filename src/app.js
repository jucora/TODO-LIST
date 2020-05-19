import "./css/style.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { getHours, getMinutes } from "date-fns";

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
  h1.innerText = `Project Name: ${project.title}`;
  projectDetail.appendChild(h1);
  const p = document.createElement("p");
  p.innerText = `${project.description}`;
  projectDetail.appendChild(p);
  const newTaskButton = document.createElement("button");
  newTaskButton.classList.add("newTaskButton");
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
    taskListItem.setAttribute("id", "taskListItem");
    const taskTitle = document.createElement("h2");
    taskTitle.setAttribute("id", "taskTitle");
    taskTitle.innerText = `${task.taskTitle}`;
    const taskDescription = document.createElement("p");
    taskDescription.innerText = `Description: ${task.taskDescription}`;
    const taskDate = document.createElement("p");
    taskDate.innerText = `Date: ${task.taskDate}`;
    const taskHour = document.createElement("p");
    taskHour.innerText = `Hour: ${task.taskHour}`;
    const taskPriority = document.createElement("p");
    taskPriority.innerText = `Priority: ${task.taskPriority}`;
    taskListItem.appendChild(taskTitle);
    taskListItem.appendChild(taskDescription);
    taskListItem.appendChild(taskDate);
    taskListItem.appendChild(taskHour);
    taskListItem.appendChild(taskPriority);

    const editTaskContainer = document.createElement("span");
    const editTask = document.createElement("li");
    editTask.setAttribute("id", "editTask");
    editTask.classList.add("fas", "fa-edit");
    editTaskContainer.appendChild(editTask);
    taskListItem.appendChild(editTaskContainer);
    const removeTaskContainer = document.createElement("span");
    const removeTask = document.createElement("li");
    removeTask.setAttribute("id", "removeTask");
    removeTask.classList.add("fas", "fa-trash-alt");
    removeTaskContainer.appendChild(removeTask);
    taskListItem.appendChild(removeTaskContainer);
    taskList.appendChild(taskListItem);

    /*TASK LISTENERS*/
    taskListItem.children[5].addEventListener("click", () => {
      form("editTask", project, index, task, taskIndex);
    });
    taskListItem.children[6].addEventListener("click", () => {
      taskListItem.parentNode.removeChild(taskListItem);
      projects.current[index].tasks.splice(taskIndex, 1);

      saveLocalstorage(projects.current);
    });
  });
  taskBoard.appendChild(taskList);
  section.appendChild(taskBoard);

  /*newTaskButton Listener*/
  newTaskButton.addEventListener("click", function () {
    form("newTask", project, index);
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

const showTaskPriority = (taskPriority, opt1, opt2, opt3) => {
  if (taskPriority) {
    console.log(taskPriority);
    switch (taskPriority) {
      case "Low":
        opt1.setAttribute("selected", true);
        break;
      case "Normal":
        opt2.setAttribute("selected", true);
        break;
      case "Hight":
        opt3.setAttribute("selected", true);
        break;
      default:
        break;
    }
  }
};

const priorityField = (taskPriority) => {
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
  showTaskPriority(taskPriority, opt1, opt2, opt3);
  div6.appendChild(select);
  return div6;
};

const hourField = (taskHour) => {
  const div5 = document.createElement("div");
  div5.classList.add("textbox");
  const i = document.createElement("i");
  i.classList.add("far", "fa-clock");
  div5.appendChild(i);
  const input = document.createElement("input");
  input.setAttribute("type", "time");
  if (taskHour) {
    input.setAttribute("value", taskHour);
  }
  input.setAttribute("id", "time");
  div5.appendChild(input);
  return div5;
};

const dateField = (taskDate) => {
  const div4 = document.createElement("div");
  div4.classList.add("textbox");
  const i = document.createElement("i");
  i.classList.add("fas", "fa-calendar-week");
  div4.appendChild(i);
  const input = document.createElement("input");
  input.setAttribute("type", "date");
  if (taskDate) {
    input.setAttribute("value", taskDate);
  }
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

const taskValidation = (
  taskTitle,
  taskDescription,
  taskDate,
  taskHour,
  taskPriority
) => {
  if (taskTitle && taskDescription && taskDate && taskHour && taskPriority) {
    let today = new Date();
    let selectedDay = new Date(taskDate.replace(/-/g, "/"));
    console.log(today, selectedDay, selectedDay.getDate() >= today.getDate());
    if (selectedDay.getDate() >= today.getDate()) {
      if (selectedDay.getDate() === today.getDate()) {
        console.log("same day");
        let onlyTaskHour = parseInt(taskHour.split(":")[0]);
        let onlyTaskMinutes = parseInt(taskHour.split(":")[1]);
        if (onlyTaskHour > getHours(new Date())) {
          console.log("mismo dia horas despues");
          return true;
        } else if (onlyTaskHour === getHours(new Date())) {
          console.log("mismo dia misma hora");
          if (onlyTaskMinutes > getMinutes(new Date())) {
            console.log("misma hora mayores minutos");
            return true;
          } else if (onlyTaskMinutes === getMinutes(new Date())) {
            console.log("Los minutos no pueden ser iguales");
            return false;
          } else {
            console.log("minutos deben ser mayores a los actuales");
            return false;
          }
        } else {
          console.log("la hora no puede ser menor");
          return false;
        }
      } else {
        console.log("crear tarea");
        return true;
      }
    } else {
      return false;
    }
  }
};

const editTask = (
  editTaskTitle,
  editTaskDescription,
  editTaskDate,
  editTaskHour,
  editTaskPriority,
  index,
  taskIndex
) => {
  projects.current[index].tasks[taskIndex] = {
    taskTitle: editTaskTitle,
    taskDescription: editTaskDescription,
    taskDate: editTaskDate,
    taskHour: editTaskHour,
    taskPriority: editTaskPriority,
  };
  saveLocalstorage(projects.current);
};

const form = (formType, project, index, task, taskIndex) => {
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
      div.appendChild(formTitle("Edit Task"));
      console.log("task title", task.taskTitle);
      div.appendChild(titleField(task.taskTitle));
      div.appendChild(descriptionField(task.taskDescription));
      div.appendChild(dateField(task.taskDate));
      div.appendChild(hourField(task.taskHour));
      div.appendChild(priorityField(task.taskPriority));
      div.appendChild(formButton("Save changes", "editTaskButton"));
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
          taskValidation(
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
          console.log(project);
          projectDetail(project, index);
        }
      });
  }
  if (formType === "editTask") {
    document
      .querySelector(".editTaskButton")
      .addEventListener("click", function () {
        let editTaskTitle = document.querySelector("#title").value;
        let editTaskDescription = document.querySelector("#description").value;
        let editTaskDate = document.querySelector("#date").value;
        let editTaskHour = document.querySelector("#time").value;
        let editTaskPriority = document.querySelector("#priority").value;
        if (
          taskValidation(
            editTaskTitle,
            editTaskDescription,
            editTaskDate,
            editTaskHour,
            editTaskPriority
          )
        ) {
          editTask(
            editTaskTitle,
            editTaskDescription,
            editTaskDate,
            editTaskHour,
            editTaskPriority,
            index,
            taskIndex
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
    title.setAttribute("id", "projectTitle");
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
  const sideTitleIcon = document.createElement("div");
  sideTitleIcon.setAttribute("id", "side-title-icon");
  let title = document.createElement("h2");
  title.setAttribute("id", "aside-main-title");
  title.innerText = "Projects";
  sideTitleIcon.appendChild(title);
  let addIconContainer = document.createElement("span");
  addIconContainer.setAttribute("id", "add-icon-container");
  let li = document.createElement("li");
  li.setAttribute("id", "add-icon");
  li.classList.add("fas", "fa-plus-circle");
  addIconContainer.appendChild(li);
  sideTitleIcon.appendChild(addIconContainer);
  aside.appendChild(sideTitleIcon);
  let ul = document.createElement("ul");
  ul.setAttribute("id", "projectsList");
  aside.appendChild(ul);
  document.querySelector(".content").appendChild(aside);

  /* SECTION */
  let section = document.createElement("section");
  let title2 = document.createElement("h2");
  title2.innerText = "TO-DO LIST";
  section.appendChild(title2);
  document.querySelector(".content").appendChild(section);

  /*LISTENERS*/
  document
    .querySelector("#add-icon-container")
    .addEventListener("click", () => {
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
