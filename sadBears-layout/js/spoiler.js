const spoilers = document.querySelectorAll(".spoiler.once");

spoilers.forEach(spoiler => {
  const spoilerTitle = spoiler.querySelector(".spoiler__title");
  const spoilerContent = spoiler.querySelector(".spoiler__content");
  
  spoilerTitle.addEventListener("click", () => {
    if (spoiler.classList.contains("active")) {
      spoilerContent.style.maxHeight = "0";
    } else {
      // Закрываем другие активные спойлеры (аккордеон)
      spoilers.forEach(s => {
        if (s !== spoiler) {
          s.classList.remove("active");
          s.querySelector(".spoiler__content").style.maxHeight = "0";
        }
      });

      spoilerContent.style.maxHeight = spoilerContent.scrollHeight + "px";
    }

    spoiler.classList.toggle("active");
  });
});
