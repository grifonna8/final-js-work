const more = () => {
  const btn = document.querySelector('.add-sentence-btn'),
        hiddenBlocks = document.querySelectorAll('.hidden'),
        anotherHiddenBlock = document.querySelector('.visible-sm-block');

  btn.addEventListener('click', () => {
    btn.setAttribute('style', 'display: none');
    anotherHiddenBlock.setAttribute('style', 'display: block !important');
    hiddenBlocks.forEach((elem) => {
      elem.setAttribute('style', 'display: block !important');
    });
  });
};

export default more;