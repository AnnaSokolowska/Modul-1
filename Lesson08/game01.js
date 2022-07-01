'use strict';


const findNumber = (a) => {

const  b = Math.floor(Math.random() * (100))+1; 

while(true) {
    if ( a === null) {
        break;
    } 
    a = parseInt(a);
    if (isNaN(a)) {
    a =  prompt('Введите число');
    } 
    if (a > b) {
    a = prompt('Меньше. Введите число');   
    } 
    if (a < b) {
        a = prompt('Больше. Введите число');  
    } 
    if (a === b ){
        alert('Правильно!')
        break;
    } 
}
}; 

const result = findNumber(prompt('Введите число от 01 до 100'));