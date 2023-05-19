const sizeBtnElms = document.getElementsByClassName('size-audio');

for(let i = 0; i < sizeBtnElms.length; i++) {
    sizeBtnElms[i].addEventListener('click', function(e) {

        for(let i = 0; i < sizeBtnElms.length; i++) {
            sizeBtnElms[i].classList.remove('highlight');
        }

        e.target.classList.add('highlight');
    });
}   

// function setSizeAudio(size, quantitySize){
//     const maxLength = 3;
//     for(let i=0; i< quantitySize; i++){

//     }
//     document.getElementsByClassName("size-audio")[0];
// }

async function loadDataProductDetail(){
    const idProduct = location.pathname.split('/')[3]; //get id in URL

    let response = await fetch(`https://lavent-clone.vercel.app/api/v1/product/7a09d297-46a4-47d9-b7a7-f103802ab0b8`);
    response.json().then((result) => {
        // document.getElementsByClassName('breadcrumb-product').innerText = "kiendz";
        document.getElementsByClassName('breadcrumb-product')[0].innerHTML = result[0].name;
        document.getElementsByClassName('summary__title')[0].innerHTML = result[0].name;
        document.getElementsByClassName('productImg')[0].src = result[0].thumbnail;
        document.getElementsByClassName('summary__price')[0].innerHTML = result[0].price/1000 + ',000' + ' vnd';
        document.getElementById('information').innerHTML = result[0].description;
        let elmentSize = document.getElementsByClassName("size-audio")[0];
        elmentSize.innerText = result[0].size;
        elmentSize.style.display = 'block';
    })
    
} 

loadDataProductDetail();