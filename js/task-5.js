function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = bodyEl.querySelector('.change-color');
const textEl = bodyEl.querySelector('.color');

buttonEl.addEventListener('click', getColor);
function getColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  textEl.textContent = color;
  textEl.style.color = color;
}


buttonEl.addEventListener('click', getColor);
