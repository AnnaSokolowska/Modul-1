'use strict';
(() => {
  const FIGURES_RUS = ['к', 'н', 'б'];
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const game = () => {
    const resulty = {
      player: 0,
      computer: 0,
      increasePlayer() {
        this.player = Number(this.player) + 1;
      },
      increaseComputer() {
        this.computer = Number(this.computer) + 1;
      },
    };
    const result = {
      player: 5,
      computer: 5,
      increasePlayer(p) {
        this.player = Number(this.player) + p;
      },
      decreasePlayer(p) {
        this.player = Number(this.player) - p;
      },
      increaseComputer(p) {
        this.computer = Number(this.computer) + p;
      },
      decreaseComputer(p) {
        this.computer = Number(this.computer) - p;
      },
    };
    const rock = () => {
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
        }
        return randomNumber;
      };
      const playerWorld = prompt('Введите камень, ножницы или бумага');

      if (!(playerWorld === null)) {
        const firstLetter = playerWorld[0];
        console.log(firstLetter);
        const playerChoice = FIGURES_RUS.indexOf(firstLetter);
        if (playerChoice === -1) {
          alert('Вы ввели неверное значение');
          rock();
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
          alert(`Игрок: ${playerWord} \nКомпьютер: ${word} 
            \nВы выиграли. Вы ходите первым`);
          resulty.increasePlayer();
        } else if (
          (compChoice === 0 && playerChoice === 1) ||
          (compChoice === 1 && playerChoice === 2) ||
          (compChoice === 2 && playerChoice === 0)
        ) {
          alert(`Игрок: ${playerWord} \nКомпьютер: ${word} 
              \nВыиграл компьютер,  он начинает игру первым`);
          resulty.increaseComputer();
        } else if (
          (compChoice === 0 && playerChoice === 0) ||
          (compChoice === 1 && playerChoice === 1) ||
          (compChoice === 2 && playerChoice === 2)
        ) {
          alert(`Игрок: ${playerWord} \nКомпьютер: ${word} \nНичья`);
          rock();
        }
      } else {
        const b = confirm('Вы уверены, что хотите закончить игру?');
        if (b === true) {
          alert(`Игрок: ${result.player} \nКомпьютер: ${result.computer}`);
        }
      }
    };
    rock();
    console.log(resulty);

    const compStart = () => {
      let word;
      const getcompChoice = () => {
        const randomNumber = getRandomIntInclusive(1, result.computer);
        if (randomNumber % 2 === 0) {
          word = 'четное';
        }
        if (randomNumber % 2 === 1) {
          word = 'нечетное';
        }
        console.log(word);
        return randomNumber;
      };
      while (result.player > 0 && result.computer > 0) {
        const compChoice = getcompChoice();
        let playerAnswer;
        do {
          playerAnswer = prompt(`Компьютер загадал число. 
                    Оно четное или нечетное?`);
        } while (
          playerAnswer !== 'четное' &&
          playerAnswer !== 'нечетное' &&
          !(playerAnswer === null)
        );
        if (!(playerAnswer === null)) {
          if (
            (playerAnswer === 'четное' && compChoice % 2 === 0) ||
            (playerAnswer === 'нечетное' && compChoice % 2 === 1)
          ) {
            alert(`Вы угадали.
                    \nКомпьютер: ${compChoice}\n Игрок: ${playerAnswer}`);
            let p = Number(compChoice);
            if (p > result.computer) {
              p = result.computer;
            }
            result.increasePlayer(p);
            result.decreaseComputer(p);

            alert(`Счет
    Игрок:${result.player} шариков\nКомпьютер: ${result.computer} шариков`);
          } else if (
            (playerAnswer === 'четное' && compChoice % 2 === 1) ||
            (playerAnswer === 'нечетное' && compChoice % 2 === 0)
          ) {
            let p = Number(compChoice);
            if (p > result.player) {
              p = result.player;
            }
            result.increaseComputer(p);
            result.decreasePlayer(p);
            alert(`Игрок:${playerAnswer}\nКомпьютер:${compChoice}
                  \nВыиграл компьютер`);
            alert(`Счет
            Игрок:${result.player}шариков\nБот:${result.computer} шариков`);
          }
        }
        if (playerAnswer === null) {
          const b = confirm('Вы уверены, что хотите закончить игру?');
          if (b === true) {
            alert(`Игрок: ${result.player} \nКомпьютер: ${result.computer}`);
            break;
          }
        }
        if (result.player > 0 && result.computer > 0) {
          const compChoice = getcompChoice();
          let playerChoice;
          do {
            playerChoice = prompt(`Введите число от 1 до ${result.player}`);
          } while (isNaN(playerChoice));
          console.log(compChoice);
          if (!(playerChoice === null)) {
            if (playerChoice <= result.player && playerChoice > 0) {
              const playerNumber = playerChoice % 2;
              console.log(playerChoice);
              if (
                (playerNumber === 0 && compChoice % 2 === 1) ||
                (playerNumber === 1 && compChoice % 2 === 0)
              ) {
                let p = Number(playerChoice);
                if (p > result.computer) {
                  p = result.computer;
                }
                result.increasePlayer(p);
                result.decreaseComputer(p);
                alert(`Игрок:${playerChoice}\nКомпьютер:${word}
                      Вы выиграли`);
                alert(
                  `Игрок: ${result.player} шариков
                  Компьютер: ${result.computer} шариков`);
              }
              if (
                (playerNumber === 1 && compChoice % 2 === 1) ||
                (playerNumber === 0 && compChoice % 2 === 0)
              ) {
                let p = Number(playerChoice);
                if (p > result.player) {
                  p = result.player;
                }
                result.increaseComputer(p);
                result.decreasePlayer(p);
                alert(`Игрок: ${playerChoice} \nКомпьютер: ${word} 
                        \nВыиграл компьютер`);
                alert(`\nИгрок: ${result.player} шариков 
                        \nБот: ${result.computer} шариков`);
              }
            } else if (playerChoice > result.player || playerChoice < 1) {
              alert('Вы ввели неверное значение.');
            }
          }
          if (playerChoice === null) {
            const b = confirm('Вы уверены, что хотите закончить игру?');
            if (b === true) {
              alert(`Игрок: ${result.player}\nКомпьютер: ${result.computer}`);
              break;
            }
          }
        }
      }
      if (result.player <= 0 || result.computer <= 0) {
        const cho = confirm(`Игра окончена!\n
              Игрок:${result.player} \nКомпьютер: ${result.computer}
              Хотите сыграть еще`);
        console.log(cho);
        if (cho === true) {
          return game();
        } else {
          alert('До скорой встречи');
        }
      }
    };
    const playerStart = () => {
      let word;
      const getcompChoice = () => {
        const randomNumber = getRandomIntInclusive(1, result.computer);
        if (randomNumber % 2 === 0) {
          word = 'четное';
        }
        if (randomNumber % 2 === 1) {
          word = 'нечетное';
        }
        console.log(word);
        return randomNumber;
      };
      while (result.player > 0 && result.computer > 0) {
        let playerChoice;
        do {
          playerChoice = prompt(`Введите число от 1 до ${result.player}`);
        } while (isNaN(playerChoice));
        const compChoice = getcompChoice();
        if (!(playerChoice === null)) {
          if (playerChoice <= result.player && playerChoice > 0) {
            const playerNumber = playerChoice % 2;
            console.log(playerChoice);
            if (
              (playerNumber === 0 && compChoice % 2 === 1) ||
              (playerNumber === 1 && compChoice % 2 === 0)
            ) {
              let p = Number(playerChoice);
              if (p > result.computer) {
                p = result.computer;
              }
              result.increasePlayer(p);
              result.decreaseComputer(p);
              alert(`Игрок:${playerChoice}\nКомпьютер:${word} \nВы выиграли`);
              alert(`Игрок: ${result.player} шариков 
                           Компьютер: ${result.computer} шариков`);
            }
            if (
              (playerNumber === 1 && compChoice % 2 === 1) ||
              (playerNumber === 0 && compChoice % 2 === 0)
            ) {
              const p = Number(playerChoice);
              result.increaseComputer(p);
              result.decreasePlayer(p);
              alert(`Игрок: ${playerChoice} \nКомпьютер: ${word} 
                                \nВыиграл компьютер`);
              alert(`\nИгрок: ${result.player} шариков 
                                \nБот: ${result.computer} шариков`);
            }
          } else if (playerChoice > result.player || playerChoice < 1) {
            alert('Вы ввели неверное значение');
            playerStart();
            break;
          }
        }

        if (playerChoice === null) {
          const b = confirm('Вы уверены, что хотите закончить игру?');
          if (b === true) {
            alert(`Игрок: ${result.player} \nКомпьютер: ${result.computer}`);
            break;
          }
        }
        if (result.player > 0 && result.computer > 0) {
          const compChoice = getcompChoice();
          let playerAnswer;
          do {
            playerAnswer = prompt(`Компьютер загадал число. 
                Оно четное или нечетное?`);
          } while (
            playerAnswer !== 'четное' &&
            playerAnswer !== 'нечетное' &&
            !(playerAnswer === null)
          );

          if (!(playerAnswer === null)) {
            if (
              (playerAnswer === 'четное' && compChoice % 2 === 0) ||
              (playerAnswer === 'нечетное' && compChoice % 2 === 1)
            ) {
              alert(`Вы угадали. \nКомпьютер: ${compChoice} 
                            \n Игрок: ${playerAnswer}`);
              const p = Number(compChoice);
              result.increasePlayer(p);
              result.decreaseComputer(p);
              alert(`Счет
                Игрок:${result.player}шариков\nБот: ${result.computer}шариков`);
            } else if (
              (playerAnswer === 'четное' && compChoice % 2 === 1) ||
              (playerAnswer === 'нечетное' && compChoice % 2 === 0)
            ) {
              let p = Number(compChoice);
              if (p > result.player) {
                p = result.player;
              }
              result.increaseComputer(p);
              result.decreasePlayer(p);
              alert(`Игрок: ${playerAnswer}\nКомпьютер: ${compChoice} 
                              \nВыиграл компьютер\n`);
              alert(`Счет\nИгрок:${result.player}шариков
              Компьютер:${result.computer} шариков`);
            }
          }
          if (playerAnswer === null) {
            const b = confirm('Вы уверены, что хотите закончить игру?');
            if (b === true) {
              alert(`Игрок: ${result.player}\nКомпьютер: ${result.computer}`);
              break;
            }
          }
        }
      }
      if (result.player <= 0 || result.computer <= 0) {
        const cho = confirm(`Игра окончена!\n
                Игрок:${result.player} \nКомпьютер: ${result.computer}
                Хотите сыграть еще?`);
        console.log(cho);
        if (cho === true) {
          game();
        } else {
          alert('До скорой встречи');
        }
      }
    };
    if (resulty.computer === 1) {
      compStart();
    }
    if (resulty.player === 1) {
      playerStart();
    }
  };
  window.roScPaper = game();
})();
