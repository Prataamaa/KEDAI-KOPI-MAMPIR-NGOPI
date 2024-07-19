// Toggle class active untuk humberger menu
const hm = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = (b) => {
  navbarNav.classList.toggle("active");
  b.preventDefault();
};

document.querySelector(".navbar-extra").onclick = (x) => {
  x.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const sb = document.querySelector("#search-button");

// Untuk memunculkan search box
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  // Untuk bug pada saat dipencet search form dia malah kembali
  // ke menu utama dan kita ngga mau ini dan ini solusinya
  e.preventDefault();
};
document.addEventListener("click", function (a) {
  if (!sb.contains(a.target) && !searchForm.contains(a.target)) {
    searchForm.classList.remove("active");
  }
});

// Toggle class acrive untuk search form (end)

// Toggle untuk shopping cart (start)

const scb = document.querySelector("#shopping-cart-button");
const sc = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (h) => {
  sc.classList.toggle("active");
  h.preventDefault();
};

document.addEventListener("click", function (b) {
  if (!scb.contains(b.target) && !sc.contains(b.target)) {
    sc.classList.remove("active");
  }
});

// Toggle untuk shopping cart (end)

// Modal BOX

// Item Detail Modal
const idm = document.querySelector("#item-detail-modal");
// Item Detail Button
const idb = document.querySelectorAll(".item-detail-button");
// Modal
const m = document.querySelector(".modal");
// Close icon
const ci = document.querySelector(".close-icon");
// Modal Container
const mc = document.querySelector(".modal-container");

// Togle button modal Dengan Looping
idb.forEach((btn) => {
  btn.onclick = (e) => {
    m.style.display = "flex";
    mc.style.animation = "animateModal 0.5s forwards"; // animasi masuk
    e.preventDefault();
  };
});

// menkomen toggle Button modal sebelum Looping
// idb.onclick = (e) => {
//   m.style.display = "flex";
//   mc.style.animation = "animateModal 0.5s forwards"; // animasi masuk
//   e.preventDefault();
// };

// close icon with Looping
// ci.forEach((btn) => {
//   btn.onclick = (a) => {
//     mc.style.animation = "animateModalOut 0.5s forwards";
//     setTimeout(function () {
//       m.style.display = "none";
//       mc.style.animation = "none";
//     }, 500); //Durasi waktu sesuai animasi keluar

//     a.preventDefault();
//   };
// });

// close icon no looping
ci.onclick = (a) => {
  mc.style.animation = "animateModalOut 0.5s forwards";
  setTimeout(function () {
    m.style.display = "none";
    mc.style.animation = "none";
  }, 500); //Durasi waktu sesuai animasi keluar

  a.preventDefault();
};
