const popupClose = (elem) => event => {
  event.preventDefault();
  elem.setAttribute('style', 'display: none');
};

export default popupClose;