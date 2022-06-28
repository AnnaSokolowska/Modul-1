'use srtict';
{
    const productName = 'Картофель';
    const productAmount = 5;
    const productCategory = 'Овощи';
    const productPrice = 20;

    const productSum = productAmount * productPrice;

    console.log(productName);
    console.log(productSum);

}

{
    const productName = 'Носки';
    const productAmount = 10;
    const productCategory = 'Чулочно-носочные изделия';
    const productPrice = 23;

    const productSum = productAmount * productPrice;

    console.log(productName);
    console.log(productSum);
}

{
    const productName = prompt('Введите наименование товара');
    const productCategory = prompt('Введите категорию товара');
    const productAmount = Number(prompt('Введите количество товара'));
    const productPrice = Number(prompt('Введите цену товара'));

    if (isNaN(productAmount) || isNaN(productPrice)) {
        console.log('Вы ввели некорректные данные');
        } else
    console.log(`На складе ${productAmount} единицы товара "${productName}" на сумму  ${productAmount * productPrice} рубля`);

}
