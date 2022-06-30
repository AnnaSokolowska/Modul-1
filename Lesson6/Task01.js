'use strict';

const getTableStep  = () => {
    for (let a = 1; a < 11; a++) {
        console.log('--------');
        for (let m = 1; m < 11; m++) {
            console.log(`${a} ** ${m} = ${a ** m}`);
        }
    }
}
const result = getTableStep();
