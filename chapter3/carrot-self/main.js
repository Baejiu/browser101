'use strict';

const headerBtn = document.querySelector('.header__btn');
const game = document.querySelector('.game');
const remainder = document.querySelector('.header__remainder');
const replayPop = document.querySelector('.game__replay');
const resultWin = document.querySelector('.game__result--win');
const resultLost = document.querySelector('.game__result--lost');
const replayBtn = document.querySelector('.replay-btn');
const timerBox = document.querySelector('.header__timer');
let timer = 9;
let count = 10;

headerBtn.addEventListener('click', () => {
  if (timer <= 8) {
    headerBtn.innerHTML = `<i class="fas fa-play">`;
    replayPop.style.display = 'block';
    timerStop();
  } else {
    gameStart();
  }
});

function gameStart() {
  count = 10;
  remainder.innerHTML = `${count}`;
  changeBtn();
  timerStart();
  for (let i = 0; i < 10; i++) {
    createcarrot();
    createBug();
  }
}
function gameWin() {
  timerStop();
  resultWin.style.display = 'block';
}
function gameOver() {
  timerStop();
  resultLost.style.display = 'block';
}
function changeBtn() {
  headerBtn.innerHTML = `<i class="fas fa-stop">`;
}
let interval;
function timerStart() {
  interval = setInterval(() => {
    timerBox.innerHTML = `00: ${timer}`;
    if (timer === 0) {
      gameOver();
      return;
    }
    timer--;
    if (count == 0) {
      gameWin();
    }
  }, 1000);
}
function timerStop() {
  clearInterval(interval);
}

let id = 10;
function createcarrot() {
  if (id === 0) {
    return;
  }
  const carrot = document.createElement('div');
  carrot.setAttribute('class', 'carrot game__item');
  carrot.setAttribute('data-id', id);
  carrot.addEventListener('click', (e) => {
    const target = e.target;
    count--;
    remainder.innerHTML = `${count}`;
    target.style.display = 'none';
  });
  game.appendChild(carrot);
  const gameWidth = game.clientWidth;
  const gameHeight = game.clientHeight;
  const carrotSize = carrot.offsetWidth;
  function getRandomwidth() {
    return Math.random() * (gameWidth - carrotSize) + 1;
  }
  function getRandomheight() {
    return Math.random() * (gameHeight - carrotSize) + 1;
  }
  carrot.style.top = `${getRandomheight(1, gameHeight)}px`;
  carrot.style.left = `${getRandomwidth(1, gameWidth)}px`;

  id--;
  return carrot;
}

let id2 = 10;
function createBug() {
  if (id2 === 0) {
    return;
  }
  const bug = document.createElement('div');
  bug.setAttribute('class', 'bug game__item');
  bug.setAttribute('data-id', id2);
  bug.addEventListener('click', (e) => {
    const target = e.target;
    gameOver();
  });
  game.appendChild(bug);
  const gameWidth = game.clientWidth;
  const gameHeight = game.clientHeight;
  const bugSize = bug.offsetWidth;
  function getRandomwidth() {
    return Math.random() * (gameWidth - bugSize) + 1;
  }
  function getRandomheight() {
    return Math.random() * (gameHeight - bugSize) + 1;
  }
  bug.style.top = `${getRandomheight(1, gameHeight)}px`;
  bug.style.left = `${getRandomwidth(1, gameWidth)}px`;

  id2--;
  return bug;
}
