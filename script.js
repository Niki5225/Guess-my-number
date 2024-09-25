'use strict';
const submitBtn = document.querySelector('.check');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const againBtn = document.querySelector('.again');

let message = document.querySelector('.message');
let body = document.querySelector('body');
let score = document.querySelector('.score');
let currentScore = 20;
let highScore = document.querySelector('.highscore');
let secretNumberElement = document.querySelector('.number');

// Submit button event handler
submitBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Handle invalid input
  if (guess <= 0 || guess > 20) {
    message.textContent = 'Not a correct input ⛔';
    // Handle higher number case
  } else if (guess > secretNumber) {
    message.textContent = 'Too high 📈';
    currentScore--;
    score.textContent = currentScore;

    // Handle higher number case
  } else if (guess < secretNumber) {
    message.textContent = 'Too low 📉';
    currentScore--;
    score.textContent = currentScore;

    // Handle coincidence case
  } else if (guess === secretNumber) {
    body.style.backgroundColor = 'green';
    message.textContent = 'Congrats! You found the secret number ! 🎉🎉🎉';
    let currentHighScore = Number(highScore.textContent);
    secretNumberElement.textContent = secretNumber;
    secretNumberElement.style.width = '30rem';

    // Check if the high score is higher than the existing one
    if (currentHighScore < currentScore) {
      highScore.textContent = currentScore;
    }
    currentScore = 20;
  }
});

// Again button handler
againBtn.addEventListener('click', function () {
  // Resets everything so that the user can start the game again and aim for better score :)
  message.textContent = 'Start guessing...';
  const guess = document.querySelector('.guess');
  guess.value = '';
  score.textContent = 20;
  body.style.backgroundColor = '#222';
  secretNumberElement.style.width = '15rem';
  secretNumberElement.textContent = '?';
});
