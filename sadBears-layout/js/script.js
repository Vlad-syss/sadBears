let bg = document.querySelector(".header__background");
let second = document.querySelector(".header__main_img");
let how1 = document.querySelector(".how__background");
let how2 = document.querySelector(".how__background1");
let map = document.querySelector(".map__background");
let connect = document.querySelector(".connect__background");
let connect1 = document.querySelector(".connect__img");
let team = document.querySelector(".team__background");
let spoiler = document.querySelector(".faq__background");

document.onmousemove = (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  bg.style.transform = "translate(-" + x * 14 + "px, -" + y * 14 +"px)";
  second.style.transform = "translate(-" + y * 3 + "px, -" + x * 5 +"px)";
  how1.style.transform = "translate(-" + x * 17 + "px, -" + y * 18 +"px)";
  how2.style.transform = "translate(-" + x * 8 + "px, -" + y * 8 +"px)";
  map.style.transform = "translate(-" + x * 9 + "px, -" + y * 9 + "px)";
  connect.style.transform = "translate(-" + y * 10 + "px, -" + x * 6 +"px)";
  connect1.style.transform = "translate(-" + x * 5 + "px, -" + y * 1 +"px)";
  team.style.transform = "translate(-" + y * 11 + "px, -" + x * 9 +"px)";
  spoiler.style.transform = "translate(-" + x * 8 + "px, -" + y * 3 +"px)";
};

function showText(event) {
  document.querySelector(".how__adaptive").classList.toggle("show");
}
