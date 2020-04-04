 const accordeonCalc = () => {
  const tabWrapper = document.querySelector('#accordion'),
        septicType = document.querySelectorAll('.onoffswitch-checkbox'),
        titleHide = document.querySelectorAll('.title-text')[1],
        selectHide = [...document.querySelectorAll('.select-box')].slice(2, 4);
  let tabHeading = document.querySelectorAll('.panel-heading'),
      tabBody = document.querySelectorAll('.panel-collapse '),
      calcBtn = document.querySelectorAll('.construct-btn');

  tabHeading = [...tabHeading].slice(0,4);
  tabBody = [...tabBody].slice(0,4);
  
  const tabChange = (event, index) => {
    event.preventDefault();
    for (let i = 0; i < tabBody.length; i++){
      if (index === i){
        tabBody[i].setAttribute('style', 'display: block');
        if (index === 1 && septicType[0].checked) {
          titleHide.style.display = 'none';
          selectHide.forEach((elem) => {
            elem.style.display = 'none';
          });
        } else {
          titleHide.style.display = 'initial';
          selectHide.forEach((elem) => {
            elem.style.display = 'initial';
          });
        }
      } else {
        tabBody[i].setAttribute('style', 'display: none');
      }
    }
  };

  const tabButtonChange = (event, index) => {
    event.preventDefault();
    for (let i = 1; i < tabBody.length; i++) {
      if (index + 1 === i ){
        tabBody[i].setAttribute('style', 'display: block');
        if (i === 1 && septicType[0].checked) {
          titleHide.style.display = 'none';
          selectHide.forEach((elem) => {
            elem.style.display = 'none';
          });
        } else {
          titleHide.style.display = 'initial';
          selectHide.forEach((elem) => {
            elem.style.display = 'initial';
          });
        }
        tabBody[i-1].setAttribute('style', 'display: none');
      }
    }
  };

  tabWrapper.addEventListener('click', (event) => {
    let target = event.target,
        targetBtn = target.closest('.construct-btn');
    if (targetBtn){
      calcBtn.forEach((elem, i) => {
        if (targetBtn === elem) {
          tabButtonChange(event, i);
        }
    });
    }
    
    target = target.closest('.panel-heading');
    if (target){
      tabHeading.forEach((elem, i) => {
        if (target === elem){
          tabChange(event, i);
        }
      });
    }
  }); 

};

export default accordeonCalc;