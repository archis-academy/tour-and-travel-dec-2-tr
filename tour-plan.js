document.getElementById("gallery-menu").addEventListener("click", galeryOpen);
document
  .getElementById("tourplan-menu")
  .addEventListener("click", tourPlanOpen);
const gallery = document.getElementById("gallery");
const tourPlan = document.getElementById("tour-plan");
const galleryMenu = document.getElementById("gallery-menu-area");
const tourPlanMenu = document.getElementById("tourplan-menu-area");

function galeryOpen() {
  event.preventDefault();
  tourPlanMenu.style.background = "#f8f8f8";
  gallery.style.display = "block";
  galleryMenu.style.background = "#fff";
  tourPlan.style.display = "none";
  information.style.display = "none";
  location.style.display = "none";
}
function tourPlanOpen() {
  event.preventDefault();
  gallery.style.display = "none";
  tourPlanMenu.style.background = "#fff";
  galleryMenu.style.background = "#f8f8f8";
  tourPlan.style.display = "block";
  information.style.display = "none";
  location.style.display = "none";
}
