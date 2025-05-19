#!/usr/bin/env node
import readlineSync from 'readline-sync'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const runGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Find the greatest common divisor of given numbers.')

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomNumber()
    const num2 = getRandomNumber()
    const correctAnswer = String(getGCD(num1, num2))

    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGame
runGame()
