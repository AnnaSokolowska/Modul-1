"use strict";

const getMassive = (m, n) => {
  const newArr = [];
  let max, min;
  if (n > m) {
    max = n;
    min = m;
  } else (max = m), (min = n);

  for (let i = min; i <= max; i++) {
    if (i) newArr.push(i);
  }

  return newArr;
};
const yearMassive = getMassive(
  Number(prompt("Введите начало диапазона")),
  Number(prompt("Введите конец диапазона"))
);
const leapYearMassive = yearMassive.filter(
  (item) =>
    (!(item % 4) && item % 100) ||
    (!(item % 4) && !(item % 100) && !(item % 400))
);
console.log(leapYearMassive);
