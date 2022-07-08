'use strict';
const rectangle = {

  set widths(val) {
    if (typeof val === 'number') {
      this.width = val;
    }
  },
  width: 5,

  set heights(val) {
    if (typeof val === 'number') {
      this.height = val;
    }
  },
  height: 5,
  get squares() {
    const square = this.width * this.height;
    return `${square} см`;
  },
  get perimetrs() {
    const perimetr = (this.width + this.height) * 2;
    return `${perimetr} см`;
  },
};
rectangle.widths = 6;
rectangle.heights = 9;

console.log(rectangle);
