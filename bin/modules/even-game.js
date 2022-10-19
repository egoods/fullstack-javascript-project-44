import {
  printWelcome,
  getName,
  printGreetings,
  printRetry,
  printCongratulation,
  playGame,
} from './game-engine.js';

const printRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const setup = () => {
  printWelcome();

  const name = getName();

  printGreetings(name);

  printRules();

  const gameResult = playGame(() => {
    const guessedNumber = Math.round(Math.random() * 100);
    const correctAnswer = (guessedNumber % 2 === 0 ? 'yes' : 'no');
    return [guessedNumber, correctAnswer];
  });

  if (gameResult) {
    printCongratulation(name);
  } else {
    printRetry(name);
  }
};

export default setup;
