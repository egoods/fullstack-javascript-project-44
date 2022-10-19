import readlineSync from 'readline-sync';

export const printWelcome = () => console.log('Welcome to the Brain Games!');

export const getName = () => readlineSync.question('May I have your name? ');

export const printGreetings = (name) => console.log(`Hello, ${name}!`);

export const printCongratulation = (name) => console.log(`Congratulations, ${name}!`);

export const printRetry = (name) => console.log(`Let's try again, ${name}!`);

export const printQuestion = (number) => console.log(`Question: ${number}`);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const printWrongAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

export const printCorrect = () => console.log('Correct!');
