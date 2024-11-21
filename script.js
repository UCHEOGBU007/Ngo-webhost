let menu = document.querySelector(".menu");
let activeMenu = document.querySelector(".navigation");
let form = document.getElementById("contact-us");

menu.addEventListener("click", function(){
  activeMenu.classList.toggle("activeMenu");
})

