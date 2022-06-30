'use strict';

const  getBiggerDel =  (x, y) => {
	if (y > x) return getBiggerDel(y, x);
	if (!y) return x;
	return getBiggerDel(y, x % y);
}
const result = getBiggerDel(Number(prompt('Введите первое число')), Number(prompt('Введите второе число')));
console.log(result);