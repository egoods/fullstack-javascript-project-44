import launchGame from './game-engine.js';

const printRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getQuestionAndAnswer = () => {
  const guessedNumber = Math.round(Math.random() * 100);
  const correctAnswer = (guessedNumber % 2 === 0 ? 'yes' : 'no');
  return [guessedNumber, correctAnswer];
};

export default () => launchGame(printRules, getQuestionAndAnswer);
