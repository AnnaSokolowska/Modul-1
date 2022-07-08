'use strict';
const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,

  add(productName, productAmount, productPrice, promocode) {
    const product = {
      name: productName,
      amount: productAmount,
      price: productPrice,
    };
    this.items.push(product);
    this.increaseCount();
    this.setDiscount(promocode);
    return this.items;
  },
  increaseCount() {
    this.count = Number(this.count) + 1;
  },
  calculateItemPrice() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      const productSum = this.items[i].price * this.items[i].amount;
      sum += productSum;
    }
    const allSum = sum - (sum * this.discount) / 100;
    return allSum;
  },
  // eslint-disable-next-line no-dupe-keys
  get totalPrice() {
    return `${this.calculateItemPrice()}`;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.totalPrice = 0;
    this.discount = 0;
  },

  print() {
    const itemsStr = JSON.stringify(this.items);
    return `${itemsStr} \n Общая стоимость корзины: ${this.totalPrice}`;
  },
  setDiscount(promocode) {
    if (promocode === 'METHED') {
      return this.discount = 15;
    } if (promocode === 'NEWYEAR') {
      return this.discount = 21;
    }
  },
};

cart.add('sfsdf', 2, 4, 'METHED');
cart.add('sds', 3, 4);

console.log(cart.print());
console.log(cart);
console.log(cart);
