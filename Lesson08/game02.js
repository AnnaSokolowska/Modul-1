"use strict";

const getGuessNumber = (m, n) => {
  const newArr = [];
  let max, min;
  if (n > m) {
    max = n;
    min = m;
  } else (max = m), (min = n);

  const b = Math.floor(Math.random() * (max - min + 1) + min);
  let a = prompt(`Введите число от ${min} до ${max}`);
  while (true) {
    newArr.push(a);
    console.log(newArr);
    if (newArr.length === Math.floor(0.3 * (max - min + 1))) {
      alert("Количество попыток закончилось");
      break;
    }
    if (a === null) {
      break;
    }
    a = parseInt(a);
    if (isNaN(a)) {
      a = prompt("Введите число");
    }

    if (a > b) {
      a = prompt("Меньше. Введите число");
    }
    if (a < b) {
      a = prompt("Больше. Введите число");
    }
    if (newArr.includes(a)) {
      a = prompt("Вы вводили уже это число. Введите еще раз");
      continue;
    }
    if (a === b) {
      alert("Правильно!");
      break;
    }
  }
};

const yearMassive = getGuessNumber(
  Number(prompt("Введите первое число")),
  Number(prompt("Введите второе число"))
);
