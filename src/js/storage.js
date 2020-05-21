const getLocalstorage = () => {
  const currentProjects = JSON.parse(localStorage.getItem('myProjects'));
  return currentProjects;
};

const saveLocalstorage = (currentProjects) => {
  localStorage.setItem('myProjects', JSON.stringify(currentProjects));
};

export { saveLocalstorage, getLocalstorage };
