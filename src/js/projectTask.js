import { getHours, getMinutes } from "date-fns";
import storage from "./storage";
import remove from "./closeRemove";
import form from "./form";

const projects = (() => {
  const current = [];
  return { current };
})();

/* Method to create a task item to be added to the list(li tag) */

const createTaskitem = (
  editTaskTitle,
  editTaskDescription,
  editTaskDate,
  editTaskHour,
  editTaskPriority
) => {
  const taskListItem = document.createElement("li");
  taskListItem.setAttribute("id", "taskListItem");
  const taskTitle = document.createElement("h2");
  taskTitle.setAttribute("id", "taskTitle");
  taskTitle.innerText = `${editTaskTitle}`;
  const taskDescription = document.createElement("p");
  taskDescription.setAttribute("id", "taskDescription");
  taskDescription.innerText = `Description: ${editTaskDescription}`;
  const taskDate = document.createElement("p");
  taskDate.setAttribute("id", "taskDate");
  taskDate.innerText = `Date: ${editTaskDate}`;
  const taskHour = document.createElement("p");
  taskHour.setAttribute("id", "taskHour");
  taskHour.innerText = `Hour: ${editTaskHour}`;
  const taskPriority = document.createElement("p");
  taskPriority.setAttribute("id", "taskPriority");
  taskPriority.innerText = `Priority: ${editTaskPriority}`;
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
  return taskListItem;
};

/* Method to update the task displayed in the taskList 
once a task has been created or edited  */

const updateProjectsDetail = (taskListItem, taskIndex) => {
  const taskList = document.querySelector("#taskList");
  if (taskIndex !== undefined) {
    const actualTask = taskList.children[taskIndex];

    actualTask.querySelector(
      "#taskTitle"
    ).innerText = `${taskListItem.children[0].textContent}`;
    actualTask.querySelector(
      "#taskDescription"
    ).innerText = `${taskListItem.children[1].textContent}`;
    actualTask.querySelector(
      "#taskDate"
    ).innerText = `${taskListItem.children[2].textContent}`;
    actualTask.querySelector(
      "#taskHour"
    ).innerText = `${taskListItem.children[3].textContent}`;
    actualTask.querySelector(
      "#taskPriority"
    ).innerText = `${taskListItem.children[4].textContent}`;
  } else {
    taskList.appendChild(taskListItem);
  }
};

// Method add the edited task to the local storage

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
  storage.save(projects.current);
};

/* Method to validates task int the process for create and edit task */

const taskValidation = (
  taskTitle,
  taskDescription,
  taskDate,
  taskHour,
  taskPriority
) => {
  if (taskTitle && taskDescription && taskDate && taskHour && taskPriority) {
    const today = new Date();
    const selectedDay = new Date(taskDate.replace(/-/g, "/"));
    if (selectedDay.getDate() >= today.getDate()) {
      if (selectedDay.getDate() === today.getDate()) {
        const onlyTaskHour = parseInt(taskHour.split(":")[0], 10);
        const onlyTaskMinutes = parseInt(taskHour.split(":")[1], 10);
        if (onlyTaskHour > getHours(new Date())) {
          return true;
        }
        if (onlyTaskHour === getHours(new Date())) {
          if (onlyTaskMinutes > getMinutes(new Date())) {
            return true;
          }
          if (onlyTaskMinutes === getMinutes(new Date())) {
            form.errorMessage("The task can't be in the current time!");
            return false;
          }
        }
      }
      return true;
    }
    form.errorMessage("You cannot select past dates!");
    return false;
  }
  form.errorMessage("All fields are required!");
  return false;
};

/* This method controls all the process to edit a task. first check the task validation
once the validation is correct, it calls the method to edit a task to the local storage,
then it calls the method to create a new task item for the list to be added to the taskList,
then it calls the method to update the project detail view to display the edited task. */

const editTaskController = (
  editTaskTitle,
  editTaskDescription,
  editTaskDate,
  editTaskHour,
  editTaskPriority,
  index,
  taskIndex
) => {
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
    const taskListItem = createTaskitem(
      editTaskTitle,
      editTaskDescription,
      editTaskDate,
      editTaskHour,
      editTaskPriority
    );
    updateProjectsDetail(taskListItem, taskIndex);
    remove.window();
  }
};

/* Method to add listener to the edit task option, this listener calls the 
editTaskControllerin irder to start all edition process for a task */

const editTaskFormListeners = (index, taskIndex) => {
  document.querySelector(".editTaskButton").addEventListener("click", () => {
    const editTaskTitle = document.querySelector("#title").value;
    const editTaskDescription = document.querySelector("#description").value;
    const editTaskDate = document.querySelector("#date").value;
    const editTaskHour = document.querySelector("#time").value;
    const editTaskPriority = document.querySelector("#priority").value;
    editTaskController(
      editTaskTitle,
      editTaskDescription,
      editTaskDate,
      editTaskHour,
      editTaskPriority,
      index,
      taskIndex
    );
  });
};

/* Method to create an invisible window, this window avoid user to interact with 
  the application when a form is being displayed, if the user closes the form or 
  submit info through the form, this window is removed */

const avoidInteractionBox = () => {
  const body = document.querySelector("body");
  const avoidInteractionBox = document.createElement("div");
  avoidInteractionBox.classList.add("avoidInteractionBox");
  body.appendChild(avoidInteractionBox);
};

/* Method to place the form in the html body tag, once the form is created
  and ready to be used */

const placeForm = (div) => {
  const body = document.querySelector("body");
  body.appendChild(div);
};

/* Method to create the task form structure, the methods newTaskForm and editTaskForm 
 call this method, if there is a task provided means that the call is from editTaskForm method 
 and that a task already exists so the form will be for edition, if the task is not provided
 means that the call is from newTaskForm method, and the form will be to create a new task. 
 This method is multi task: for create and edit task forms */

const taskFormStructure = (
  title,
  buttonText,
  buttonClass,
  taskTitle,
  taskDescription,
  taskDate,
  taskHour,
  taskPriority,
  currentTask
) => {
  const div = form.formBox();
  avoidInteractionBox();
  div.appendChild(form.title(title));
  if (currentTask) {
    div.appendChild(form.titleField(taskTitle));
    div.appendChild(form.descriptionField(taskDescription));
    div.appendChild(form.dateField(taskDate));
    div.appendChild(form.hourField(taskHour));
    div.appendChild(form.priorityField(taskPriority));
  } else {
    div.appendChild(form.titleField());
    div.appendChild(form.descriptionField());
    div.appendChild(form.dateField());
    div.appendChild(form.hourField());
    div.appendChild(form.priorityField());
  }
  div.appendChild(form.button(buttonText, buttonClass));
  div.appendChild(form.cancel());
  placeForm(div);
};

// Method to set previous values before create the edit task form

const editTaskForm = (index, taskIndex) => {
  const title = "Edit Task";
  const currentTask = projects.current[index].tasks[taskIndex];
  const taskTitle = currentTask.taskTitle;
  const taskDescription = currentTask.taskDescription;
  const taskDate = currentTask.taskDate;
  const taskHour = currentTask.taskHour;
  const taskPriority = currentTask.taskPriority;
  const buttonText = "Save changes";
  const buttonClass = "editTaskButton";
  taskFormStructure(
    title,
    buttonText,
    buttonClass,
    taskTitle,
    taskDescription,
    taskDate,
    taskHour,
    taskPriority,
    currentTask
  );
};

// Method to add a listener to call an edition form to be able to edit a task

const editTaskListener = (taskListItem, index, taskIndex) => {
  taskListItem.children[5].addEventListener("click", () => {
    editTaskForm(index, taskIndex);
    editTaskFormListeners(index, taskIndex);
  });
};

// Method to add a listener to delete a task form local storage

const removeTaskListener = (taskListItem, index, taskIndex) => {
  taskListItem.children[6].addEventListener("click", () => {
    taskListItem.parentNode.removeChild(taskListItem);
    projects.current[index].tasks.splice(taskIndex, 1);
    storage.save(projects.current);
  });
};

// Method to add a new task to the local storage

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
  storage.save(projects.current);
};

/* This method controls all the process of creating a new task. first check the task validation
once the validation is correct, it calls the method to add a new task to the local storage,
then it calls the method to create a new task item for the list to be added to the taskList,
then it calls the method to update the project detail view to display the new task, then,
it calls the method to add listeners (edit and remove) to the new task added and finally it 
removes the form window
*/

const newTaskController = (
  newTaskTitle,
  newTaskDescription,
  newTaskDate,
  newTaskHour,
  newTaskPriority,
  index
) => {
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
    const taskListItem = createTaskitem(
      newTaskTitle,
      newTaskDescription,
      newTaskDate,
      newTaskHour,
      newTaskPriority
    );
    updateProjectsDetail(taskListItem);

    const taskIndex = Array.from(taskListItem.parentNode.children).indexOf(
      taskListItem
    );
    editTaskListener(taskListItem, index, taskIndex);
    removeTaskListener(taskListItem, index, taskIndex);
    remove.window();
  }
};

/* Method to add a listener to the new task form. These listener will send the values
 of the inputs to the newTaskController */

const newTaskFormListeners = (index) => {
  document.querySelector(".addTaskButton").addEventListener("click", () => {
    const newTaskTitle = document.querySelector("#title").value;
    const newTaskDescription = document.querySelector("#description").value;
    const newTaskDate = document.querySelector("#date").value;
    const newTaskHour = document.querySelector("#time").value;
    const newTaskPriority = document.querySelector("#priority").value;
    newTaskController(
      newTaskTitle,
      newTaskDescription,
      newTaskDate,
      newTaskHour,
      newTaskPriority,
      index
    );
  });
};

// Method to set previous values before create the new task form

const newTaskForm = (index) => {
  const title = "New Task";
  const buttonText = "Add new task";
  const buttonClass = "addTaskButton";
  taskFormStructure(title, buttonText, buttonClass);
  newTaskFormListeners(index);
};

// Method to add listener to the new task button

const newTaskButtonListener = (newTaskButton, index) => {
  newTaskButton.addEventListener("click", () => {
    newTaskForm(index);
  });
};

// Method to display details about each project

const projectDetail = (project, index) => {
  remove.boards();
  const section = document.querySelector("section");
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

  /* Task Board */
  const taskBoard = document.createElement("div");
  taskBoard.classList.add("taskBoard");
  const taskBoardTitle = document.createElement("h2");
  taskBoardTitle.innerText = "Tasks";
  taskBoard.appendChild(taskBoardTitle);
  const taskList = document.createElement("ul");
  taskList.setAttribute("id", "taskList");

  projects.current[index].tasks.forEach((task, taskIndex) => {
    const taskListItem = createTaskitem(
      task.taskTitle,
      task.taskDescription,
      task.taskDate,
      task.taskHour,
      task.taskPriority
    );
    taskList.appendChild(taskListItem);
    editTaskListener(taskListItem, index, taskIndex);
    removeTaskListener(taskListItem, index, taskIndex);
  });
  taskBoard.appendChild(taskList);
  section.appendChild(taskBoard);
  newTaskButtonListener(newTaskButton, index);
};

// Method to create the remove icon to allow user delete a project

const removeProjectOption = () => {
  const spanRemove = document.createElement("span");
  spanRemove.setAttribute("id", "spanRemove");
  const removeProject = document.createElement("li");
  removeProject.classList.add("fas", "fa-trash-alt");
  removeProject.setAttribute("id", "removeProject");
  spanRemove.appendChild(removeProject);
  return spanRemove;
};

// Method to create the edit icon to allow user edit a project

const editProjectOption = () => {
  const spanEdit = document.createElement("span");
  spanEdit.setAttribute("id", "spanEdit");
  const editProject = document.createElement("li");
  editProject.classList.add("fas", "fa-edit");
  editProject.setAttribute("id", "editProject");
  spanEdit.appendChild(editProject);
  return spanEdit;
};

/* Method called by renderProjects and renderNewProject methods, 
it creates the div tag which will contain the project options 
EDIT and REMOVE */

const createProjectItemOptions = () => {
  const projectOptions = document.createElement("div");
  projectOptions.appendChild(editProjectOption());
  projectOptions.appendChild(removeProjectOption());
  projectOptions.innerHTML += "<br><br>";
  const line = document.createElement("hr");
  line.setAttribute("id", "line");
  projectOptions.appendChild(line);
  return projectOptions;
};

/* Method called by renderProjects and renderNewProject methods, 
it creates the tag which will contain the project title */

const createProjectItemTitle = (project) => {
  const title = document.createElement("h2");
  title.setAttribute("id", "projectTitle");
  title.innerText = `${project.title}`;
  return title;
};

// This method update the title displayed in projectsList (ul tag), once the project is edited

const updateListItemTitle = (index, title) => {
  const projectToEdit = document.querySelector("#projectsList").children[index];
  projectToEdit.querySelector("#projectTitle").innerText = `${title}`;
};

/* Method to control the project edition process once the validation is approved */

const editProject = (title, description, index) => {
  projects.current[index].title = title;
  projects.current[index].description = description;
  storage.save(projects.current);
  remove.window();
  projectDetail(projects.current[index], index);
  updateListItemTitle(index, title);
};

/* Method to validate data before approve a project edition, 
title and description must be provided in order to set an edition as valid */

const editProjectValidation = (title, description, index) => {
  if (title && description) {
    editProject(title, description, index);
  } else {
    form.errorMessage("All fields are required!");
  }
};

/* Method to add listeners when user press SAVE CHANGES button, it will call 
a validation method before setting the new values into the project */

const editProjectFormListener = (index) => {
  document.querySelector(".editProjectButton").addEventListener("click", () => {
    const editProjectTitle = document.querySelector("#title").value;
    const editProjectDescription = document.querySelector("#description").value;
    editProjectValidation(editProjectTitle, editProjectDescription, index);
  });
};

/* Method to create the project form structure, the methods newProjectForm and editProjectForm 
 call this method, if there is a project provided means that the call is from editFormProject method 
 and that a project already exists so the form will be for edition, if the project is not provided
 means that the call is from newProjectForm method, and the form will be to create a new project. 
 This method is multi task: for create and edit project forms */

const projectFormStructure = (title, buttonText, buttonClass, project) => {
  const div = form.formBox();
  avoidInteractionBox();
  div.appendChild(form.title(title));
  if (project) {
    div.appendChild(form.titleField(project.title));
    div.appendChild(form.descriptionField(project.description));
  } else {
    div.appendChild(form.titleField());
    div.appendChild(form.descriptionField());
  }
  div.appendChild(form.button(buttonText, buttonClass));
  div.appendChild(form.cancel());
  placeForm(div);
};

// Method to set previous values before create the edit project form

const editProjectForm = (project) => {
  const title = "Edit Project";
  const buttonText = "Save Changes";
  const buttonClass = "editProjectButton";
  projectFormStructure(title, buttonText, buttonClass, project);
};

// Method to remove a project from local storage

const removeProjectFromStorage = (index) => {
  if (index) {
    projects.current.splice(index, 1);
    storage.save(projects.current);
  }
};

// Method to remove a project item from the projectsList (ul tag)

const removeListItem = (item) => {
  if (item) {
    item.parentNode.removeChild(item);
  }
};

// Method to control the remove project process

const removeProjectListener = (index, projectOptions, item) => {
  projectOptions.children[1].addEventListener("click", () => {
    removeListItem(item);
    removeProjectFromStorage(index);
    renderProjects();
    remove.boards();
  });
};

/* Method to add listener to the edit icon, in order to be able 
to create an edition form with its listeners */

const editProjectListener = (projectOptions, index) => {
  projectOptions.children[0].addEventListener("click", () => {
    editProjectForm(projects.current[index]);
    editProjectFormListener(index);
  });
};

/* Method to add listener to each project title to call the projectDetail method 
to display details about that project */

const titleProjectListener = (index, title) => {
  title.addEventListener("click", () => {
    projectDetail(projects.current[index], index);
  });
};

/* Method called by renderProjects method below, to assign listeners to the projects, 
the Default project (index 0) will have only the title listener, users can not delete Default project*/

const projectListenerControl = (index, item, title, projectOptions) => {
  if (index !== 0) {
    item.appendChild(projectOptions);
    titleProjectListener(index, title);
    editProjectListener(projectOptions, index);
    removeProjectListener(index, projectOptions, item);
  } else {
    titleProjectListener(index, title);
  }
};

/* Method to render all projects in the projectsList(ul tag). 
This method calls the projectListenerControl method above */

const renderProjects = () => {
  document.querySelector("#projectsList").innerHTML = "";
  storage.get().forEach((project, index) => {
    const title = createProjectItemTitle(project);
    const projectOptions = createProjectItemOptions();
    const item = document.createElement("li");
    item.appendChild(title);
    document.querySelector("#projectsList").appendChild(item);
    projectListenerControl(index, item, title, projectOptions);
  });
};

//Method to render new project in the projectsList (ul tag)

const renderNewProject = () => {
  const index = projects.current.indexOf(
    projects.current[projects.current.length - 1]
  );
  const title = createProjectItemTitle(projects.current[index]);
  const projectOptions = createProjectItemOptions();
  const item = document.createElement("li");
  item.appendChild(title);
  item.appendChild(projectOptions);
  document.querySelector("#projectsList").appendChild(item);
  titleProjectListener(index, title);
  editProjectListener(projectOptions, index);
  removeProjectListener(index, projectOptions, item);
};

// Project factory function

const project = (title, description) => ({ title, description, tasks: [] });

// Method to create a new project in localstorage

const createProject = (title, description) => {
  if (title && description) {
    const newProject = project(title, description);
    projects.current.push(newProject);
    storage.save(projects.current);
  }
};

// Method to validate that title and description fields are not empty

const newProjectValidation = (title, description) => {
  if (title && description) {
    createProject(title, description);
    remove.window();
    renderNewProject();
  } else {
    form.errorMessage("All fields are require!");
  }
};

/* This method is called by newProjectForm method below. 
This method adds listeners to the new project form */

const newProjectFormListeners = () => {
  document.querySelector(".newProjectButton").addEventListener("click", () => {
    const newProjectTitle = document.querySelector("#title").value;
    const newProjectDescription = document.querySelector("#description").value;
    newProjectValidation(newProjectTitle, newProjectDescription);
  });
};

/* Method to set previous values before create the new project form, 
this method is called by addProjectListener method inside app.js */

const newProjectForm = () => {
  const title = "New Project";
  const buttonText = "Create Project";
  const buttonClass = "newProjectButton";
  projectFormStructure(title, buttonText, buttonClass);
  newProjectFormListeners();
};

export { projects, project, newProjectForm, renderProjects };
