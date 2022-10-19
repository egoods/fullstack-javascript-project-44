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

const printRules = () => console.log('Find the greatest common divisor of given numbers.');

const euclidianGdc = (a, b) => {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  return (a >= b ? euclidianGdc(b, a % b) : euclidianGdc(a, b % a));
};

const playGame = () => {
  printWelcome();

  const name = getName();

  printGreetings(name);

  printRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const firstOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);

    const correctAnswer = euclidianGdc(firstOperand, secondOperand).toString();

    printQuestion(`${firstOperand} ${secondOperand}`);

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
