//select popupoverlay,popupbox,buttton
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

//slecting cancelbutton
cancelbutton=document.getElementById("cancelpopup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})


//select container,Addbook,Booktitleinput,Bookauthorinput,bookdescription
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var Booktitleinput=document.getElementById("Booktitleinput")
var Bookauthorinput=document.getElementById("Bookauthorinput")
var bookdescription=document.getElementById("bookdescription")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${Booktitleinput.value}</h2>
        <h5>${Bookauthorinput.value}</h5>
        <p>${bookdescription.value}</p>
         <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})


function deletebook(event){
    event.target.parentElement.remove()
}