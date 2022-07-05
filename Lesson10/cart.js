const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  add(productName, productAmount, productPrice) {
    const product = {
      name: productName,
      amount: productAmount,
      price: productPrice,
    };
    this.items.push(product);
    this.increaseCount();
    return this.items;
  },
  increaseCount() {
    this.count = Number(this.count) + 1;
  },
  calculateItemPrice() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      let productSum = this.items[i].price * this.items[i].amount;
      sum = sum + productSum;
    }
    return sum;
  },
  get totalPrice() {
    return `${this.calculateItemPrice()}`;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.totalPrice = 0;
  },

  print() {
    const itemsStr = JSON.stringify(this.items);
    return `${itemsStr} \n Общая стоимость корзины: ${this.totalPrice}`;
  },
};
const result = cart.add(
  prompt("Введите наименование товара"),
  Number(prompt("Введите количество товара")),
  Number(prompt("Введите цену товара"))
);
const result1 = cart.add(
  prompt("Введите наименование товара"),
  Number(prompt("Введите количество товара")),
  Number(prompt("Введите цену товара"))
);


console.log(result);

console.log(cart.print());
console.log(cart);
const clear = cart.clear();
console.log(cart);



