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

const printRules = () => console.log('What number is missing in the progression?');

const generateProgression = () => {
  const startProgression = 1 + Math.round(Math.random() * 9);
  const progressionStep = 1 + Math.round(Math.random() * 9);
  const progressionLen = 5 + Math.round(Math.random() * 5);
  return Array.from({ length: progressionLen }, (_, i) => startProgression + i * progressionStep);
};

const playGame = () => {
  printWelcome();

  const name = getName();

  printGreetings(name);

  printRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const progression = generateProgression();
    const removedIndex = Math.round(Math.random() * (progression.length - 1));

    const correctAnswer = progression[removedIndex].toString();
    progression[removedIndex] = '..';

    printQuestion(progression.join(' '));

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
