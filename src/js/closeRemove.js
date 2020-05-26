const remove = (() => {
  /* Method to remove invisible window, this window avoid user to interact with
  the application when a form is being displayed, if the user closes the form or
  submit info through the form, this window is removed */

  const removeAvoidInteractionBox = () => {
    const avoidInteractionBox = document.querySelector('.avoidInteractionBox');
    if (avoidInteractionBox) {
      avoidInteractionBox.remove();
    }
  };

  /* Method to remove form window once the user submit data through the form,
   or when user clicks in cancel form button */

  const window = () => {
    if (document.querySelector('.new-box')) {
      const projectWindow = document.querySelector('.new-box');
      projectWindow.parentNode.removeChild(projectWindow);
    }
    removeAvoidInteractionBox();
  };

  const boards = () => {
    const projectDetail = document.querySelector('.projectDetail');
    const taskBoard = document.querySelector('.taskBoard');
    if (projectDetail) {
      projectDetail.remove();
    }
    if (taskBoard) {
      taskBoard.remove();
    }
  };
  return {
    window,
    boards,
  };
})();

export default remove;
