const accordeonQuestions = () => {
  const tabWrapper = document.querySelector('#accordion-two');
  let   tabHeading = document.querySelectorAll('.panel-heading'),
        tabBody = document.querySelectorAll('.panel-collapse ');

  tabHeading = [...tabHeading].slice(4);
  tabBody = [...tabBody].slice(4);

  const tabChange = (item) => {
    for (let i = 0; i < tabBody.length; i++){
      if (item === i){
        tabBody[i].setAttribute('style', 'display: block');
      } else {
        tabBody[i].setAttribute('style', 'display: none');
      }
    }
  };

  tabWrapper.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest('.panel-heading');
    if (target){
      tabHeading.forEach((elem, i) => {
        if (target === elem){
          tabChange(i);
        }
      });
    }
  }); 
};

export default accordeonQuestions;