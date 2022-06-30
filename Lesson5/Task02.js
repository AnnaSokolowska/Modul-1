'use strict';

const getFirstUpperLetter = (fraze) => {

    let changedFraze = fraze.charAt(0).toUpperCase() + fraze.slice(1).toLowerCase();

    return changedFraze;
};
const newFraze = getFirstUpperLetter(prompt('Введите строку'));

console.log(newFraze);