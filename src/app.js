import './css/style.css';
// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/fontawesome';
// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/solid';
// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/regular';
// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/brands';

import storage from './js/storage';
import {
  projects,
  project,
  newProjectForm,
  renderProjects,
} from './js/projectTask';

// Method to add listener to add project option

const addProjectListener = () => {
  document
    .querySelector('#add-icon-container')
    .addEventListener('click', () => {
      newProjectForm();
    });
};

// Method to create home view, principal view when the app is loaded

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
  addProjectListener();
};

// Method to set a Default project or load current projects in local storage

const setDefault = () => {
  if (storage.get()) {
    storage.get().forEach((el) => {
      projects.current.push(el);
    });
  } else {
    const newProject = project('Default', 'All Projects');
    projects.current.push(newProject);
  }
  storage.save(projects.current);
  home();
  renderProjects();
};
document.addEventListener('DOMContentLoaded', setDefault());
