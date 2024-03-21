document.querySelector("#package-plan-button").addEventListener("click", packageMenuOpen);
document.querySelector("#package-menu-close").addEventListener("click", packageMenuClose);
const bodyScroll = document.body;
function packageMenuOpen() {
   let menu = document.querySelector("#package-menu");
   menu.style.display = "block";
   bodyScroll.style.overflow = "hidden"
   let headerMenu = document.querySelector("#header");
   headerMenu.classList.add("homepage-before")


}
function packageMenuClose() {
   let menu = document.querySelector("#package-menu");
   menu.style.display = "none";
   bodyScroll.style.overflow = "scroll";
   let headerMenu = document.querySelector("#header");
   headerMenu.classList.remove("homepage-before")


}
document.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#toggle-menu-link").addEventListener("mouseover", openToggleMenu);
   document.querySelector("#toggle-menu-link").addEventListener("mouseout", closeToggleMenu);
   document.querySelector("#toggle-menu").addEventListener("mouseover", openToggleMenu);
   document.querySelector("#toggle-menu").addEventListener("mouseout", closeToggleMenu)
   function openToggleMenu() {
      let toggleMenuList = document.querySelector("#toggle-menu");
      toggleMenuList.style.display = "block"
   }
   function closeToggleMenu() {
      let toggleMenuList = document.querySelector("#toggle-menu");
      toggleMenuList.style.display = "none"
   }



});
