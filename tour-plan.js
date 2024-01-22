document.getElementById("gallery-menu").addEventListener("click", galeryOpen);
document.getElementById("tourplan-menu").addEventListener("click", tourPlanOpen);
document.getElementById("location-menu").addEventListener("click", LocationOpen);
document.getElementById("information-menu").addEventListener("click", informationOpen);

const gallery = document.getElementById("gallery");
const tourPlan = document.getElementById("tour-plan");
const galleryMenu = document.getElementById("gallery-menu-area");
const tourPlanMenu = document.getElementById("tourplan-menu-area");
const booking4 = document.getElementsByClassName("booking-container-4");
const booking3 = document.getElementsByClassName("booking-container-3");
const booking1 = document.getElementsByClassName("booking-container-1");
const informationmenu = document.getElementById("information-menu");
const greenplantphoto = document.getElementsById("greenphoto");

function galeryOpen() {
  event.preventDefault();
  tourPlanMenu.style.background = "#f8f8f8";
  gallery.style.display = "block";
  galleryMenu.style.background = "#fff";
  tourPlan.style.display = "none";
  information.style.display = "none";
  location.style.display = "none";
  booking1.style = "none";
}
function tourPlanOpen() {
  event.preventDefault();
  gallery.style.display = "none";
  tourPlanMenu.style.background = "#fff";
  galleryMenu.style.background = "#f8f8f8";
  tourPlan.style.display = "block";
  information.style.display = "none";
  location.style.display = "none";
  booking1.style = "none";
}

function informationOpen() {
  event.preventDefault();
  gallery.style.display = "none";
  tourPlan.style.display = "none";
  information.style.display = "block";
  location.style.display = "none";
  informationmenu.style.background = "#FF00FF"
  greenplantphoto.style.display = "none";
  booking1.style = "none";
}

function LocationOpen() {
  event.preventDefault();
  gallery.style.display = "none";
  tourPlan.style.display = "none";
  information.style.display = "none";
  location.style.display = "block";
  greenplantphoto.style.display = "none";
  booking1.style = "none";
}

