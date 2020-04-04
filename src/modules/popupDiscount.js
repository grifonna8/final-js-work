import popupOpen from "./popupOpen";
import popupClose from "./popupClose";

const popupDiscount = () => {
  const discountForm = document.querySelector('.popup-discount'),
        closeBtn = document.querySelectorAll('.popup-close')[1];
  let btns = [...document.querySelectorAll('.discount-btn')];

  btns.push(document.querySelectorAll('.construct-btn')[3]);
  btns.forEach((elem) => {
    elem.addEventListener('click', popupOpen(discountForm));
  });
  
  discountForm.addEventListener('click', popupClose(discountForm));
};

export default popupDiscount;