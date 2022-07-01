"use strict";

const getRandomMassive = (a, n, m, promo) => {
  const newArr = [];
  let max, min;
  if (n > m) {
    max = n;
    min = m;
  }  else 
  max = m , min = n;

  
  for (let i = 0; i < a; i++) {
    let item = Math.floor(Math.random() * (max - min + 1)) + min;
   
    if (promo === 'even') {
        newArr.push(item + (item % 2));
    } else if (promo === 'odd') {
      
       newArr.push(item + (item % 2 + 1));
    } else 
    newArr.push(item);
    
  }
  return newArr;
};
const result = getRandomMassive(
  Number(prompt("Введите количетсво элементов в массиве")),
  Number(prompt("Введите начало диапазона")),
  Number(prompt("Введите конец диапазона")),
  prompt('Введите промокод')
);
console.log(result);
