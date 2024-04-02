const palletEl = document.querySelector('.js-pallet');
const palletItemsEl = document.querySelectorAll('.js-pallet-item');

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

const paintElements = () => {
  palletItemsEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
  });
};

paintElements();

const onPalletItemClick = event => {
  if (event.target.nodeName === 'SPAN' || event.target.nodeName === 'UL') {
    return;
  }

  // const palletItemEl = event.target;
  const { target: palletItemEl } = event;

  const bgColorValue = palletItemEl.style.backgroundColor;
  const palletItemOutputEl = palletItemEl.querySelector(
    '.js-pallet__item-color'
  );

  palletItemOutputEl.textContent = bgColorValue;
};

palletEl.addEventListener('click', onPalletItemClick);