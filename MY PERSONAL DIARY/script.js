var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("add-popup-button")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var canceldata = document.getElementById("cancel-data")
canceldata.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// select container, add-data, data-title, data-date, data-description

var container = document.querySelector(".container")
var adddata = document.getElementById("add-data")
var datatitle = document.getElementById("data-title")
var datadate = document.getElementById("data-date")
var datadescription = document.getElementById("data-description")

adddata.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","data-container")
    div.innerHTML=`<h2>${datatitle.value}</h2>
    <h5>${datadate.value}</h5>
    <p>${datadescription.value}</p>
    <button onclick="deletedata(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletedata(event){
    event.target.parentElement.remove()
}