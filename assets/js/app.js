let navigation = document.querySelector(".nav");
let hamburger = document.querySelector(".nav__hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("nav__hamburger--active");
  navigation.classList.toggle("nav--open");
});
