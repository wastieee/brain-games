#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, start, step) => Array.from({ length }, (_, i) => start + i * step);

const runProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);

  for (let round = 0; round < 3; round++) {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(2, 10);
    const hiddenIndex = getRandomInt(0, length - 1);

    const progression = generateProgression(length, start, step);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

runProgressionGame();
