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

export default formValidation;