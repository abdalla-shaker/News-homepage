const header = document.querySelector(".header");
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
