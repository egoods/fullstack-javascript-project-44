import {
  printWelcome,
  getName,
  printGreetings,
  getAnswer,
  printCorrect,
  printWrongAnswer,
  printRetry,
  printQuestion,
  printCongratulation,
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

const playGame = () => {
  printWelcome();

  const name = getName();

  printGreetings(name);

  printRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = Math.round(Math.random() * 100);

    const correctAnswer = (isPrime(number) ? 'yes' : 'no');

    printQuestion(number);

    const answer = getAnswer(name);

    if (answer === correctAnswer) {
      correctAnswers += 1;
      printCorrect();
    } else {
      printWrongAnswer(answer, correctAnswer);
      printRetry(name);
      return;
    }
  }

  printCongratulation(name);
};

export default playGame;
