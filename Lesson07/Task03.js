'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const addPrefix = (arr, a ) => {
    const prefixNames = [];
    for (let i = 0; i < arr.length; i++) {
    prefixNames.push(a + ' ' + arr[i]);
    }
    return prefixNames;
}
const result = addPrefix(names, 'Mr');
console.log(result);
