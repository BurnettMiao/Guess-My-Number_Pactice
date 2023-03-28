'use strict';

// 20221224
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector('.number');
let score = 20;
let highScore = 0;
// let guess = Number(document.querySelector('.guess').value);
let guess = document.querySelector('.guess');
const message = document.querySelector('.message');
let scoreDisplay = document.querySelector('.score');
let highScoreDisplay = document.querySelector('.highscore');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // const message = document.querySelector('.message');
  // let scoreDisplay = document.querySelector('.score');
  // let highScoreDisplay = document.querySelector('.highscore');
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b437';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '💥 You lose the game!';
      scoreDisplay.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '💥 You lose the game!';
      scoreDisplay.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoreDisplay.textContent = score;
  guess.value = '';
  number.textContent = '?';
  number.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
