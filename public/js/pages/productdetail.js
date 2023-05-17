const sizeBtnElms = document.getElementsByClassName('size-audio');

for(let i = 0; i < sizeBtnElms.length; i++) {
    sizeBtnElms[i].addEventListener('click', function(e) {

        for(let i = 0; i < sizeBtnElms.length; i++) {
            sizeBtnElms[i].classList.remove('highlight');
        }

        e.target.classList.add('highlight');
    });
}   

function changeImage(a) {
    document.getElementById("product-detail__avatar").src=a.src;
}

async function loadDataProductDetail(){
    const idProduct = location.pathname.split('/')[3]; //get id in URL
    let response = await fetch(`https://lavent-clone.vercel.app/api/v1/product/${idProduct}`);
    console.log(response);

    document.getElementsByClassName('path-name-product').innerText = response.data._id;
    document.getElementsByClassName('summary__title').innerText = response.data.name;
    document.getElementsByClassName('summary__price').innerText = response.data.price;
    
    changeImage(response.data.image);
} 

console.log(document.getElementsByClassName('choose__size'));