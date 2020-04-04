import popupOpen from "./popupOpen";
import popupClose from "./popupClose";

const popupCheck = () => {
  const checkForm = document.querySelector('.popup-check'),
        btn = document.querySelector('.gauging-button'),
        closeBtn = document.querySelectorAll('.popup-close')[2];

  btn.addEventListener('click', popupOpen(checkForm));
  checkForm.addEventListener('click', popupClose(checkForm));
};

export default popupCheck;