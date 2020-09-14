'use strict';
const list = document.querySelector('.list');
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
  const value = e.target.value || input.value;
  createList(value);
  input.value = null;
}
function createList(value) {
  const newListItem = document.createElement('div');
  const newListText = document.createElement('p');
  const newListDel = document.createElement('span');
  newListItem.appendChild(newListText);
  newListItem.appendChild(newListDel);
  newListItem.setAttribute('class', 'list__item');
  newListText.setAttribute('class', 'list__text');
  newListDel.setAttribute('class', 'list__del');
  newListText.textContent = value;
  newListDel.innerHTML = '<i class="far fa-trash-alt"></i>';
  list.appendChild(newListItem);
}

listDel.addEventListener('click', deleteList(event));

function deleteList(event) {
  const delBtn = event.target;
  const div = delBtn.parentNoed;
  list.removeChild(div);
}
