const inputElm = document.querySelector('#name-input');
const spanElm = document.querySelector('#name-output');
inputElm.addEventListener('input', formText);
function formText(event) {
  let name = event.currentTarget.value.trim();
  if (name === '') {
    spanElm.textContent = 'Anonymous';
  } else {
    spanElm.textContent = name;
  }
}