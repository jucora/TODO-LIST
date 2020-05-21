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

export {
  formTitle,
  titleField,
  descriptionField,
  dateField,
  hourField,
  priorityField,
  formButton,
};
