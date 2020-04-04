'use strict';

import accordeonCalc from "./modules/accordeonCalc";
import accordeonQuestions from "./modules/accordeonQuestions";
import calc from "./modules/calc";
import formValidation from "./modules/formValidation";
import more from "./modules/more";
import popupCall from "./modules/popupCall";
import popupCheck from "./modules/popupCheck";
import popupConsult from "./modules/popupConsult";
import popupDiscount from "./modules/popupDiscount";
import sendForm from "./modules/sendForm";

/* попап звонка */
popupCall();

/* аккордеон вопросов*/
accordeonQuestions();

/* попап check */
popupCheck();

/* кнопка больше, вызывающая доп ряд в Акции и спецпрепдложения */
more();

/* попап discount */
popupDiscount();

/* попап consultation */
popupConsult();

/* аккордеон калькулятор */
accordeonCalc();

/* калькулятор */
calc();

/* валидация форм */
formValidation();

/* AJAX отправка */
sendForm();