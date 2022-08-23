const closeModal = document.querySelector('.act-close-modal');
const modalWrap = document.querySelector('.modal__wrap');
const openModal = document.querySelector('.act-open-modal');

closeModal.addEventListener('click', function (event) {
  event.preventDefault();
  modalWrap.classList.remove('active');
});

openModal.addEventListener('click', function (event) {
  event.preventDefault();
  modalWrap.classList.add('active');
});
