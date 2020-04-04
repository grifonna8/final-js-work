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
          body.userQuest = document.querySelector('[name=user_quest]').value;
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

export default sendForm;