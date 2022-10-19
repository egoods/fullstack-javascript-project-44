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

const PrintRules = () => console.log('Find the greatest common divisor of given numbers.');

const euclidianGdc = (a, b) => {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  return (a >= b ? euclidianGdc(b, a % b) : euclidianGdc(a, b % a));
};

const PlayGame = () => {
  PrintWelcome();

  const name = GetName();

  PrintGreetings(name);

  PrintRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const firstOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);

    const correctAnswer = euclidianGdc(firstOperand, secondOperand).toString();

    PrintQuestion(`${firstOperand} ${secondOperand}`);

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
