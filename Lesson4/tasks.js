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
    const testMath = Number(prompt('Введите количество баллов по математике'));
    const testRus = Number(prompt('Введите количество баллов по русскому языку'));
    const testInfo = Number(prompt('Введите количество баллов по информатике'));
    const testSum = testMath + testRus + testInfo;
    
    if (isNaN(testMath) || isNaN(testRus) || isNaN(testInfo)) {
        console.log('Вы ввели некорретное число');
    } else if (testSum >= 265) {
        console.log('Поздравляю, вы поступили на бюджет!');
    } else
        console.log('Вы не поступили. Ждем вас в следующем году');
}

{
    const money = Number(prompt('Введите сумму снятия наличных'));
     
    if (isNaN(money)) {
        console.log('Вы ввели некорретное число');
    } else  if ((money % 100) === 0 && money > 0) {
        console.log('Вы можете снять указанную сумму');
    } else
        console.log('Мы не можем выдать вам такую сумму. Введите сумму кратную 100');
}
