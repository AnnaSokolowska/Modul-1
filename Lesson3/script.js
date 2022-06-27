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
    const productAmount = prompt('Введите количество товара');
    const productPrice = prompt('Введите цену товара');

    console.log(`ProductName:  ${typeof productName}`);
    console.log(`ProductCategory:  ${typeof productCategory}`);
    console.log(`ProductAmount:  ${typeof productAmount}`);
    console.log(`ProductPrice:  ${typeof productPrice}`);


    console.log(`На складе ${Number(productAmount)} единицы товара "${productName}" на сумму  ${(Number(productAmount)) * Number(productPrice)} рубля`);


}
