import readlineSync from 'readline-sync';

export const PrintWelcome = () => console.log('Welcome to the Brain Games!');

export const GetName = () => readlineSync.question('May i have your name? ');

export const PrintGreetings = (name) => console.log(`Hello, ${name}!`);

export const PrintCongratulation = (name) => console.log(`Congratulations, ${name}!`);

export const PrintRetry = (name) => console.log(`Let's try again, ${name}!`);

export const PrintQuestion = (number) => console.log(`Question: ${number}`);

export const GetAnswer = () => readlineSync.question('Your answer: ');

export const PrintWrongAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

export const PrintCorrect = () => console.log('Correct!');
