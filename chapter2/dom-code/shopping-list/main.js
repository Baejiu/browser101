'use strict';

const listText = document.querySelector('.list__text');
const listDel = document.querySelector('.list__del');
const input = document.querySelector('input');
const btnAdd = document.querySelector('.btn__add');
const log = document.getElementById('values');

input.addEventListener('change', updateValue);
btnAdd.addEventListener('click', updateValue);
function updateValue(e) {
  if (input.value == null || '') {
    return;
  }
  console.log(e.target.value || input.value);
  createList();
  input.value = null;
}

function createList() {
  const list = document.querySelector('.list');
  const listItem = document.createElement('div');
  listItem.setAttribute('class', 'list__item');
  listItem.textContent = 'good';
  list.appendChild(listItem);
}
