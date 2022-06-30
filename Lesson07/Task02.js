'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let sum = 0;
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        amount++;
    }
 const averageValue = sum / amount;
 return averageValue;
}

const result = getAverageValue(allCashbox);
console.log(result);