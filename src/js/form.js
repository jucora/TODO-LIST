import remove from "./closeRemove";

const form = (() => {
  /* Method to add listener to the form cancel button, 
  when user clicks on it, it will remove the form window */

  const cancelButtonListener = (cancelButton) => {
    cancelButton.addEventListener("click", () => {
      remove.window();
    });
  };

  // Method to create the cancel button

  const cancel = () => {
    const cancelButton = document.createElement("input");
    cancelButton.setAttribute("type", "button");
    cancelButton.classList.add("cancelButton");
    cancelButton.setAttribute("value", "Cancel");
    cancelButtonListener(cancelButton);
    return cancelButton;
  };

  /* Method to delete an error message if the message exists, 
  so the form will always display one message by error */

  const checkErrorMessage = () => {
    const error = document.querySelector("#message");
    if (error) {
      error.parentNode.removeChild(error);
    }
  };

  // Method to display an error message in the form when some validation fails

  const errorMessage = (messageText) => {
    checkErrorMessage();
    const message = document.createElement("p");
    message.setAttribute("id", "message");
    const formBox = document.querySelector(".new-box");
    message.innerText = `${messageText}`;
    message.style.display = "block";
    formBox.insertBefore(message, document.querySelector("#submit"));
  };

  // Method to create the submit form button

  const button = (buttonText, buttonClass) => {
    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", "submit");
    button.classList.add(`${buttonClass}`);
    button.setAttribute("value", `${buttonText}`);
    return button;
  };

  const showTaskPriority = (taskPriority, opt1, opt2, opt3) => {
    if (taskPriority) {
      switch (taskPriority) {
        case "Low":
          opt1.setAttribute("selected", true);
          break;
        case "Normal":
          opt2.setAttribute("selected", true);
          break;
        case "Hight":
          opt3.setAttribute("selected", true);
          break;
        default:
          break;
      }
    }
  };

  //Method to create the priority form field

  const priorityField = (taskPriority) => {
    const div6 = document.createElement("div");
    div6.classList.add("textbox");
    const i = document.createElement("i");
    i.classList.add("fas", "fa-calendar-week");
    div6.appendChild(i);
    const select = document.createElement("select");
    select.setAttribute("id", "priority");
    const opt1 = document.createElement("option");
    opt1.innerText = "Low";
    select.appendChild(opt1);
    const opt2 = document.createElement("option");
    opt2.innerText = "Normal";
    select.appendChild(opt2);
    const opt3 = document.createElement("option");
    opt3.innerText = "Hight";
    select.appendChild(opt3);
    showTaskPriority(taskPriority, opt1, opt2, opt3);
    div6.appendChild(select);
    return div6;
  };

  // Method to create the form hour field

  const hourField = (taskHour) => {
    const div5 = document.createElement("div");
    div5.classList.add("textbox");
    const i = document.createElement("i");
    i.classList.add("far", "fa-clock");
    div5.appendChild(i);
    const input = document.createElement("input");
    input.setAttribute("type", "time");
    if (taskHour) {
      input.setAttribute("value", taskHour);
    }
    input.setAttribute("id", "time");
    div5.appendChild(input);
    return div5;
  };

  // Method to create the date form field

  const dateField = (taskDate) => {
    const div4 = document.createElement("div");
    div4.classList.add("textbox");
    const i = document.createElement("i");
    i.classList.add("fas", "fa-calendar-week");
    div4.appendChild(i);
    const input = document.createElement("input");
    input.setAttribute("type", "date");
    if (taskDate) {
      input.setAttribute("value", taskDate);
    }
    input.setAttribute("id", "date");
    div4.appendChild(input);
    return div4;
  };

  // Method to create the description form field

  const descriptionField = (inputValue = "") => {
    const div3 = document.createElement("div");
    div3.classList.add("textbox");
    const i2 = document.createElement("i");
    i2.classList.add("far", "fa-sticky-note");
    const textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Description");
    textarea.setAttribute("id", "description");
    textarea.innerText = inputValue;
    div3.appendChild(textarea);
    return div3;
  };

  // Method to create the title form field

  const titleField = (inputValue = "") => {
    const div2 = document.createElement("div");
    div2.classList.add("textbox");
    const i = document.createElement("i");
    i.classList.add("fas", "fa-tag");
    div2.appendChild(i);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Title");
    input.setAttribute("id", "title");
    input.setAttribute("value", inputValue);
    div2.appendChild(input);
    return div2;
  };

  // Method to create the title of the form

  const title = (title) => {
    const h1 = document.createElement("h1");
    h1.innerText = `${title}`;
    return h1;
  };

  // Method to create the form box

  const formBox = () => {
    const div = document.createElement("div");
    div.classList.add("new-box");
    return div;
  };
  return {
    formBox,
    title,
    titleField,
    descriptionField,
    dateField,
    hourField,
    priorityField,
    button,
    errorMessage,
    cancel,
  };
})();

export default form;
