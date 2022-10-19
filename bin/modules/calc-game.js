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

const playGame = () => {
  printWelcome();

  const name = getName();

  printGreetings(name);

  printRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const fisrtOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);
    const operation = getRandomOperation();

    const question = `${fisrtOperand} ${operation} ${secondOperand}`;
    const correctAnswer = operationsList[operation](fisrtOperand, secondOperand).toString();

    printQuestion(question);

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
