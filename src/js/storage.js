const storage = (() => {
  const get = () => {
    const currentProjects = JSON.parse(localStorage.getItem('myProjects'));
    return currentProjects;
  };

  const save = (currentProjects) => {
    localStorage.setItem('myProjects', JSON.stringify(currentProjects));
  };
  return {
    get,
    save,
  };
})();

export default storage;
