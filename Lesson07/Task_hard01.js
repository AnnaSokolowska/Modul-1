'use strict';

const allСashbox = [
    [12, 4500],  
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];
const getAveragePriceGoods = (arr) => {
    let amount = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    const [ x,y ] = arr[i];
    sum += y;
    amount += x;
    }
    const averageValue = Math.floor(sum / amount);
    return averageValue;
}

const result = getAveragePriceGoods(allСashbox);
console.log(result);