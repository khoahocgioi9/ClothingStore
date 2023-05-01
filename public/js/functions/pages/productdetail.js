const sizeBtnElms = document.getElementsByClassName('size-audio');

for(let i = 0; i < sizeBtnElms.length; i++) {
    sizeBtnElms[i].addEventListener('click', function(e) {

        for(let i = 0; i < sizeBtnElms.length; i++) {
            sizeBtnElms[i].classList.remove('highlight');
        }

        e.target.classList.add('highlight');
    });
}   