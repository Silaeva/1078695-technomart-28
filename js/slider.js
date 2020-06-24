const sliderButtons = document.querySelectorAll(".slider__toggle");
const slide = document.querySelectorAll(".slide");

let toggleSlides = () => {
  slide.forEach(element => element.classList.toggle("slide--hidden"))
}

sliderButtons.forEach(element => element.addEventListener("click", toggleSlides));
