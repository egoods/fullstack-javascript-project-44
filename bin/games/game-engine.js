import readlineSync from 'readline-sync';

const printWelcome = () => console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name?\n');

const printGreetings = (name) => console.log(`Hello, ${name}!`);

const printCongratulation = (name) => console.log(`Congratulations, ${name}!`);

const printRetry = (name) => console.log(`Let's try again, ${name}!`);

const printQuestion = (number) => console.log(`Question: ${number}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const printWrongAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

const printCorrect = () => console.log('Correct!');

const playGame = (getQuestionAndAnswerFunc, correctAnswersToWin) => {
  let correctAnswers = 0;
  while (correctAnswers < correctAnswersToWin) {
    const [question, correctAnswer] = getQuestionAndAnswerFunc();

    printQuestion(question);
    const answer = getAnswer();

    if (answer === correctAnswer) {
      correctAnswers += 1;
      printCorrect();
    } else {
      printWrongAnswer(answer, correctAnswer);
      return false;
    }
  }

  return true;
};

const launchGame = (printRulesFunc, getQuestionAndAnswerFunc, correctAnswersToWin = 3) => {
  printWelcome();

  const name = getName();

  printGreetings(name);

  printRulesFunc();

  if (playGame(getQuestionAndAnswerFunc, correctAnswersToWin)) {
    printCongratulation(name);
  } else {
    printRetry(name);
  }
};

export default launchGame;
