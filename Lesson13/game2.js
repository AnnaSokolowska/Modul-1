'use strict';
(() => {
  const FIGURES_RUS = ['к', 'н', 'б'];
  const FIGURE_ENG = ['r', 's', 'p'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const game = (languague) => {
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
    languague = prompt('Введите ENG если хотите играть на английском');
    const lang = languague;
    if (lang === 'EN' || lang === 'ENG') {
      return function start1() {
        let word;
        const getcompChoice = () => {
          const randomNumber = getRandomIntInclusive(0, 2);
          if (randomNumber === 0) {
            word = 'rock';
          }
          if (randomNumber === 1) {
            word = 'scissors';
          }
          if (randomNumber === 2) {
            word = 'paper';
          } return randomNumber;
        };

        const playerWorld = prompt('Please write: rock, scissors or paper');
        if (!(playerWorld === null)) {
          const firstLetter = playerWorld[0];
          console.log(firstLetter);
          const playerChoice = FIGURE_ENG.indexOf(firstLetter);
          if (playerChoice === -1) {
            alert('Something goes wrong');
          }
          const compChoice = getcompChoice();
          let playerWord;
          if (playerChoice === 0) {
            playerWord = 'rock';
          } else if (playerChoice === 1) {
            playerWord = 'scissors';
          } else if (playerChoice === 2) {
            playerWord = 'paper';
          }
          if (
            (playerChoice === 0 && compChoice === 1) ||
            (playerChoice === 1 && compChoice === 2) ||
            (playerChoice === 2 && compChoice === 0)
          ) {
            result.increasePlayer();
            alert(`Player: ${playerWord} \nComputer: ${word} \nYou won`);
          } else if (
            (compChoice === 0 && playerChoice === 1) ||
            (compChoice === 1 && playerChoice === 2) ||
            (compChoice === 2 && playerChoice === 0)
          ) {
            result.increaseComputer();
            alert(`Player: ${playerWord} \nComputer: ${word} 
            \nComputer won`);
          } else if (
            (compChoice === 0 && playerChoice === 0) ||
            (compChoice === 1 && playerChoice === 1) ||
            (compChoice === 2 && playerChoice === 2)
          ) {
            alert(`Player: ${playerWord} \nComputer: ${word} \nDraw`);
          }
          let results = 'Equal score';
          if (result.player > result.computer) {
            results = 'You won';
          } else if (result.player < result.computer) {
            results = 'Computer won';
          }
          console.log(`Player: ${result.player} \nComputer: ${result.computer}
               \n ${results}`);
          start1();
        } else {
          const b = confirm('Are you sure?');
          if (b === true) {
            alert(`Player: ${result.player} \nComputer: ${result.computer}`);
          } else start1();
        }
      };
    }
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
  window.roScPaper = game;
})();
