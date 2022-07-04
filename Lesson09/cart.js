const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return Number(this.totalPrice);
  },
  add() {
    while (true) {
      const productName = prompt("Введите наименование товара");
      const productAmount = Number(prompt("Введите количество товара"));
      const productPrice = Number(prompt("Введите цену товара"));
      const product = {
        name: productName,
        amount: productAmount,
        price: productPrice,
      };
      this.items.push(product);
      this.calculateItemPrice();
      this.increaseCount();
      let a = confirm("Хотите еще внести товар в корзину?");
      if (a === false) {
        break;
      }
    }
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
    this.totalPrice = sum;
    return this.totalPrice;
  },
  clear() {
this.items = [];
this.count = 0;
this.totalPrice = 0;
  },

  print() {
    const itemsStr = JSON.stringify(this.items);
    return `${itemsStr} \n Общая стоимость корзины: ${this.getTotalPrice()}`;
  },
};
const result = cart.add();
console.log(result);
console.log(cart.print());
const clear = cart.clear();
console.log(cart);