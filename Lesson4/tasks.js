'use strict';
{
    const rain = Math.round(Math.random());

    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else if (rain === 0) {
        console.log('Дождя нет!');
    }

}

{
    const testMath = prompt('Введите количество баллов по математике');
    const testRus = prompt('Введите количество баллов по русскому языку');
    const testInfo = prompt('Введите количество баллов по информатике');

    const testSum = Number(testMath) + Number(testRus) + Number(testInfo);
    if (testSum >= 265) {
        console.log('Поздравляю, вы поступили на бюджет!');
    } else
        console.log('Вы не поступили. Ждем вас в следующем году');
}

{
    const money = prompt('Введите сумму снятия наличных');
    const moneySum = Number.isInteger(money / 100);
    if (moneySum) {
        console.log('Вы можете снять указанную сумму');
    } else
        console.log('Мы не можем выдать вам такую сумму. Введите сумму кратную 100');
}
