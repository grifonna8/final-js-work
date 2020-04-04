document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  /* вызов попапов */
  const popupOpen = (elem) => event => {
    if (elem === document.querySelector('.popup-call') || 
    elem === document.querySelector('.popup-consultation')){
      event.preventDefault();
    }
    elem.setAttribute('style', 'display: block');
  };

  /* закрытие попапов */
  const popupClose = (elem) => event => {
    event.preventDefault();
    elem.setAttribute('style', 'display: none');
  };
  /* попап звонка */
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

    for (let item of needCallBtn){
      item.addEventListener('click', popupOpen(callForm));
    }

    closeBtn.addEventListener('click', popupClose(callForm));
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

  /* попап check */
  const popupCheck = () => {
    const checkForm = document.querySelector('.popup-check'),
          btn = document.querySelector('.gauging-button'),
          closeBtn = document.querySelectorAll('.popup-close')[2];

    btn.addEventListener('click', popupOpen(checkForm));

    closeBtn.addEventListener('click', popupClose(checkForm));

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

  /* попап discount */
  const popupDiscount = () => {
    const discountForm = document.querySelector('.popup-discount'),
          closeBtn = document.querySelectorAll('.popup-close')[1];
    let btns = [...document.querySelectorAll('.discount-btn')];

    btns.push(document.querySelectorAll('.construct-btn')[3]);
    btns.forEach((elem) => {
      elem.addEventListener('click', popupOpen(discountForm));
    });
    
    closeBtn.addEventListener('click', popupClose(discountForm));

  };
  popupDiscount();

  /* попап consultation */
  const popupConsult = () => {
    const consultForm = document.querySelector('.popup-consultation'),
          closeBtn = document.querySelectorAll('.popup-close')[3];
    let btn = document.querySelector('.consultation-btn');

    btn.addEventListener('click', popupOpen(consultForm));
    
    closeBtn.addEventListener('click', popupClose(consultForm));

  };
  popupConsult();

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
          septicType = document.querySelectorAll('.onoffswitch-checkbox');
    let calcResult = document.querySelector('#calc-result'),
    selectFormControl = [...document.querySelectorAll('.form-control')];

    const countSum = () => {
      let startPrice = 0,
          firstWellSelect,
          secondWellSelect,
          wellChangePrice = 0,
          addFloor = 0;
      if (septicType[0].checked){
        startPrice = 10000;
        selectFormControl = selectFormControl.slice(0, 2);
        firstWellSelect = selectFormControl.map((elem) => {
          return elem.options[elem.selectedIndex].value;
        });
        firstWellSelect.forEach((elem) => {
          wellChangePrice = wellChangePrice + startPrice / 100 * elem;
        });
        if (septicType[1].checked){
          addFloor = 1000;
        }
        
      } else {
        startPrice = 15000;
        selectFormControl = [...document.querySelectorAll('.form-control')];
        secondWellSelect = selectFormControl.map((elem) => {
          return elem.options[elem.selectedIndex].value;
        });
        secondWellSelect.forEach((elem) => {
          wellChangePrice = wellChangePrice + startPrice / 100 * elem;
        });
        if (septicType[1].checked){
          addFloor = 2000;
        }
      }
      calcResult.placeholder = startPrice + wellChangePrice + addFloor;
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

  /* валидация форм */
  const formValidation = () => {
    const forms = [...document.querySelectorAll('form')],
    telArr = [...document.querySelectorAll('.phone-user')],
    nameArr = [...document.querySelectorAll('[name=user_name]')];
    let errorName = true, 
        errorTel = true; 

    const deleteErrorTel = (tel) => {
      errorTel = true;
      let normalChild = tel;
      let parent =  normalChild.parentNode;
      let errorTelMessage = [...document.querySelectorAll('.errorTel')];
      for (let j = 0; j < errorTelMessage.length; j++){
        if (parent.contains(errorTelMessage[j])){
          parent.removeChild(errorTelMessage[j]);
          return errorTel;
        }
      }
    };

    const deleteErrorName = (name) => {
      errorName = true;
      let normalChild = name;
      let parent =  normalChild.parentNode;
      let errorNameMessage = [...document.querySelectorAll('.errorName')];
      for (let j = 0; j < errorNameMessage.length; j++){
        if (parent.contains(errorNameMessage[j])){
          parent.removeChild(errorNameMessage[j]);
          return errorName;
        }
      }
    };

    const createNameError = (name) => {
      forms.forEach((form) => {
        if (form.contains(name)){
          if (errorName === true){
            let errorNameVal = document.createElement('div');
            errorNameVal.classList = 'errorName';
            errorNameVal.innerText = 'Только кириллица';
            errorNameVal.style.cssText = `color: red; font-size: 12px; margin-top: -5px;
            z-index: 2; position: relative`;
            name.after(errorNameVal);
            errorName = 0;
            return errorName;
          } else if (errorName === 0){
            deleteErrorTel(name);
          }
        }
      });
    };

    const createTelError = (tel) => {
      forms.forEach((form) => {
        if (form.contains(tel)){
          if (errorTel === true){
            let errorTelVal = document.createElement('div');
            errorTelVal.classList = 'errorTel';
            errorTelVal.innerText = 'Введите телефон, используя + и цифры';
            errorTelVal.style.cssText = `color: red; font-size: 12px; margin-top: -5px;
            z-index: 2; position: relative`;
            tel.after(errorTelVal);
            errorTel = 0;
            return errorTel;
          } else if (errorTel === 0){
            deleteErrorTel(tel);
          }
        }
      });
    };

    for (let i = 0; i < telArr.length; i++){
      telArr[i].addEventListener('input', () => {
        if (!telArr[i].value.match(/^[\+\]?[0-9]+$/g)){
          if (errorTel === true){
            createTelError(telArr[i]);
          } 
        } else {
          if (errorTel === 0){
          createTelError(telArr[i]);
          }
        }
        if (telArr[i].value === ''){
          deleteErrorTel(telArr[i]);
        }
      });
    }
    for (let i = 0; i < nameArr.length; i++){
      nameArr[i].addEventListener('input', () => {
        if (!nameArr[i].value.match(/[ ]*[А-Яа-яЁё]+$/g)){
          if (errorName === true){
            createNameError(nameArr[i]);
          } 
        } else {
          if (errorName === 0){
          createNameError(nameArr[i]);
          }
        }
        if (nameArr[i].value === ''){
          deleteErrorName(nameArr[i]);
        }
      });
    }


  };
  formValidation();

  /* AJAX отправка */
  const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка',
        successMessage = 'Спасибо, мы скоро с вами свяжемся',
        septicType = document.querySelectorAll('.onoffswitch-checkbox'),
        selectFormControl = [...document.querySelectorAll('.form-control')];

    const forms = [...document.querySelectorAll('form')];
    
    for (let item of forms){
      const statusMessage = document.createElement('div');
      statusMessage.textContent = 'Тут ваше сообщение';
      statusMessage.style.cssText = 'font-size: 14px; color: black';

      item.addEventListener('submit', (event) => {
        event.preventDefault();
        item.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(item);
        let body = {};

        for(let val of formData.entries()){
          body[val[0]] = val[1];
          if(document.querySelector('.popup-consultation').contains(item)){
            body.user_quest = document.querySelector('[name=user_quest]').value;
          }
          if(document.querySelector('.popup-discount').contains(item) & document.querySelector('#distance').value !== ''){
            if (septicType[0].checked){
              body.septic = 1;
              selectFormControl.slice(0, 2).map((elem, i) => {
                body[`${i}`] = elem.options[elem.selectedIndex].innerText;
              });
            } else {
              body.septic = 2;
              selectFormControl.map((elem, i) => {
                body[`${i}`] = elem.options[elem.selectedIndex].innerText;
              });
            }
            
            if (septicType[1].checked){
              body.floor = 'yes';
            } else {
              body.floor = 'no';
            }
            body.distance = document.querySelector('#distance').value;
          }
        }
        postData(body)
            .then ((response) => {
              if (response.status !== 200){
                throw new Error ('not 200');
              }
              statusMessage.textContent = successMessage;
              const messageHide = setTimeout(function(){
                statusMessage.textContent = '';
              },6000);            
              let itemInputsArr = [...item.querySelectorAll('input')];
              for (let elem of itemInputsArr){
                elem.value = '';
              }
              if(document.querySelector('#distance').value !== ''){
                document.querySelector('#distance').value = '';  
              }
            }) 
            .catch ((error) => {
              statusMessage.textContent = errorMessage;
            });
      });

      const postData = (body) => {
        return fetch ('../server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
      };

    }
  };
  sendForm();
});