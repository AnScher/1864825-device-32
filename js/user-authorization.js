let enterLink = document.querySelector('.navigation-user-item-login');
let modalWindow = document.querySelector('.modal-container');

let closeBtn = document.querySelector('.modal-close-btn');


enterLink.onclick = function() {
  modalWindow.classList.remove('modal-container-close')
}

closeBtn.onclick = function() {
  modalWindow.classList.add('modal-container-close')
}
