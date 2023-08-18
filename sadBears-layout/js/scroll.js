window.addEventListener("scroll", () => {
  const header = document.querySelector(".header__row");
  const headerMain = document.querySelector(".header");
  const scrollView = window.pageYOffset || document.documentElement.scrollTop;

  if(scrollView >= 100){
    header.classList.add("scroll");
    headerMain.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
    headerMain.classList.remove("scroll");
  }
});
