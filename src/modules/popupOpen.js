const popupOpen = (elem) => event => {
  if (elem === document.querySelector('.popup-call') || 
  elem === document.querySelector('.popup-consultation')){
    event.preventDefault();
  }
  elem.setAttribute('style', 'display: block');
};

export default popupOpen;