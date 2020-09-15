'use strict';
const list = document.querySelector('.list');
const input = document.querySelector('input');
const btnAdd = document.querySelector('.btn__add');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    updateValue(e);
  }
});
btnAdd.addEventListener('click', updateValue);

function updateValue(e) {
  if (input.value == null || input.value == '') {
    return;
  }
  const value = e.target.value || input.value;
  createList(value);
  input.value = null;
}

function createList(value) {
  const newListItem = document.createElement('li');
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
  newListDel.addEventListener('click', (event) => {
    const Btn = event.target;
    const li = Btn.parentNode.parentNode;
    list.removeChild(li);
  });
}
