import readlineSync from 'readline-sync';

const PrintWelcome = () => console.log('Welcome to the Brain Games!');

const GetName = () => readlineSync.question('May i have your name? ');

const PrintGreetings = (name) => console.log(`Hello, ${name}!`);

const PrintRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const PrintCongratulation = (name) => console.log(`Congratulations, ${name}!`);

const PrintRetry = (name) => console.log(`Let's try again, ${name}!`);

const PrintQuestion = (number) => console.log(`Question: ${number}`);

const GetAnswer = () => readlineSync.question('Your answer: ');

const GuessNumber = () => {
  const number = Math.round(Math.random() * 100);

  PrintQuestion(number);
  const answer = GetAnswer();

  return ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 === 1));
};

const PlayGame = () => {
  PrintWelcome();

  const name = GetName();

  PrintGreetings(name);

  PrintRules();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    if (GuessNumber()) {
      correctAnswers += 1;
      console.log('Correct');
    } else {
      break;
    }
  }

  if (correctAnswers === 3) {
    PrintCongratulation(name);
  } else {
    PrintRetry(name);
  }
};

export default PlayGame;
