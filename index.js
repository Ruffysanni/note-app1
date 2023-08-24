const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//Rendering the local storage on the browser
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

//Saving the  note inside the local storage
function saveToStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}

//Create the Notes
createBtn.addEventListener("click", function(){
    let inputBox = document.createElement("p");
    let delImg = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    delImg.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(delImg);
    //saveToStorage();
})

//To delete a note
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveToStorage();
    } else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note =>{
            note.onkeyup = function(){
                saveToStorage();
            }
            //Another method
            // note.addEventListener("keyup", function(){
            //     saveToStorage();
            // })
        })
    }
})
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
