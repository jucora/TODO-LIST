import './css/style.css';

const createTaskForm = () => {
    let body = document.querySelector("body")
    body.innerHTML = "";
    body.style.background = "url(../src/images/bg2.jpeg) no-repeat";
    body.style.backgroundSize = "cover"
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
    ul.innerHTML += "<li>Default</li>";
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



document.addEventListener(
    'DOMContentLoaded', home()
  );