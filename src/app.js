import './css/style.css';

const getLocalstorage = () => {
    const currentProjects = JSON.parse(localStorage.getItem('myProjects'));
    return currentProjects;
  }

  const projects = (() =>{
    const current = [];
    return{ current }
})()

const renderProjects = () => {
    getLocalstorage().forEach((project) => {
        const item = document.createElement('li');
        item.textContent = project.title;
        document.querySelector("#projectsList").appendChild(item);
    }) 
}

const renderNewProject = () =>{
    const item = document.createElement('li');
    item.textContent = projects.current[projects.current.length - 1].title;
    document.querySelector("#projectsList").appendChild(item);
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
    document.querySelector("#add-icon").addEventListener("click", createTaskForm);
}

const removeWindow = () =>{
    const projectWindow = document.querySelector(".new-box");
    projectWindow.parentNode.removeChild(projectWindow);
}

const saveLocalstorage = (currentProjects) => {
    localStorage.setItem('myProjects', JSON.stringify(currentProjects));
    renderNewProject()
    removeWindow()
  }

  const project = (title, description) => {
    return { title: title, description: description }
  } 

const createProject = (title, description) => {
    const newProject = project(title, description)
    projects.current.push(newProject)
    saveLocalstorage(projects.current)
}  

const validation = (title, description) =>{
    if(title && description){  
        createProject(title, description);
    }
}

const createTaskForm = () => {
    let body = document.querySelector("body")
  
    
    let div = document.createElement("div");
    div.classList.add("new-box");
    const h1 = document.createElement("h1");
    h1.innerText = "New Project";
    div.appendChild(h1);
    const div2 = document.createElement("div");
    div2.classList.add("textbox");
    const i = document.createElement("i");
    i.classList.add("fas", "fa-tag");
    div2.appendChild(i);
    const input = document.createElement("input");
    input.setAttribute("type", "text"); 
    input.setAttribute("placeholder", "Title"); 
    input.setAttribute("id", "title");
    div2.appendChild(input);
    div.appendChild(div2);

    const div3 = document.createElement("div");
    div3.classList.add("textbox");
    const i2 = document.createElement("i");
    i2.classList.add("fas", "fa-edit");
    div3.appendChild(i);
    const textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Description"); 
    textarea.setAttribute("id", "description");
    div3.appendChild(textarea);
    div.appendChild(div3);

   const createButton = document.createElement("input");
   createButton.setAttribute("type","button");
   createButton.classList.add("btnProject")
   createButton.setAttribute("value","Create Project");
   
   div.appendChild(createButton);
   body.appendChild(div);

    /* LISTENER */
   document.querySelector(".btnProject").addEventListener("click", function(){
    let title = document.querySelector("#title").value
    let description = document.querySelector("#description").value
    validation(title,description)
})
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