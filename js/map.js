const map = document.querySelector(".popup__map");
const openMapBtn = document.querySelector(".contacts__map-link");
const closeMapBtn = map.querySelector(".btn__close");

const openMap = () => {
  map.classList.add("map--show");
  closeMapBtn.addEventListener("click", closeMapClickHandler);
  window.addEventListener("keydown", closeMapEscHandler);
}

const openMapClickHandler = (evt) => {
  evt.preventDefault();
  openMap();
}

openMapBtn.addEventListener("click", openMapClickHandler);

const closeMap = () => {
  map.classList.remove("map--show");
  removeCloseHandlers();
}

const closeMapClickHandler = () => {
  closeMap();
}


const closeMapEscHandler = (evt) => {
  if (evt.keyCode === 27) {
    closeMap();
  }
}

const removeCloseHandlers = () => {
  closeMapBtn.removeEventListener("click", closeMapClickHandler);
  window.removeEventListener("keydown", closeMapEscHandler);
}
