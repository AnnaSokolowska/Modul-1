'use strict';

const getRubSum = (money) => {
    let moneyResult = money;

    moneyResult *= 1.2;
    moneyResult *= 73;
    return moneyResult;

};

const rubSum = getRubSum(Number(prompt('Введите сумму покупки в евро')));
console.log(`Ваша сумма покупки ${rubSum} рублей`);