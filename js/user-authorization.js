let deliveryBtn = document.querySelector('.services-slider-control-active');
let modalWindow = document.querySelector('.modal-container');

let closeBtn = document.querySelector('.modal-close-btn');


deliveryBtn.onclick = function() {
  modalWindow.classList.remove('modal-container-close')
}

closeBtn.onclick = function() {
  modalWindow.classList.add('modal-container-close')
}
