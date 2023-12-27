 document.querySelector("#packagePlanButton").addEventListener("click", packageMenuOpen);
document.querySelector("#packageMenuClose").addEventListener("click", packageMenuClose);
function packageMenuOpen(){
   let menu = document.querySelector("#packageMenu");
   menu.style.display = "block";
   let headerMenu = document.querySelector("#header");
   headerMenu.classList.add("homepage-before")

  
}
function packageMenuClose(){
    let menu = document.querySelector("#packageMenu");
    menu.style.display = "none";
    let headerMenu = document.querySelector("#header");
    headerMenu.classList.remove("homepage-before")
 
    
 }

 document.querySelector("#toggleMenuLink").addEventListener("mouseover", openToggleMenu);
 document.querySelector("#toggleMenuLink").addEventListener("mouseout", closeToggleMenu);
document.querySelector("#toggleMenu").addEventListener("mouseover", openToggleMenu);
document.querySelector("#toggleMenu").addEventListener("mouseout", closeToggleMenu)
 function openToggleMenu(){
    let toggleMenuList = document.querySelector("#toggleMenu");
    toggleMenuList.style.display = "block"
 }
 function closeToggleMenu(){
    let toggleMenuList = document.querySelector("#toggleMenu");
    toggleMenuList.style.display = "none"
 }

 

 
