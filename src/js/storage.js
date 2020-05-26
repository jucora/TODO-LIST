const storage = (() => {
  //Method to get projects from local storage, each project include an array with all project tasks nested

  const get = () => {
    const currentProjects = JSON.parse(localStorage.getItem("myProjects"));
    return currentProjects;
  };

  //Method to save projects and tasks

  const save = (currentProjects) => {
    localStorage.setItem("myProjects", JSON.stringify(currentProjects));
  };
  return {
    get,
    save,
  };
})();

export default storage;
