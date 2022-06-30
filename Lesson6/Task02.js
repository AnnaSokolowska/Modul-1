'use strict';

const isPrime = (m) => {
    let answer = true;
    for (let a = 2;  a < m; a++) {
  if (m % a === 0) {
    answer = false;
    break;
  }
} 
return console.log(answer);
}
const result = isPrime(Number(prompt('Введите число')));

