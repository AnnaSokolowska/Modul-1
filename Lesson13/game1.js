'use strict';
(() => {
  const FIGURES_RUS = ['к', 'н', 'б'];

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
      let word;
      const getcompChoice = () => {
        const randomNumber = getRandomIntInclusive(0, 2);
        if (randomNumber === 0) {
          word = 'камень';
        }
        if (randomNumber === 1) {
          word = 'ножницы';
        }
        if (randomNumber === 2) {
          word = 'бумага';
        } return randomNumber;
      };

      const playerWorld = prompt('Введите камень, ножницы или бумага');

      if (!(playerWorld === null)) {
        const firstLetter = playerWorld[0];
        console.log(firstLetter);
        const playerChoice = FIGURES_RUS.indexOf(firstLetter);
        if (playerChoice === -1) {
          alert('Вы ввели неверное значение');
        }
        const compChoice = getcompChoice();
        let playerWord;
        if (playerChoice === 0) {
          playerWord = 'камень';
        } else if (playerChoice === 1) {
          playerWord = 'ножницы';
        } else if (playerChoice === 2) {
          playerWord = 'бумага';
        }
        if (
          (playerChoice === 0 && compChoice === 1) ||
          (playerChoice === 1 && compChoice === 2) ||
          (playerChoice === 2 && compChoice === 0)
        ) {
          result.increasePlayer();
          alert(`Игрок: ${playerWord} \nКомпьютер: ${word} \nВы выиграли`);
        } else if (
          (compChoice === 0 && playerChoice === 1) ||
          (compChoice === 1 && playerChoice === 2) ||
          (compChoice === 2 && playerChoice === 0)
        ) {
          result.increaseComputer();
          alert(`Игрок: ${playerWord} \nКомпьютер: ${word} 
          \nВыиграл компьютер`);
        } else if (
          (compChoice === 0 && playerChoice === 0) ||
          (compChoice === 1 && playerChoice === 1) ||
          (compChoice === 2 && playerChoice === 2)
        ) {
          alert(`Игрок: ${playerWord} \nКомпьютер: ${word} \nНичья`);
        }
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
          alert(`Игрок: ${result.player} \nКомпьютер: ${result.computer}`);
        } else start();
      }
    };
  };
  window.roScPaper = game();
})();
