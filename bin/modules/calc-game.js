import {
  PrintWelcome,
  GetName,
  PrintGreetings,
  GetAnswer,
  PrintCorrect,
  PrintWrongAnswer,
  PrintRetry,
  PrintQuestion,
  PrintCongratulation,
} from './game-engine.js';

const PrintRules = () => console.log('What is the result of the expression?');

const operationsList = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const GetRandomOperation = () => {
  const keys = Object.keys(operationsList);

  return keys[Math.round(Math.random() * keys.length)];
};

const PlayGame = () => {
  PrintWelcome();

  const name = GetName();

  PrintGreetings(name);

  PrintRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const fisrtOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);
    const operation = GetRandomOperation();

    const question = `${fisrtOperand} ${operation} ${secondOperand}`;
    const correctAnswer = operationsList[operation](fisrtOperand, secondOperand).toString();

    PrintQuestion(question);

    const answer = GetAnswer(name);

    if (answer === correctAnswer) {
      correctAnswers += 1;
      PrintCorrect();
    } else {
      PrintWrongAnswer(answer, correctAnswer);
      PrintRetry(name);
      return;
    }
  }

  PrintCongratulation(name);
};

export default PlayGame;
