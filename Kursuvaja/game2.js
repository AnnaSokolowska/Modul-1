'use strict';
(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const game = () => {
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
    alert('Игра началась. У вас и у компьютера по 5 шариков');
    const question = confirm(`Если вы хотите ходить первым нажмите OK,
    если первым ходит компьютер нажмите ОТМЕНА`);
    if (question === true) {
      return function playerStart() {
        let word;
        const getcompChoice = () => {
          const randomNumber = getRandomIntInclusive(1, result.computer);
          if ((randomNumber % 2) === 0) {
            word = 'четное';
          }
          if ((randomNumber % 2) === 1) {
            word = 'нечетное';
          }
          console.log(word);
          return randomNumber;
        };
        while (result.player > 0 && result.computer > 0) {
          let playerChoice;
          do {
            playerChoice =
                prompt(`Введите число от 1 до ${result.player}`);
          } while (isNaN(playerChoice));
          const compChoice = getcompChoice();
          if (!(playerChoice === null)) {
            if (playerChoice <= result.player && playerChoice > 0) {
              const playerNumber = playerChoice % 2;
              console.log(playerChoice);
              if ((playerNumber === 0 && (compChoice % 2) === 1) ||
                  (playerNumber === 1 && (compChoice % 2) === 0)
              ) {
                const p = Number(playerChoice);
                result.increasePlayer(p);
                result.decreaseComputer(p);
                alert(`Игрок:${playerChoice}\nКомпьютер:${word} \nВы выиграли`);
                alert(`Игрок: ${result.player} шариков 
                       Компьютер: ${result.computer} шариков`);
              }
              if ((playerNumber === 1 && (compChoice % 2) === 1) ||
                  (playerNumber === 0 && (compChoice % 2) === 0)
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
            } while (playerAnswer !== 'четное' &&
            playerAnswer !== 'нечетное' &&
            !(playerAnswer === null));

            if (!(playerAnswer === null)) {
              if ((playerAnswer === 'четное' && (compChoice % 2) === 0) ||
                      (playerAnswer === 'нечетное' && (compChoice % 2) === 1)) {
                alert(`Вы угадали. \nКомпьютер: ${compChoice} 
                        \n Игрок: ${playerAnswer}`);

                const p = Number(compChoice);
                result.increasePlayer(p);
                result.decreaseComputer(p);
                alert(`Счет
                Игрок:${result.player}шариков\nБот: ${result.computer}шариков`);
              } else if (
                (playerAnswer === 'четное' && (compChoice % 2) === 1) ||
                (playerAnswer === 'нечетное' && (compChoice % 2) === 0)
              ) {
                const p = Number(compChoice);
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
          const agrement = confirm(`Игра окончена!\n
            Игрок:${result.player} \nКомпьютер: ${result.computer}
            Хотите сыграть еще?`);
          if (agrement === true) {
            result.player = 5;
            result.computer = 5;
            return game();
          } else alert('До скорой встречи');
        }
      };
    }
    if (question === false) {
      return function compStart() {
        let word;
        const getcompChoice = () => {
          const randomNumber = getRandomIntInclusive(1, result.computer);
          if ((randomNumber % 2) === 0) {
            word = 'четное';
          }
          if ((randomNumber % 2) === 1) {
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
          } while (playerAnswer !== 'четное' &&
           playerAnswer !== 'нечетное' && !(playerAnswer === null));
          if (!(playerAnswer === null)) {
            if ((playerAnswer === 'четное' && (compChoice % 2) === 0) ||
                (playerAnswer === 'нечетное' && (compChoice % 2) === 1)) {
              alert(`Вы угадали.
                \nКомпьютер: ${compChoice}\n Игрок: ${playerAnswer}`);
              const p = Number(compChoice);
              result.increasePlayer(p);
              result.decreaseComputer(p);
              alert(`Счет
        Игрок:${result.player} шариков\nКомпьютер: ${result.computer} шариков`);
            } else if (
              (playerAnswer === 'четное' && (compChoice % 2) === 1) ||
                (playerAnswer === 'нечетное' && (compChoice % 2) === 0)
            ) {
              const p = Number(compChoice);
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
              playerChoice =
                prompt(`Введите число от 1 до ${result.player}`);
            } while (isNaN(playerChoice));
            console.log(compChoice);
            if (!(playerChoice === null)) {
              if (playerChoice <= result.player && playerChoice > 0) {
                const playerNumber = playerChoice % 2;
                console.log(playerChoice);
                if ((playerNumber === 0 && (compChoice % 2) === 1) ||
                    (playerNumber === 1 && (compChoice % 2) === 0)
                ) {
                  const p = Number(playerChoice);
                  result.increasePlayer(p);
                  result.decreaseComputer(p);
                  alert(`Игрок:${playerChoice}\nКомпьютер:${word}
                  Вы выиграли`);
                  alert(
                    `Игрок: ${result.player} шариков
                  Компьютер: ${result.computer} шариков`);
                }
                if ((playerNumber === 1 && (compChoice % 2) === 1) ||
                    (playerNumber === 0 && (compChoice % 2) === 0)
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
          const agrement = confirm(`Игра окончена!\n
          Игрок:${result.player} \nКомпьютер: ${result.computer}
          Хотите сыграть еще?`);
          if (agrement === true) {
            result.player = 5;
            result.computer = 5;
            return game();
          } else alert('До скорой встречи');
        }
      };
    }
  };
  window.roScPaper = game();
})();
