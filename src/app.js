import './css/style.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { getLocalstorage, saveLocalstorage } from './js/storage';
import {
  projects,
  project,
  newProjectForm,
  renderProjects,
} from './js/projectTask';

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
    const newProject = project('Default', 'All Projects');
    projects.current.push(newProject);
  }

  saveLocalstorage(projects.current);
  home();
  renderProjects();
};
document.addEventListener('DOMContentLoaded', setDefault());
