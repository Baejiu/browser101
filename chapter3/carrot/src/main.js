'use strict';

import GameBuilder from './game.js';
import PopUp from './popup.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .gameDuration(3)
  .carrotcount(3)
  .bugCount(3)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case 'cancel':
      message = 'Replay?';
      break;
    case 'win':
      message = 'You Won!';
      break;
    case 'lose':
      message = 'You Lost~';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener((event) => {
  game.start();
});
