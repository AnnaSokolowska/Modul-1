'use srtict';
const productName = 'Картофель';
const productAmount = 5;
const productCategory = 'Овощи';
const productPrice = 20;

const productSum = productAmount * productPrice;

console.log(productName);
console.log(productSum);

const productName2 = 'Носки';
const productAmount2 = 10;
const productCategory2 = 'Чулочно-носочные изделия';
const productPrice2 = 23;

const productSum2 = productAmount2 * productPrice2;

console.log(productName2);
console.log(productSum2);

const newProductName = prompt('Введите наименование товара');
const newProductCategory = prompt('Введите категорию товара');
const newProductAmount = prompt('Введите количество товара');
const newProductPrice = prompt('Введите цену товара');

console.log(`ProductName:  ${typeof newProductName}`);
console.log(`ProductCategory:  ${typeof newProductCategory}`);
console.log(`ProductAmount:  ${typeof newProductAmount}`);
console.log(`ProductPrice:  ${typeof newProductPrice}`);

console.log(`На складе ${Number(newProductAmount)} единицы товара "${newProductName}" на сумму  ${(Number(newProductAmount)) * Number(newProductPrice)} рубля`);
