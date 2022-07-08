'use strict';
const b = Math.floor(Math.random() * 100) + 1;
const findNumber = (a) => {
  a = parseInt(a);
  if (isNaN(a)) {
    a = prompt('Введите число');
  }
  if (a > b) {
    a = prompt('Меньше. Введите число');
  }
  if (a < b) {
    a = prompt('Больше. Введите число');
  }
  if (a === b) {
    return alert('Правильно!');
  } else {
    findNumber(a);
  }
};

findNumber(prompt('Введите число от 01 до 100'));
