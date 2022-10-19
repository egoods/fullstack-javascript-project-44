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

const printRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playGame = () => {
  printWelcome();

  const name = getName();

  printGreetings(name);

  printRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const guessedNumber = Math.round(Math.random() * 100);
    const correctAnswer = (guessedNumber % 2 === 0 ? 'yes' : 'no');

    printQuestion(guessedNumber);

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
