'use strict';

const listItem = document.querySelector('.list__item');
const listText = document.querySelector('.list__text');
const listDel = document.querySelector('.list__del');
const input = document.querySelector('input');
const add = document.querySelector('.btn__add');

input.addEventListener('input');

function updateValue(event) {
  console.log(event.target.value);
}
