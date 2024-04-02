const openModalBtnEl = document.querySelector('.js-modal-open');
const closeModalBtnEl = document.querySelector('.js-modal-close');
const backdropEl = document.querySelector('.js-backdrop');

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  closeModalBtnEl.removeEventListener('click', onCloseModalBtnClick);
  backdropEl.removeEventListener('click', onBackdropClick);
};

const onOpenModalBtnClick = event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onDocumentKeydown);
  closeModalBtnEl.addEventListener('click', onCloseModalBtnClick);
  backdropEl.addEventListener('click', onBackdropClick);
};

const onCloseModalBtnClick = event => {
  closeModal();
};

const onDocumentKeydown = event => {
  if (event.code !== 'Escape') {
    return;
  }

  closeModal();
};

const onBackdropClick = event => {
  if (event.currentTarget !== event.target) {
    return;
  }

  closeModal();
};

openModalBtnEl.addEventListener('click', onOpenModalBtnClick);