let burger = document.querySelector(".header__burger");
let header = document.querySelector(".header__row");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  burger.classList.toggle("active");
  header.classList.toggle("active");
  document.body.classList.toggle("lock");
})