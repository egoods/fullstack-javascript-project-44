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

const PrintRules = () => console.log('What number is missing in the progression?');

const GenerateProgression = () => {
  const startProgression = 1 + Math.round(Math.random() * 9);
  const progressionStep = 1 + Math.round(Math.random() * 9);
  const progressionLen = 5 + Math.round(Math.random() * 5);
  return Array.from({ length: progressionLen }, (_, i) => startProgression + i * progressionStep);
};

const PlayGame = () => {
  PrintWelcome();

  const name = GetName();

  PrintGreetings(name);

  PrintRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const progression = GenerateProgression();
    const removedIndex = Math.round(Math.random() * (progression.length - 1));

    const correctAnswer = progression[removedIndex].toString();
    progression[removedIndex] = '..';

    PrintQuestion(progression.join(' '));

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
