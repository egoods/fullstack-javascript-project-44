import launchGame from './game-engine.js';

const printRules = () => console.log('What number is missing in the progression?');

const generateProgression = () => {
  const startProgression = 1 + Math.round(Math.random() * 9);
  const progressionStep = 1 + Math.round(Math.random() * 9);
  const progressionLen = 5 + Math.round(Math.random() * 5);
  return Array.from({ length: progressionLen }, (_, i) => startProgression + i * progressionStep);
};

const getQuestionAndAnswer = () => {
  const progression = generateProgression();
  const removedIndex = Math.round(Math.random() * (progression.length - 1));

  const correctAnswer = progression[removedIndex].toString();
  progression[removedIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

export default () => launchGame(printRules, getQuestionAndAnswer);
