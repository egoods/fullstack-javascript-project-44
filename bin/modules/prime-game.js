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

const PrintRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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

const PlayGame = () => {
  PrintWelcome();

  const name = GetName();

  PrintGreetings(name);

  PrintRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = Math.round(Math.random() * 100);

    const correctAnswer = (isPrime(number) ? 'yes' : 'no');

    PrintQuestion(number);

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
