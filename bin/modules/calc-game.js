import {
  printWelcome,
  getName,
  printGreetings,
  printRetry,
  printCongratulation,
  playGame,
} from './game-engine.js';

const printRules = () => console.log('What is the result of the expression?');

const operationsList = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperation = () => {
  const keys = Object.keys(operationsList);

  return keys[Math.round(Math.random() * keys.length)];
};

const getQuestionAndAnswer = () => {
  const fisrtOperand = Math.round(Math.random() * 100);
  const secondOperand = Math.round(Math.random() * 100);
  const operation = getRandomOperation();

  const question = `${fisrtOperand} ${operation} ${secondOperand}`;
  const correctAnswer = operationsList[operation](fisrtOperand, secondOperand).toString();

  return [question, correctAnswer];
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
