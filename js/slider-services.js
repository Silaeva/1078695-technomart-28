const servicesBlock = document.querySelector(".services");
const sliderServButtons = servicesBlock.querySelectorAll(".services__control");
const slideServ = servicesBlock.querySelectorAll(".services__slide");

let clearControlCurrentClass = () => {
  sliderServButtons.forEach((element) => {
    element.classList.remove("services__control--current");
  });
}

let clearSlideCurrentClass = () => {
  slideServ.forEach((element) => {
    element.classList.remove("services__slide--current");
  });
}

let toggleServSlides = function (evt) {
  clearControlCurrentClass();
  clearSlideCurrentClass();

  for (let i = 0; i < sliderServButtons.length; i++) {
    if (evt.target === sliderServButtons[i]) {
      sliderServButtons[i].classList.add("services__control--current");
      slideServ[i].classList.add("services__slide--current");
    }
  }
}

sliderServButtons.forEach(element => element.addEventListener("click", toggleServSlides));
