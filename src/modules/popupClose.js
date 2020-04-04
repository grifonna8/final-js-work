const popupClose = (elem) => event => {
  let formCheck = document.querySelectorAll('.popup'),
      buttonCheck = document.querySelectorAll('.popup-close');
  formCheck.forEach((prop) => {
    buttonCheck.forEach((prop2) => {
      if (event.target === prop || event.target === prop2){
        elem.setAttribute('style', 'display: none');
      }
    });
    
  });
  event.preventDefault();
  
};

export default popupClose;