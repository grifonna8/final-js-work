import popupOpen from "./popupOpen";
import popupClose from "./popupClose";

const popupConsult = () => {
  const consultForm = document.querySelector('.popup-consultation'),
        closeBtn = document.querySelectorAll('.popup-close')[3];
  let btn = document.querySelector('.consultation-btn');

  btn.addEventListener('click', popupOpen(consultForm));
  consultForm.addEventListener('click', popupClose(consultForm));
  closeBtn.addEventListener('click', popupClose(consultForm));
};

export default popupConsult;