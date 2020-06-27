const openFormBtn = document.querySelector(".contacts__btn");
const formPopup = document.querySelector(".write-us");
const closeFormBtn = formPopup.querySelector(".write-us__close");
const userName = formPopup.querySelector("[name=name]");
const userEmail = formPopup.querySelector("[name=email]");
const form = formPopup.querySelector(".write-us__form");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

const openForm = () => {
  formPopup.classList.add("write-us--show");
  window.addEventListener("keydown", formEscHandler);
  closeFormBtn.addEventListener("click", closeFormClickHandler);
  form.addEventListener("submit", formSubmitHandler);
}

const closeForm = () => {
  formPopup.classList.remove("write-us--show");
  formPopup.classList.remove("write-us--error");
  window.removeEventListener("keydown", formEscHandler);
  closeFormBtn.removeEventListener("click", closeFormClickHandler);
  form.removeEventListener("submit", formSubmitHandler);
}

const openFormClickHandler = (evt) => {
  evt.preventDefault();
  openForm();

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
}

openFormBtn.addEventListener("click", openFormClickHandler);

const closeFormClickHandler = () => {
  closeForm();
}

const formSubmitHandler = (evt) => {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    formPopup.classList.remove("write-us--error");
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add("write-us--error");
  } else {
    localStorage.setItem("userName", userName.value);
  }
}

const formEscHandler = (evt) => {
  if (evt.keyCode === 27) {
    closeForm();
  }
}
