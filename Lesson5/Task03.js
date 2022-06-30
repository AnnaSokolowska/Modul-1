const getFrazeReverse = (fraze) => {
    let changedFraze = fraze.split('').reverse().join('');
    return changedFraze;
}
const newFraze = getFrazeReverse(prompt('Введите фразу'));
console.log(newFraze);