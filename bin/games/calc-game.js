import launchGame from './game-engine.js';

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

export default () => launchGame(printRules, getQuestionAndAnswer);
