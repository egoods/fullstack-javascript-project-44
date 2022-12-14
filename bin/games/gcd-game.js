import launchGame from './game-engine.js';

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

const getQuestionAndAnswer = () => {
  const firstOperand = Math.round(Math.random() * 100);
  const secondOperand = Math.round(Math.random() * 100);

  const correctAnswer = euclidianGdc(firstOperand, secondOperand).toString();

  return [`${firstOperand} ${secondOperand}`, correctAnswer];
};

export default () => launchGame(printRules, getQuestionAndAnswer);
