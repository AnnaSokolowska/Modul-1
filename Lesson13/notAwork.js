'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const game = () => {
    const result = {
      player: 0,
      computer: 0,
      increasePlayer() {
        this.player = Number(this.player) + 1;
      },
      increaseComputer() {
        this.computer = Number(this.computer) + 1;
      },
    };
    return function start() {
      const playerWorld = prompt('Введите камень, ножницы или бумага');
      if (!(playerWorld === null)) {
        const compChoice = getRandomIntInclusive(0, 2);
        const playerChoice = FIGURES_RUS.indexOf(playerWorld);
        if (
          (playerChoice === 0 && compChoice === 1) ||
          (playerChoice === 1 && compChoice === 2) ||
          (playerChoice === 2 && compChoice === 0)
        ) {
          result.increasePlayer();
          console.log('Вы выиграли');
        } else if (
          (compChoice === 0 && playerChoice === 1) ||
          (compChoice === 1 && playerChoice === 2) ||
          (compChoice === 2 && playerChoice === 0)
        ) {
          result.increaseComputer();
          console.log('Выиграл компьютер');
        } else if (
          (compChoice === 0 && playerChoice === 0) ||
          (compChoice === 1 && playerChoice === 1) ||
          (compChoice === 2 && playerChoice === 2)
        ) {
          alert('Ничья');
        }
        console.log(result);
        console.log(compChoice);
        console.log(playerChoice);
        let results = 'Счет равен';
        if (result.player > result.computer) {
          results = 'Вы выиграли';
        } else if (result.player < result.computer) {
          results = 'Выиграл компьютер';
        }
        console.log(`Игрок: ${result.player} \nКомпьютер: ${result.computer}
             \n ${results}`);
        start();
      } else {
        const b = confirm('Вы уверены, что хотите закончить игру?'); 
        if (b === true) {
          console.log(result);
        } else start();
      }
    };
  };
  window.roScPaper = game();
})();


