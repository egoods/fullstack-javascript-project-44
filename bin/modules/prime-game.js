import {
  printWelcome,
  getName,
  printGreetings,
  printRetry,
  printCongratulation,
  playGame,
} from './game-engine.js';

const printRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (a) => {
  if (a === 2) {
    return true;
  }

  for (let i = 2; i < Math.sqrt(a); i += 1) {
    if (a % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const number = Math.round(Math.random() * 100);
  const correctAnswer = (isPrime(number) ? 'yes' : 'no');

  return [number, correctAnswer];
};

const setup = () => {
  printWelcome();

  const name = getName();

  printGreetings(name);

  printRules();

  const gameResult = playGame(getQuestionAndAnswer);

  if (gameResult) {
    printCongratulation(name);
  } else {
    printRetry(name);
  }
};

export default setup;
