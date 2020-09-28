'use strict';

const headerBtn = document.querySelector('.header__btn');
const game = document.querySelector('.game');
const remainder = document.querySelector('.header__remainder');
const replayPop = document.querySelector('.game__replay');
const resultWin = document.querySelector('.game__result--win');
const resultLost = document.querySelector('.game__result--lost');
const replayBtn = document.querySelectorAll('.replay-btn');
const imgGame = document.querySelector('.ing-btn');
const timerBox = document.querySelector('.header__timer');
let bgSound = new Audio('./sound/bg.mp3');
let alertSound = new Audio('./sound/alert.wav');
let bugSound = new Audio('./sound/bug_pull.mp3');
let carrotSound = new Audio('./sound/carrot_pull.mp3');
let winSound = new Audio('./sound/game_win.mp3');
let timer = 9;
let count = 10;
let carrotNumber = 10;
let bugNumber = 10;
for (var i = 0; i < replayBtn.length; i++) {
  var item = replayBtn.item(i);
  item.addEventListener('click', () => {
    gameReStart();
  });
}
headerBtn.addEventListener('click', () => {
  if (timer <= 8) {
    alertSound.play();
    headerBtn.innerHTML = `<i class="fas fa-play">`;
    replayPop.style.display = 'block';
    timerStop();
  } else {
    gameStart();
  }
});
imgGame.addEventListener('click', () => {
  replayPop.style.display = 'none';
  timerStart();
});
function gameReStart() {
  resultWin.style.display = 'none';
  resultLost.style.display = 'none';
  replayPop.style.display = 'none';
  game.innerHTML = '';
  timer = 10;
  carrotNumber = 10;
  bugNumber = 10;
  gameStart();
}
function gameStart() {
  bgSound.play();
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
  winSound.play();
  resultWin.style.display = 'block';
}
function gameOver() {
  timerStop();
  alertSound.play();
  resultLost.style.display = 'block';
}
function changeBtn() {
  headerBtn.innerHTML = `<i class="fas fa-stop">`;
}
let interval;
function timerStart() {
  interval = setInterval(() => {
    if (timer === 0) {
      gameOver();
      return;
    }
    if (count == 0) {
      gameWin();
    }
    timerBox.innerHTML = `00: ${timer}`;
    timer--;
  }, 1000);
}
function timerStop() {
  clearInterval(interval);
}

function createcarrot() {
  if (carrotNumber === 0) {
    return;
  }
  const carrot = document.createElement('div');
  carrot.setAttribute('class', 'carrot game__item');
  carrot.setAttribute('data-id', carrotNumber);
  carrot.addEventListener('click', (e) => {
    carrotSound.play();
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

  carrotNumber--;
  return carrot;
}

function createBug() {
  if (bugNumber === 0) {
    return;
  }
  const bug = document.createElement('div');
  bug.setAttribute('class', 'bug game__item');
  bug.setAttribute('data-id', bugNumber);
  bug.addEventListener('click', (e) => {
    bugSound.play();
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

  bugNumber--;
  return bug;
}
