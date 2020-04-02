document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* вызов попапа звонка */
  const popUpCall = () => {
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

    const formOpen = (event) => {
      event.preventDefault();
      callForm.setAttribute('style', 'display: block');
    };

    for (let item of needCallBtn){
      item.addEventListener('click', formOpen);
    }

    closeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      callForm.setAttribute('style', 'display: none');
    });
  };
  popUpCall();

  /* аккордеон вопросов*/
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
  accordeonQuestions();

  /* вызов попапа check */
  const popupCheck = () => {
    const checkForm = document.querySelectorAll('.popup-check'),
          btn = document.querySelector('.gauging-button'),
          closeBtn = document.querySelectorAll('.popup-close')[2];

    const formOpen = (event) => {
      event.preventDefault();
      checkForm.setAttribute('style', 'display: block');
    };

    btn.addEventListener('click', formOpen);

    closeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      checkForm.setAttribute('style', 'display: none');
    });


  };
  popupCheck();

  /* кнопка больше, вызывающая доп ряд в Акции и спецпрепдложения */
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
  more();

  /* вызов попапа discount */
  const popupDiscount = () => {
    const btns = document.querySelectorAll('.discount-btn'),
          discountForm = document.querySelector('.popup-discount'),
          closeBtn = document.querySelectorAll('.popup-close')[1];

    const formOpen = (event) => {
      event.preventDefault();
      discountForm.setAttribute('style', 'display: block');
    };

    btns.forEach((elem) => {
      elem.addEventListener('click', formOpen);
    });
    

    closeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      discountForm.setAttribute('style', 'display: none');
    });

  };
  popupDiscount();

  /* аккордеон калькулятор */
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
  accordeonCalc();

  /* калькулятор */
  const calc = () => {
    const calcBlock = document.querySelector('#accordion'),
          septicType = document.querySelectorAll('.onoffswitch-checkbox'),
          titleHide = document.querySelectorAll('.title-text')[1],
          selectHide = [...document.querySelectorAll('.select-box')].slice(2, 4);
    let calcResult = document.querySelector('#calc-result');

    /* typeValue = calcType.options[calcType.selectedIndex].value; */
    const countSum = () => {
      let startPrice = 0;
      if (septicType[0].checked){
        startPrice = 10000;

      } else {
        startPrice = 15000;
      }
      console.log(startPrice);
      calcResult.placeholder = startPrice;
    };


    calcBlock.addEventListener('click', (event) => {
      const target = event.target;

      if (target.matches('.link-text') || target.matches('.construct-btn') ||
       target.matches('select') || target.matches('input')){
        countSum();
      }
    });



  };
  calc();
});