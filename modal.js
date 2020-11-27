var modalBtn = document.querySelector('.btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.clo');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});
