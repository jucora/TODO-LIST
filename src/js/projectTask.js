import { getHours, getMinutes } from "date-fns";
import storage from "./storage";
import remove from "./closeRemove";
import form from "./form";

const projects = (() => {
  const current = [];
  return { current };
})();

const formMessage = (messageText) => {
  const message = document.createElement("p");
  message.setAttribute("id", "message");
  const formBox = document.querySelector(".new-box");
  message.innerText = `${messageText}`;
  message.style.display = "block";
  formBox.insertBefore(message, document.querySelector(".taskButton"));
};

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
            formMessage("The task can't be in the current time!");
            return false;
          }
        }
      }
      return true;
    }
    formMessage("You cannot select past dates!");
    return false;
  }
  formMessage("All fields are required!");
  return false;
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
  storage.save(projects.current);
  remove.window();
};

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

const editTaskFormListeners = (index, taskIndex) => {
  document.querySelector(".editTaskButton").addEventListener("click", () => {
    const editTaskTitle = document.querySelector("#title").value;
    const editTaskDescription = document.querySelector("#description").value;
    const editTaskDate = document.querySelector("#date").value;
    const editTaskHour = document.querySelector("#time").value;
    const editTaskPriority = document.querySelector("#priority").value;
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
    }
  });
};

const editTaskForm = (index, taskIndex) => {
  const body = document.querySelector("body");
  const avoidInteractionBox = document.createElement("div");
  avoidInteractionBox.classList.add("avoidInteractionBox");
  const div = document.createElement("div");
  div.classList.add("new-box");

  div.appendChild(form.title("Edit Task"));
  div.appendChild(
    form.titleField(projects.current[index].tasks[taskIndex].taskTitle)
  );
  div.appendChild(
    form.descriptionField(
      projects.current[index].tasks[taskIndex].taskDescription
    )
  );
  div.appendChild(
    form.dateField(projects.current[index].tasks[taskIndex].taskDate)
  );
  div.appendChild(
    form.hourField(projects.current[index].tasks[taskIndex].taskHour)
  );
  div.appendChild(
    form.priorityField(projects.current[index].tasks[taskIndex].taskPriority)
  );
  div.appendChild(form.button("Save changes", "editTaskButton"));

  div.appendChild(remove.cancel());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);
};

const editRemoveTaskListeners = (taskListItem, index, task, taskIndex) => {
  /* TASK LISTENERS */
  taskListItem.children[5].addEventListener("click", () => {
    editTaskForm(index, taskIndex);
    editTaskFormListeners(index, taskIndex);
  });
  taskListItem.children[6].addEventListener("click", () => {
    taskListItem.parentNode.removeChild(taskListItem);
    projects.current[index].tasks.splice(taskIndex, 1);
    storage.save(projects.current);
  });
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
  storage.save(projects.current);
  remove.window();
};

const newTaskFormListeners = (index) => {
  document.querySelector(".taskButton").addEventListener("click", () => {
    const newTaskTitle = document.querySelector("#title").value;
    const newTaskDescription = document.querySelector("#description").value;
    const newTaskDate = document.querySelector("#date").value;
    const newTaskHour = document.querySelector("#time").value;
    const newTaskPriority = document.querySelector("#priority").value;
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
      const task = {
        taskTitle: newTaskTitle,
        taskDescription: newTaskDescription,
        taskDate: newTaskDate,
        taskHour: newTaskHour,
        taskPriority: newTaskPriority,
      };
      const taskIndex = Array.from(taskListItem.parentNode.children).indexOf(
        taskListItem
      );
      editRemoveTaskListeners(taskListItem, index, task, taskIndex);
    }
  });
};

const newTaskForm = (index) => {
  const body = document.querySelector("body");
  const avoidInteractionBox = document.createElement("div");
  avoidInteractionBox.classList.add("avoidInteractionBox");

  const div = document.createElement("div");
  div.classList.add("new-box");
  div.appendChild(form.title("New Task"));
  div.appendChild(form.titleField());
  div.appendChild(form.descriptionField());
  div.appendChild(form.dateField());
  div.appendChild(form.hourField());
  div.appendChild(form.priorityField());
  div.appendChild(form.button("Add New Task", "taskButton"));

  div.appendChild(remove.cancel());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);

  newTaskFormListeners(index);
};

const newTaskButtonListener = (newTaskButton, index) => {
  newTaskButton.addEventListener("click", () => {
    newTaskForm(index);
  });
};

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

    editRemoveTaskListeners(taskListItem, index, task, taskIndex);
  });
  taskBoard.appendChild(taskList);
  section.appendChild(taskBoard);
  newTaskButtonListener(newTaskButton, index);
};

const createProjectItemOptions = () => {
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
  return projectOptions;
};

const createProjectItemTitle = (project) => {
  const title = document.createElement("h2");
  title.setAttribute("id", "projectTitle");
  title.innerText = `${project.title}`;
  return title;
};

const updateListItemTitle = (index, title) => {
  const projectToEdit = document.querySelector("#projectsList").children[index];
  projectToEdit.querySelector("#projectTitle").innerText = `${title}`;
};

const project = (title, description) => ({ title, description, tasks: [] });

const editProject = (title, description, index) => {
  projects.current[index].title = title;
  projects.current[index].description = description;
  storage.save(projects.current);
  remove.window();
  projectDetail(projects.current[index], index);
  updateListItemTitle(index, title);
};

const editProjectValidation = (title, description, index) => {
  if (title && description) {
    editProject(title, description, index);
  }
};

const editProjectFormListener = (index) => {
  /* Listeners */
  document.querySelector(".editProjectButton").addEventListener("click", () => {
    const editProjectTitle = document.querySelector("#title").value;
    const editProjectDescription = document.querySelector("#description").value;
    editProjectValidation(editProjectTitle, editProjectDescription, index);
  });
};

const editProjectForm = (project) => {
  const body = document.querySelector("body");
  const avoidInteractionBox = document.createElement("div");
  avoidInteractionBox.classList.add("avoidInteractionBox");

  const div = document.createElement("div");
  div.classList.add("new-box");
  div.appendChild(form.title("Edit Project"));
  div.appendChild(form.titleField(project.title));
  div.appendChild(form.descriptionField(project.description));
  div.appendChild(form.button("Save changes", "editProjectButton"));

  div.appendChild(remove.cancel());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);
};

const removeProjectFromStorage = (index) => {
  if (index) {
    projects.current.splice(index, 1);
    storage.save(projects.current);
  }
};

const removeListItem = (item) => {
  if (item) {
    item.parentNode.removeChild(item);
  }
};

const editRemoveProjectListeners = (index, projectOptions, item) => {
  /* LISTENERS FOR EACH PROJECT */

  projectOptions.children[0].addEventListener("click", () => {
    editProjectForm(projects.current[index]);
    editProjectFormListener(index);
  });
  projectOptions.children[1].addEventListener("click", () => {
    removeListItem(item);
    removeProjectFromStorage(index);
    remove.boards();
  });
};

const titleProjectListener = (index, title) => {
  title.addEventListener("click", () => {
    projectDetail(projects.current[index], index);
  });
};

const renderProjects = () => {
  document.querySelector("#projectsList").innerHTML = "";
  storage.get().forEach((project, index) => {
    const title = createProjectItemTitle(project);
    const projectOptions = createProjectItemOptions();
    const item = document.createElement("li");
    item.appendChild(title);
    document.querySelector("#projectsList").appendChild(item);
    if (index !== 0) {
      item.appendChild(projectOptions);
      titleProjectListener(index, title);
      editRemoveProjectListeners(index, projectOptions, item);
    } else {
      titleProjectListener(index, title);
    }
  });
};
//AQUI VAMOS EN LA REVISION
const renderNewProject = (title, description) => {
  const index = projects.current[projects.current.length - 1];
  if (title && description) {
    const title = createProjectItemTitle(projects.current[index]);
    const projectOptions = createProjectItemOptions();
    const item = document.createElement("li");
    item.appendChild(title);
    document.querySelector("#projectsList").appendChild(item);
    item.appendChild(projectOptions);
    titleProjectListener(index, title);
    editRemoveProjectListeners(index, projectOptions, item);
  }
};

const createProject = (title, description) => {
  if (title && description) {
    const newProject = project(title, description);
    projects.current.push(newProject);
    storage.save(projects.current);
    remove.window();
    renderNewProject(title, description);
  }
};

const newProjectValidation = (title, description) => {
  if (title && description) {
    createProject(title, description);
  }
};

const newProjectFormListeners = () => {
  document.querySelector(".newProjectButton").addEventListener("click", () => {
    const newProjectTitle = document.querySelector("#title").value;
    const newProjectDescription = document.querySelector("#description").value;
    newProjectValidation(newProjectTitle, newProjectDescription);
  });
};

const newProjectForm = () => {
  const body = document.querySelector("body");
  const avoidInteractionBox = document.createElement("div");
  avoidInteractionBox.classList.add("avoidInteractionBox");

  const div = document.createElement("div");
  div.classList.add("new-box");
  div.appendChild(form.title("New Project"));
  div.appendChild(form.titleField());
  div.appendChild(form.descriptionField());
  div.appendChild(form.button("Create Project", "newProjectButton"));

  div.appendChild(remove.cancel());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);

  newProjectFormListeners();
};

export { projects, project, newProjectForm, renderProjects };