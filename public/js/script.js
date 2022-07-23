const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const sliderCarrusel = document.querySelector(".slideshow-container");
const iconMenu = document.querySelector(".redes");

function toggleMenu(){
  menu.classList.toggle("menu_opened");
  sliderCarrusel.classList.toggle("hide");
  iconMenu.classList.toggle("hide");
}
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu );




