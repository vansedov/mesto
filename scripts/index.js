const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-button');
const formSubmit = document.querySelector('.popup__container');
const inputName = document.querySelector('.popup__input_name');
const inputSubname = document.querySelector('.popup__input_subname');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__subname');

console.log({popup, popupOpenButton, popupCloseButton})

const loadUserData = () => {
  inputName.value = profileName.textContent;
  inputSubname.value = profileSubname.textContent;
}

const saveUserData = () => {
  profileName.textContent = inputName.value;
  profileSubname.textContent = inputSubname.value;
}

const popupOpen = (event) => {
  loadUserData();
  popup.classList.add('popup_is-opened');
}

const popupClose = (event) => {
  event.preventDefault();
  popup.classList.remove('popup_is-opened');  
}


const popupCloseByClickOnOverlay = (event) => {
  console.log({
    target: event.target,
  })
  if (event.target !== event.currentTarget) {
    return
  }
  popupClose(event);
}

const submitForm = (event) => {
  event.preventDefault();
  saveUserData();
  popupClose(event);
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popup.addEventListener('click', popupCloseByClickOnOverlay);
formSubmit.addEventListener('submit', submitForm);


