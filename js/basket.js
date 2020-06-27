const buyButtons = document.querySelectorAll(".item__btn-buy");
const basketPopup = document.querySelector(".basket-success");
const closeBtn = basketPopup.querySelector(".basket-success__close-btn");

const openPopup = () => {
  basketPopup.classList.add("basket-success--show");
  closeBtn.addEventListener("click", closePopupClickHandler);
  window.addEventListener("keydown", closePopupEscHandler);
}

const openPopupClickHandler = (evt) => {
  evt.preventDefault();
  openPopup();
}

buyButtons.forEach(button => button.addEventListener("click", openPopupClickHandler));

const closePopup = () => {
  basketPopup.classList.remove("basket-success--show");
  removeCloseHandlers();
}

const closePopupClickHandler = () => {
  closePopup();
}


const closePopupEscHandler = (evt) => {
  if (evt.keyCode === 27) {
    closePopup();
  }
}

const removeCloseHandlers = () => {
  closeBtn.removeEventListener("click", closePopupClickHandler);
  window.removeEventListener("keydown", closePopupEscHandler);
}
