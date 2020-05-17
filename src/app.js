import './css/style.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const getLocalstorage = () => {
    const currentProjects = JSON.parse(localStorage.getItem('myProjects'));
    return currentProjects;
  }

  const projects = (() =>{
    const current = [];
    return{ current }
})()

const checkboxDetail = (section) => {
    if(section.children[1]){
        section.children[1].parentNode.removeChild(section.children[1]);
    }
}

const projectDetail = (project) => {
    let section = document.querySelector("section");
    checkboxDetail(section);
    const projectDetail = document.createElement("div");
    projectDetail.classList.add("projectDetail");
    const h1 = document.createElement("h1");
    h1.innerText = `${project.title}`;
    projectDetail.appendChild(h1);
    const p = document.createElement("p");
    p.innerText = `${project.description}`;
    projectDetail.appendChild(p);
    section.appendChild(projectDetail);
}

const removeWindow = () =>{
    if(document.querySelector(".new-box")){
        const projectWindow = document.querySelector(".new-box");
        projectWindow.parentNode.removeChild(projectWindow);
    }
}

const saveLocalstorage = (currentProjects) => {
    localStorage.setItem('myProjects', JSON.stringify(currentProjects));
    renderProjects();
    removeWindow()
  }

  const project = (title, description) => {
    return { title: title, description: description }
  } 

const editProject = (title, description, index) => {
    let editedProject = project(title, description);
    projects.current[index] = editedProject;
    saveLocalstorage(projects.current)
    projectDetail(editedProject);
}  

const createProject = (title, description) => {
    const newProject = project(title, description)
    projects.current.push(newProject)
    saveLocalstorage(projects.current)
}  

const newProjectValidation = (title, description) =>{
    if(title && description){ 
        createProject(title, description);
    }
}

const editProjectValidation = (title, description, index) =>{
    if(title && description){  
        editProject(title, description, index);
    }
}

const formButton = (buttonText, buttonClass) =>{
    const button = document.createElement("input");
    button.setAttribute("type","button");
    button.classList.add(`${buttonClass}`)
    button.setAttribute("value",`${buttonText}`);
    return button;
}

const descriptionField = (inputValue = "") =>{
    const div3 = document.createElement("div");
    div3.classList.add("textbox");
    const i2 = document.createElement("i");
    i2.classList.add("fas", "fa-edit");
    const textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Description"); 
    textarea.setAttribute("id", "description");
    textarea.innerText = inputValue;
    div3.appendChild(textarea);
    return div3;
}


const titleField = (inputValue = "") =>{
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
}

const formTitle = (title) => {
    const h1 = document.createElement("h1");
    h1.innerText = `${title}`;
    return h1;
}

const form = (formType, project, index) => {
    let body = document.querySelector("body")
    let div = document.createElement("div");
    div.classList.add("new-box");
    switch(formType){
        case "newProject":
            div.appendChild(formTitle("New Project"));
            div.appendChild(titleField());
            div.appendChild(descriptionField());
            div.appendChild(formButton("Create Project", "newProjectButton"));
            
        break;
        case "editProject":
            div.appendChild(formTitle("Edit Project"));
            div.appendChild(titleField(project.title));
            div.appendChild(descriptionField(project.description));
            div.appendChild(formButton("Save changes", "editProjectButton"));
        break;
        case "newTask":
            div.appendChild(newProjectTitle("New Task"));
        break;
        case "editTask":
            div.appendChild(newProjectTitle("Edit Task"));
        break;
        default: 
        break;
    }
   body.appendChild(div); 

   /*LISTENERS*/
   if(formType === "newProject"){
        document.querySelector(".newProjectButton").addEventListener("click", function(){
            let newProjectTitle = document.querySelector("#title").value
            let newProjectDescription = document.querySelector("#description").value
            newProjectValidation(newProjectTitle, newProjectDescription);
        })
    }
    if(formType === "editProject"){
        document.querySelector(".editProjectButton").addEventListener("click", function(){
            let editProjectTitle = document.querySelector("#title").value
            let editProjectDescription = document.querySelector("#description").value
            editProjectValidation(editProjectTitle,editProjectDescription, index)
        })   
    }
}

const renderProjects = () => {
    document.querySelector("#projectsList").innerHTML = "";
    getLocalstorage().forEach((project, index) => {
        const item = document.createElement('li');
        const title = document.createElement("h2");
        title.innerText = project.title
        item.appendChild(title);
        const projectOptions = document.createElement("div");

        const spanEdit = document.createElement("span");
        spanEdit.setAttribute("id", "spanEdit");
        const editProject = document.createElement("li");
        editProject.classList.add('fas', 'fa-edit');
        editProject.setAttribute("id", "editProject");
        spanEdit.appendChild(editProject);
        projectOptions.appendChild(spanEdit);

        const spanRemove = document.createElement("span");
        spanRemove.setAttribute("id", "spanRemove")
        const removeProject = document.createElement("li");
        removeProject.classList.add('fas', 'fa-trash-alt');
        removeProject.setAttribute("id", "removeProject");
        spanRemove.appendChild(removeProject);
        projectOptions.appendChild(spanRemove);

        projectOptions.innerHTML += "<br><br>"
        const line = document.createElement("hr");
        line.setAttribute("id", "line")
        projectOptions.appendChild(line);
        item.appendChild(projectOptions);
        document.querySelector("#projectsList").appendChild(item);
        /*LISTENERS FOR EACH PROJECT*/
        title.addEventListener("click", function detail(){
            projectDetail(project);
        });
        projectOptions.children[0].addEventListener("click", function(){
            form("editProject", project, index);
        })
        projectOptions.children[1].addEventListener("click", function(){
            item.parentNode.removeChild(item);
            projects.current.splice(index,1);
            saveLocalstorage(projects.current);
        })
    }) 
}

const home = () =>{
    /* ASIDE */
    let aside = document.createElement("aside");
    let title = document.createElement("h2");
    title.innerText = "Projects";
    let img = document.createElement("img");
    img.setAttribute("src", "../src/images/add.svg");
    img.setAttribute("alt", "add-icon");
    img.setAttribute("id", "add-icon");
    title.appendChild(img);
    let ul = document.createElement("ul");
    ul.setAttribute("id", "projectsList");
    aside.appendChild(title);
    aside.appendChild(ul);
    document.querySelector(".content").appendChild(aside);

    /* SECTION */
    let section = document.createElement("section");
    let title2 = document.createElement("h2");
    title2.innerText = "TO-DO LIST";
    section.appendChild(title2)
    document.querySelector(".content").appendChild(section);

    /*LISTENERS*/
    document.querySelector("#add-icon").addEventListener("click", () => {
         form("newProject")
    });
}

const setDefault = () => {
    if(getLocalstorage()){
        getLocalstorage().forEach((el) => {
            projects.current.push(el);
        })
    }
    else{
        const newProject = project("Default", "Al Projects")
        projects.current.push(newProject)
    }
    
    localStorage.setItem('myProjects', JSON.stringify(projects.current));
    home();
    renderProjects();
}
document.addEventListener(
    'DOMContentLoaded', setDefault()
  );