import popupOpen from "./popupOpen";
import popupClose from "./popupClose";

const popupCall = () => {
  const callForm = document.querySelector('.popup-call'),
        allCallBtn = document.querySelectorAll('.call-btn'),
        needCallBtn = [],
        closeBtn = document.querySelectorAll('.popup-close')[0];

  for (let i = 0; i < allCallBtn.length; i++){
    if (i === 1){
      continue;
    }
    needCallBtn.push(allCallBtn[i]);
  }

  for (let item of needCallBtn){
    item.addEventListener('click', popupOpen(callForm));
  }

  closeBtn.addEventListener('click', popupClose(callForm));
  callForm.addEventListener('click', popupClose(callForm));
};

export default popupCall;