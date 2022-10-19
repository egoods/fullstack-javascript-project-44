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
} from './game.js';

const PrintRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const PlayGame = () => {
  PrintWelcome();

  const name = GetName();

  PrintGreetings(name);

  PrintRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const guessedNumber = Math.round(Math.random() * 100);
    const correctAnswer = (guessedNumber % 2 === 0 ? 'yes' : 'no');

    PrintQuestion(guessedNumber);

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
