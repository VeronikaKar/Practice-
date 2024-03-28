function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const inputEl = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const offsetWidth = 30;
  destroyBoxes();
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      const size = offsetWidth + i * 10;

      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      boxEl.appendChild(div);
    }
    inputEl.value = '';
  }
}
function destroyBoxes() {
  boxEl.innerHTML = '';
}

buttonCreate.addEventListener('click', () => createBoxes(inputEl.value));
buttonDestroy.addEventListener('click', destroyBoxes);
// div.style.width = `${initialSize}px`;
// div.style.height = `${initialSize}px`;