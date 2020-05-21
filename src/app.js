import './css/style.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { getHours, getMinutes } from 'date-fns';

const getLocalstorage = () => {
  const currentProjects = JSON.parse(localStorage.getItem('myProjects'));
  return currentProjects;
};

const removeAvoidInteractionBox = () => {
  const avoidInteractionBox = document.querySelector('.avoidInteractionBox');
  if (avoidInteractionBox) {
    avoidInteractionBox.remove();
  }
};

const removeWindow = () => {
  if (document.querySelector('.new-box')) {
    const projectWindow = document.querySelector('.new-box');
    projectWindow.parentNode.removeChild(projectWindow);
  }
  removeAvoidInteractionBox();
};

const saveLocalstorage = (currentProjects) => {
  localStorage.setItem('myProjects', JSON.stringify(currentProjects));
  removeWindow();
};

const removeBoards = () => {
  const projectDetail = document.querySelector('.projectDetail');
  const taskBoard = document.querySelector('.taskBoard');
  if (projectDetail) {
    projectDetail.remove();
  }
  if (taskBoard) {
    taskBoard.remove();
  }
};

const projects = (() => {
  const current = [];
  return { current };
})();

const formButton = (buttonText, buttonClass) => {
  const button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.classList.add(`${buttonClass}`);
  button.setAttribute('value', `${buttonText}`);
  return button;
};

const showTaskPriority = (taskPriority, opt1, opt2, opt3) => {
  if (taskPriority) {
    switch (taskPriority) {
      case 'Low':
        opt1.setAttribute('selected', true);
        break;
      case 'Normal':
        opt2.setAttribute('selected', true);
        break;
      case 'Hight':
        opt3.setAttribute('selected', true);
        break;
      default:
        break;
    }
  }
};

const priorityField = (taskPriority) => {
  const div6 = document.createElement('div');
  div6.classList.add('textbox');
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-calendar-week');
  div6.appendChild(i);
  const select = document.createElement('select');
  select.setAttribute('id', 'priority');
  const opt1 = document.createElement('option');
  opt1.innerText = 'Low';
  select.appendChild(opt1);
  const opt2 = document.createElement('option');
  opt2.innerText = 'Normal';
  select.appendChild(opt2);
  const opt3 = document.createElement('option');
  opt3.innerText = 'Hight';
  select.appendChild(opt3);
  showTaskPriority(taskPriority, opt1, opt2, opt3);
  div6.appendChild(select);
  return div6;
};

const hourField = (taskHour) => {
  const div5 = document.createElement('div');
  div5.classList.add('textbox');
  const i = document.createElement('i');
  i.classList.add('far', 'fa-clock');
  div5.appendChild(i);
  const input = document.createElement('input');
  input.setAttribute('type', 'time');
  if (taskHour) {
    input.setAttribute('value', taskHour);
  }
  input.setAttribute('id', 'time');
  div5.appendChild(input);
  return div5;
};

const dateField = (taskDate) => {
  const div4 = document.createElement('div');
  div4.classList.add('textbox');
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-calendar-week');
  div4.appendChild(i);
  const input = document.createElement('input');
  input.setAttribute('type', 'date');
  if (taskDate) {
    input.setAttribute('value', taskDate);
  }
  input.setAttribute('id', 'date');
  div4.appendChild(input);
  return div4;
};

const descriptionField = (inputValue = '') => {
  const div3 = document.createElement('div');
  div3.classList.add('textbox');
  const i2 = document.createElement('i');
  i2.classList.add('fas', 'fa-edit');
  const textarea = document.createElement('textarea');
  textarea.setAttribute('placeholder', 'Description');
  textarea.setAttribute('id', 'description');
  textarea.innerText = inputValue;
  div3.appendChild(textarea);
  return div3;
};

const titleField = (inputValue = '') => {
  const div2 = document.createElement('div');
  div2.classList.add('textbox');
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-tag');
  div2.appendChild(i);
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Title');
  input.setAttribute('id', 'title');
  input.setAttribute('value', inputValue);
  div2.appendChild(input);
  return div2;
};

const formTitle = (title) => {
  const h1 = document.createElement('h1');
  h1.innerText = `${title}`;
  return h1;
};

const cancelButton = () => {
  const cancelButton = document.createElement('input');
  cancelButton.setAttribute('type', 'button');
  cancelButton.classList.add('cancelButton');
  cancelButton.setAttribute('value', 'Cancel');

  /* CANCEL BUTTON LISTENER */
  cancelButton.addEventListener('click', () => {
    removeWindow();
  });
  return cancelButton;
};

const taskValidation = (
  taskTitle,
  taskDescription,
  taskDate,
  taskHour,
  taskPriority,
) => {
  if (taskTitle && taskDescription && taskDate && taskHour && taskPriority) {
    const today = new Date();
    const selectedDay = new Date(taskDate.replace(/-/g, '/'));
    if (selectedDay.getDate() >= today.getDate()) {
      if (selectedDay.getDate() === today.getDate()) {
        const onlyTaskHour = parseInt(taskHour.split(':')[0], 10);
        const onlyTaskMinutes = parseInt(taskHour.split(':')[1], 10);
        if (onlyTaskHour > getHours(new Date())) {
          return true;
        }
        if (onlyTaskHour === getHours(new Date())) {
          if (onlyTaskMinutes > getMinutes(new Date())) {
            return true;
          }
          if (onlyTaskMinutes === getMinutes(new Date())) {
            return false;
          }

          return false;
        }

        return false;
      }

      return true;
    }
    return false;
  }
  return false;
};
const editTask = (
  editTaskTitle,
  editTaskDescription,
  editTaskDate,
  editTaskHour,
  editTaskPriority,
  index,
  taskIndex,
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

const createTaskitem = (
  editTaskTitle,
  editTaskDescription,
  editTaskDate,
  editTaskHour,
  editTaskPriority,
) => {
  const taskListItem = document.createElement('li');
  taskListItem.setAttribute('id', 'taskListItem');
  const taskTitle = document.createElement('h2');
  taskTitle.setAttribute('id', 'taskTitle');
  taskTitle.innerText = `${editTaskTitle}`;
  const taskDescription = document.createElement('p');
  taskDescription.setAttribute('id', 'taskDescription');
  taskDescription.innerText = `Description: ${editTaskDescription}`;
  const taskDate = document.createElement('p');
  taskDate.setAttribute('id', 'taskDate');
  taskDate.innerText = `Date: ${editTaskDate}`;
  const taskHour = document.createElement('p');
  taskHour.setAttribute('id', 'taskHour');
  taskHour.innerText = `Hour: ${editTaskHour}`;
  const taskPriority = document.createElement('p');
  taskPriority.setAttribute('id', 'taskPriority');
  taskPriority.innerText = `Priority: ${editTaskPriority}`;
  taskListItem.appendChild(taskTitle);
  taskListItem.appendChild(taskDescription);
  taskListItem.appendChild(taskDate);
  taskListItem.appendChild(taskHour);
  taskListItem.appendChild(taskPriority);

  const editTaskContainer = document.createElement('span');
  const editTask = document.createElement('li');
  editTask.setAttribute('id', 'editTask');
  editTask.classList.add('fas', 'fa-edit');
  editTaskContainer.appendChild(editTask);
  taskListItem.appendChild(editTaskContainer);
  const removeTaskContainer = document.createElement('span');
  const removeTask = document.createElement('li');
  removeTask.setAttribute('id', 'removeTask');
  removeTask.classList.add('fas', 'fa-trash-alt');
  removeTaskContainer.appendChild(removeTask);
  taskListItem.appendChild(removeTaskContainer);
  return taskListItem;
};

const updateProjectsDetail = (taskListItem, taskIndex) => {
  const taskList = document.querySelector('#taskList');
  if (taskIndex !== undefined) {
    const actualTask = taskList.children[taskIndex];

    actualTask.querySelector(
      '#taskTitle',
    ).innerText = `${taskListItem.children[0].textContent}`;
    actualTask.querySelector(
      '#taskDescription',
    ).innerText = `Description ${taskListItem.children[1].textContent}`;
    actualTask.querySelector(
      '#taskDate',
    ).innerText = `Date ${taskListItem.children[2].textContent}`;
    actualTask.querySelector(
      '#taskHour',
    ).innerText = `Hour ${taskListItem.children[3].textContent}`;
    actualTask.querySelector(
      '#taskPriority',
    ).innerText = `Priority ${taskListItem.children[4].textContent}`;
  } else {
    taskList.appendChild(taskListItem);
  }
};

const editTaskFormListeners = (index, taskIndex) => {
  document.querySelector('.editTaskButton').addEventListener('click', () => {
    const editTaskTitle = document.querySelector('#title').value;
    const editTaskDescription = document.querySelector('#description').value;
    const editTaskDate = document.querySelector('#date').value;
    const editTaskHour = document.querySelector('#time').value;
    const editTaskPriority = document.querySelector('#priority').value;
    if (
      taskValidation(
        editTaskTitle,
        editTaskDescription,
        editTaskDate,
        editTaskHour,
        editTaskPriority,
      )
    ) {
      editTask(
        editTaskTitle,
        editTaskDescription,
        editTaskDate,
        editTaskHour,
        editTaskPriority,
        index,
        taskIndex,
      );
      const taskListItem = createTaskitem(
        editTaskTitle,
        editTaskDescription,
        editTaskDate,
        editTaskHour,
        editTaskPriority,
      );
      updateProjectsDetail(taskListItem, taskIndex);
    }
  });
};

const editTaskForm = (task) => {
  const body = document.querySelector('body');
  const avoidInteractionBox = document.createElement('div');
  avoidInteractionBox.classList.add('avoidInteractionBox');
  const div = document.createElement('div');
  div.classList.add('new-box');

  div.appendChild(formTitle('Edit Task'));
  div.appendChild(titleField(task.taskTitle));
  div.appendChild(descriptionField(task.taskDescription));
  div.appendChild(dateField(task.taskDate));
  div.appendChild(hourField(task.taskHour));
  div.appendChild(priorityField(task.taskPriority));
  div.appendChild(formButton('Save changes', 'editTaskButton'));

  div.appendChild(cancelButton());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);
};

const editRemoveTaskListeners = (taskListItem, index, task, taskIndex) => {
  /* TASK LISTENERS */
  taskListItem.children[5].addEventListener('click', () => {
    editTaskForm(task);
    editTaskFormListeners(index, taskIndex);
  });
  taskListItem.children[6].addEventListener('click', () => {
    taskListItem.parentNode.removeChild(taskListItem);
    projects.current[index].tasks.splice(taskIndex, 1);
    saveLocalstorage(projects.current);
  });
};

const addNewTask = (
  newTaskTitle,
  newTaskDescription,
  newTaskDate,
  newTaskHour,
  newTaskPriority,
  index,
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

const newTaskFormListeners = (index) => {
  document.querySelector('.taskButton').addEventListener('click', () => {
    const newTaskTitle = document.querySelector('#title').value;
    const newTaskDescription = document.querySelector('#description').value;
    const newTaskDate = document.querySelector('#date').value;
    const newTaskHour = document.querySelector('#time').value;
    const newTaskPriority = document.querySelector('#priority').value;
    if (
      taskValidation(
        newTaskTitle,
        newTaskDescription,
        newTaskDate,
        newTaskHour,
        newTaskPriority,
      )
    ) {
      addNewTask(
        newTaskTitle,
        newTaskDescription,
        newTaskDate,
        newTaskHour,
        newTaskPriority,
        index,
      );
      const taskListItem = createTaskitem(
        newTaskTitle,
        newTaskDescription,
        newTaskDate,
        newTaskHour,
        newTaskPriority,
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
        taskListItem,
      );
      editRemoveTaskListeners(taskListItem, index, task, taskIndex);
    }
  });
};

const newTaskForm = (index) => {
  const body = document.querySelector('body');
  const avoidInteractionBox = document.createElement('div');
  avoidInteractionBox.classList.add('avoidInteractionBox');

  const div = document.createElement('div');
  div.classList.add('new-box');
  div.appendChild(formTitle('New Task'));
  div.appendChild(titleField());
  div.appendChild(descriptionField());
  div.appendChild(dateField());
  div.appendChild(hourField());
  div.appendChild(priorityField());
  div.appendChild(formButton('Add New Task', 'taskButton'));

  div.appendChild(cancelButton());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);

  newTaskFormListeners(index);
};

const newTaskButtonListener = (newTaskButton, index) => {
  newTaskButton.addEventListener('click', () => {
    newTaskForm(index);
  });
};

const projectDetail = (project, index) => {
  removeBoards();
  const section = document.querySelector('section');
  const projectDetail = document.createElement('div');
  projectDetail.classList.add('projectDetail');
  const h1 = document.createElement('h1');
  h1.innerText = `Project Name: ${project.title}`;
  projectDetail.appendChild(h1);
  const p = document.createElement('p');
  p.innerText = `${project.description}`;
  projectDetail.appendChild(p);
  const newTaskButton = document.createElement('button');
  newTaskButton.classList.add('newTaskButton');
  newTaskButton.innerText = 'Add New Task';
  projectDetail.appendChild(newTaskButton);
  section.appendChild(projectDetail);

  /* Task Board */
  const taskBoard = document.createElement('div');
  taskBoard.classList.add('taskBoard');
  const taskBoardTitle = document.createElement('h2');
  taskBoardTitle.innerText = 'Tasks';
  taskBoard.appendChild(taskBoardTitle);
  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'taskList');

  projects.current[index].tasks.forEach((task, taskIndex) => {
    const taskListItem = createTaskitem(
      task.taskTitle,
      task.taskDescription,
      task.taskDate,
      task.taskHour,
      task.taskPriority,
    );
    taskList.appendChild(taskListItem);

    editRemoveTaskListeners(taskListItem, index, task, taskIndex);
  });
  taskBoard.appendChild(taskList);
  section.appendChild(taskBoard);
  newTaskButtonListener(newTaskButton, index);
};

const createProjectItem = (project) => {
  const item = document.createElement('li');
  const title = document.createElement('h2');
  title.setAttribute('id', 'projectTitle');
  title.innerText = `${project.title}`;
  item.appendChild(title);
  const projectOptions = document.createElement('div');
  const spanEdit = document.createElement('span');
  spanEdit.setAttribute('id', 'spanEdit');
  const editProject = document.createElement('li');
  editProject.classList.add('fas', 'fa-edit');
  editProject.setAttribute('id', 'editProject');
  spanEdit.appendChild(editProject);
  projectOptions.appendChild(spanEdit);
  const spanRemove = document.createElement('span');
  spanRemove.setAttribute('id', 'spanRemove');
  const removeProject = document.createElement('li');
  removeProject.classList.add('fas', 'fa-trash-alt');
  removeProject.setAttribute('id', 'removeProject');
  spanRemove.appendChild(removeProject);
  projectOptions.appendChild(spanRemove);
  projectOptions.innerHTML += '<br><br>';
  const line = document.createElement('hr');
  line.setAttribute('id', 'line');
  projectOptions.appendChild(line);
  item.appendChild(projectOptions);
  return [title, projectOptions, item];
};

const renderEditedProject = (index, title) => {
  const projectToEdit = document.querySelector('#projectsList').children[index];
  projectToEdit.querySelector('#projectTitle').innerText = `${title}`;
  // const projectToEditTitle = { title: projectToEdit.children[0].textContent };
  // editProjectForm(projectToEditTitle, index);
};

const project = (title, description) => ({ title, description, tasks: [] });

const editProject = (title, description, index) => {
  const editedProject = project(title, description);
  projects.current[index] = editedProject;
  saveLocalstorage(projects.current);
  projectDetail(editedProject, index);
  renderEditedProject(index, title);
};

const editProjectValidation = (title, description, index) => {
  if (title && description) {
    editProject(title, description, index);
  }
};

const editProjectFormListener = (index) => {
  /* Listeners */
  document.querySelector('.editProjectButton').addEventListener('click', () => {
    const editProjectTitle = document.querySelector('#title').value;
    const editProjectDescription = document.querySelector('#description').value;
    editProjectValidation(editProjectTitle, editProjectDescription, index);
  });
};

const editProjectForm = (project, index) => {
  const body = document.querySelector('body');
  const avoidInteractionBox = document.createElement('div');
  avoidInteractionBox.classList.add('avoidInteractionBox');

  const div = document.createElement('div');
  div.classList.add('new-box');
  div.appendChild(formTitle('Edit Project'));
  div.appendChild(titleField(project.title));
  div.appendChild(descriptionField(project.description));
  div.appendChild(formButton('Save changes', 'editProjectButton'));

  div.appendChild(cancelButton());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);
  editProjectFormListener(index);
};

const addEditRemoveProjectListeners = (
  title,
  project,
  index,
  projectOptions,
  item,
) => {
  /* LISTENERS FOR EACH PROJECT */
  title.addEventListener('click', () => {
    projectDetail(project, index);
  });
  projectOptions.children[0].addEventListener('click', () => {
    editProjectForm(project, index);
  });
  projectOptions.children[1].addEventListener('click', () => {
    item.parentNode.removeChild(item);
    projects.current.splice(index, 1);
    saveLocalstorage(projects.current);
  });
};

const renderProjects = () => {
  document.querySelector('#projectsList').innerHTML = '';
  getLocalstorage().forEach((project, index) => {
    const getTitleItemProjectOptions = createProjectItem(project);
    const title = getTitleItemProjectOptions[0];
    const projectOptions = getTitleItemProjectOptions[1];
    const item = getTitleItemProjectOptions[2];
    document.querySelector('#projectsList').appendChild(item);
    addEditRemoveProjectListeners(title, project, index, projectOptions, item);
  });
};

const createProject = (title, description) => {
  const newProject = project(title, description);
  projects.current.push(newProject);
  saveLocalstorage(projects.current);
  renderProjects();
};

const newProjectValidation = (title, description) => {
  if (title && description) {
    createProject(title, description);
  }
};

const newProjectFormListeners = () => {
  document.querySelector('.newProjectButton').addEventListener('click', () => {
    const newProjectTitle = document.querySelector('#title').value;
    const newProjectDescription = document.querySelector('#description').value;
    newProjectValidation(newProjectTitle, newProjectDescription);
  });
};

const newProjectForm = () => {
  const body = document.querySelector('body');
  const avoidInteractionBox = document.createElement('div');
  avoidInteractionBox.classList.add('avoidInteractionBox');

  const div = document.createElement('div');
  div.classList.add('new-box');
  div.appendChild(formTitle('New Project'));
  div.appendChild(titleField());
  div.appendChild(descriptionField());
  div.appendChild(formButton('Create Project', 'newProjectButton'));

  div.appendChild(cancelButton());
  body.appendChild(avoidInteractionBox);
  body.appendChild(div);

  newProjectFormListeners();
};

const home = () => {
  /* ASIDE */
  const aside = document.createElement('aside');
  const sideTitleIcon = document.createElement('div');
  sideTitleIcon.setAttribute('id', 'side-title-icon');
  const title = document.createElement('h2');
  title.setAttribute('id', 'aside-main-title');
  title.innerText = 'Projects';
  sideTitleIcon.appendChild(title);
  const addIconContainer = document.createElement('span');
  addIconContainer.setAttribute('id', 'add-icon-container');
  const li = document.createElement('li');
  li.setAttribute('id', 'add-icon');
  li.classList.add('fas', 'fa-plus-circle');
  addIconContainer.appendChild(li);
  sideTitleIcon.appendChild(addIconContainer);
  aside.appendChild(sideTitleIcon);
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'projectsList');
  aside.appendChild(ul);
  document.querySelector('.content').appendChild(aside);

  /* SECTION */
  const section = document.createElement('section');
  const title2 = document.createElement('h2');
  title2.innerText = 'TO-DO LIST';
  section.appendChild(title2);
  document.querySelector('.content').appendChild(section);

  /* LISTENERS */
  document
    .querySelector('#add-icon-container')
    .addEventListener('click', () => {
      newProjectForm();
    });
};

const setDefault = () => {
  if (getLocalstorage()) {
    getLocalstorage().forEach((el) => {
      projects.current.push(el);
    });
  } else {
    const newProject = project('Default', 'Al Projects');
    projects.current.push(newProject);
  }

  localStorage.setItem('myProjects', JSON.stringify(projects.current));
  home();
  renderProjects();
};
document.addEventListener('DOMContentLoaded', setDefault());
