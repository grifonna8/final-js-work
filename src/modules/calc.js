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

export default calc;