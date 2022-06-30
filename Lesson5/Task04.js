'use strict';

const calculate = (allSum, productAmount, promokod) => {
  let sum1 = allSum;
  if (productAmount > 10) {
    sum1 = sum1 - sum1 * 0.03;
  }

  if (sum1 > 30000) {
    sum1 = sum1 - (sum1 - 30000) * 0.15;
  }

  if (promokod === "METHED") {
    sum1 = sum1 - sum1 * 0.1;
  } else if (promokod === "G3H2Z1" && sum1 > 2000) {
    sum1 -= 500;
  }
  return sum1;
};
const result = calculate(2500, 11, "G3H2Z1");
console.log(result);
