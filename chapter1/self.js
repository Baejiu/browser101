'use strict';

let screenWidth = document.querySelector('.window_screenWidth');
let screenHeight = document.querySelector('.window_screenHeight');
let outerWidth = document.querySelector('.window_outerWidth');
let outerHeight = document.querySelector('.window_outerHeight');
let innerWidth = document.querySelector('.window_innerWidth');
let innerHeight = document.querySelector('.window_innerHeight');
let client_Width = document.querySelector('.client_width');
let client_Height = document.querySelector('.client_height');

window.addEventListener('load', () => {
  screenWidth.textContent = window.screen.width;
  screenHeight.textContent = window.screen.height;
  outerWidth.textContent = window.outerWidth;
  outerHeight.textContent = window.outerHeight;
  innerWidth.textContent = window.innerWidth;
  innerHeight.textContent = window.innerHeight;
});
window.addEventListener('resize', () => {
  screenWidth.textContent = window.screen.width;
  screenHeight.textContent = window.screen.height;
  outerWidth.textContent = window.outerWidth;
  outerHeight.textContent = window.outerHeight;
  innerWidth.textContent = window.innerWidth;
  innerHeight.textContent = window.innerHeight;
});
