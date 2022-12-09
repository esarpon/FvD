// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header button")
var nav = document.querySelector("header nav")

var sluitButton = document.querySelector("header nav button")

function openMenu(){
    nav.classList.add("toonMenu")
}
menuButton.addEventListener('click', openMenu)

function sluitMenu(){
    nav.classList.remove("toonMenu")
}
sluitButton.addEventListener('click', sluitMenu)