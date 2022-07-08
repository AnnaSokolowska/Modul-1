'use strict';
const getSumMassive = (mass) => {
  const b = Math.floor(Math.random() * 10) + 1;
  mass.push(b);
  let sum = 0;
  for (let i = 0; i < mass.length; i++) {
    sum += mass[i];
  }
  if (sum > 50) {
    return mass;
  } else {
    getSumMassive(mass);
  }
};
const mass = [];
getSumMassive(mass);
console.log(mass);
