const removeAvoidInteractionBox = () => {
  const avoidInteractionBox = document.querySelector(".avoidInteractionBox");
  if (avoidInteractionBox) {
    avoidInteractionBox.remove();
  }
};

const removeWindow = () => {
  if (document.querySelector(".new-box")) {
    const projectWindow = document.querySelector(".new-box");
    //projectWindow.style.display = "none";
    projectWindow.parentNode.removeChild(projectWindow);
  }
  removeAvoidInteractionBox();
};

const cancelButton = () => {
  const cancelButton = document.createElement("input");
  cancelButton.setAttribute("type", "button");
  cancelButton.classList.add("cancelButton");
  cancelButton.setAttribute("value", "Cancel");

  /* CANCEL BUTTON LISTENER */
  cancelButton.addEventListener("click", () => {
    removeWindow();
  });
  return cancelButton;
};

const removeBoards = () => {
  const projectDetail = document.querySelector(".projectDetail");
  const taskBoard = document.querySelector(".taskBoard");
  if (projectDetail) {
    projectDetail.remove();
  }
  if (taskBoard) {
    taskBoard.remove();
  }
};

export { removeBoards, cancelButton, removeWindow };
