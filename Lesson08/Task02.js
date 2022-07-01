"use strict";

const getRandomMassive = (a, n, m) => {
  const newArr = [];
  let max, min;
  if (n > m) {
     max = n;
    min = m;
  }  else 
  max = m , min = n;
  for (let i = 0; i < a; i++) {
    newArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return newArr;
};
const result = getRandomMassive(
  Number(prompt("Введите количетсво элементов в массиве")),
  Number(prompt("Введите начало диапазона")),
  Number(prompt("Введите конец диапазона"))
);
console.log(result);
