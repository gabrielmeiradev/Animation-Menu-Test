// DOM ELEMENTS
let menuContentElement = document.querySelector(".menu__content");
let menu = document.querySelector(".menu__hamburger");
let shortMenuBar = document.querySelector(".short");
let menuLinksElement = document.querySelector(".menu__links");
let counter = 0;
let creator = document.querySelector(".creator__mark");

menu.addEventListener('click', event => {
    if(counter == 0){
        menuContentElement.style.width = "150px";
        menuContentElement.style.padding = "0px 20px 0px 20px";
        menuLinksElement.style.display = "flex";
        shortMenuBar.style.width = "40px";
        counter = 1;     
        creator.style.display = "inherit";
    }
    else{
        menuContentElement.style.width = "0";
        menuContentElement.style.padding = "0";
        creator.style.display = "none";
        shortMenuBar.style.width = "20px";
        menuLinksElement.style.display = "none";
        counter = 0;
    }
});