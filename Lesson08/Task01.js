'use strict';

const getRandomMassive = (a) => {
    const newArr = [];
    for (let i = 0; i < a ; i++) {
    newArr.push(Math.floor(Math.random() * (100))+1);
} return newArr
};
const result = getRandomMassive(Number(prompt('Введите количетсво элементов в массиве')));
console.log(result);

