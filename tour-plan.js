

document.getElementById("information-menu").addEventListener("click", informationOpen);
document.getElementById("location-menu").addEventListener("click", LocationOpen);
document.getElementById("gallery-menu").addEventListener("click", galleryOpen);
document.getElementById("tourplan-menu").addEventListener("click", tourPlanOpen);

//bazı sayfalarda olmayan yeşillik fotoğrafı
const greeneryphoto = document.getElementById("greenphoto");

//sayfalar aşağıdadır
const information = document.getElementById("information");
const locationpage = document.getElementById("location-page");
const gallery = document.getElementById("gallery");
const tourplan = document.getElementById("tourplan");
const bookingsearcharea = document.getElementById("bookingarea");

//butonlar aşağıdadır
const info_button = document.getElementById("information-area");
const location_button = document.getElementById("location-menu-area");
const gallery_button = document.getElementById("gallery-menu-area");
const tour_button = document.getElementById("tourplan-menu-area");

// let yeniGenislik = 600;

//yeşillik fotosunu da gösterme
greeneryphoto.style.display = "none";


//başlangıçta görünen sayfa ayarlaması
let currentPage = information;

function showPage(currentPage) {
  // Tüm sayfaları gizle
  locationpage.style.display = "none";
  gallery.style.display = "none";
  tourplan.style.display = "none";


  // ilk sayfayı göster
  information.style.display = "block";
}
//fonksiyonu çağırdım.
showPage();



//butonlara tıklayıp sayfa değiştirme

function informationOpen() {
  event.preventDefault();
  information.style.display = "block";
  locationpage.style.display = "none";
  gallery.style.display = "none";
  tourplan.style.display = "none";
  //renk değişimleri için
  info_button.style.background = "#fff";
  location_button.style.background = "#f8f8f8";
  gallery_button.style.background = "#f8f8f8";
  tour_button.style.background = "#f8f8f8";

  greeneryphoto.style.display = "none";
}


function LocationOpen() {
  event.preventDefault();
  information.style.display = "none";
  locationpage.style.display = "block";
  gallery.style.display = "none";
  tourplan.style.display = "none";
  //renk değişimleri için
  info_button.style.background = "#f8f8f8";
  location_button.style.background = "#fff";
  gallery_button.style.background = "#f8f8f8";
  tour_button.style.background = "#f8f8f8";

  greeneryphoto.style.display = "block";
}

function galleryOpen() {
  event.preventDefault();
  information.style.display = "none";
  locationpage.style.display = "none";
  gallery.style.display = "block";
  tourplan.style.display = "none";
  //renk değişimleri için
  info_button.style.background = "#f8f8f8";
  location_button.style.background = "#f8f8f8";
  gallery_button.style.background = "#fff";
  tour_button.style.background = "#f8f8f8";

  greeneryphoto.style.display = "block";
}

function tourPlanOpen() {
  event.preventDefault();
  information.style.display = "none";
  locationpage.style.display = "none";
  gallery.style.display = "none";
  tourplan.style.display = "block";
  //renk değişimleri için
  info_button.style.background = "#f8f8f8";
  location_button.style.background = "#f8f8f8";
  gallery_button.style.background = "#f8f8f8";
  tour_button.style.background = "#fff";

  greeneryphoto.style.display = "none";
}


// Başlangıçta görüntülenen sayfa
// let currentPage = "information";

// document.getElementById("gallery-menu").addEventListener("click", function (event) {
//   event.preventDefault();
//   showPage("gallery");
// });

// document.getElementById("tourplan-menu").addEventListener("click", function (event) {
//   event.preventDefault();
//   showPage("tour-plan");
// });

// document.getElementById("location-menu").addEventListener("click", function (event) {
//   event.preventDefault();
//   showPage("location");
// });

// document.getElementById("information-menu").addEventListener("click", function (event) {
//   event.preventDefault();
//   showPage("information");
// });

// function showPage(page) {
//   // Tüm sayfaları gizle
//   document.getElementById("gallery").style.display = "none";
//   document.getElementById("tour-plan").style.display = "none";
//   document.getElementById("location").style.display = "none";
//   document.getElementById("information").style.display = "none";

//   // Belirli sayfayı göster
//   document.getElementById(page).style.display = "block";

//   // Güncel sayfa değişkenini güncelle
//   currentPage = page;
// }