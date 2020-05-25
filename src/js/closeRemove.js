const remove = (() => {
  const removeAvoidInteractionBox = () => {
    const avoidInteractionBox = document.querySelector('.avoidInteractionBox');
    if (avoidInteractionBox) {
      avoidInteractionBox.remove();
    }
  };

  const window = () => {
    if (document.querySelector('.new-box')) {
      const projectWindow = document.querySelector('.new-box');
      projectWindow.parentNode.removeChild(projectWindow);
    }
    removeAvoidInteractionBox();
  };

  const cancel = () => {
    const cancelButton = document.createElement('input');
    cancelButton.setAttribute('type', 'button');
    cancelButton.classList.add('cancelButton');
    cancelButton.setAttribute('value', 'Cancel');

    /* CANCEL BUTTON LISTENER */
    cancelButton.addEventListener('click', () => {
      window();
    });
    return cancelButton;
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
    cancel,
  };
})();

export default remove;
