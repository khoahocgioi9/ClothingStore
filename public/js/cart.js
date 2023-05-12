let cartIcon = document.querySelector('#iconCart');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
let bodyElement = document.querySelector('body');

// show cart
cartIcon.onclick = () => {
	cart.style.display = 'block';
	// cart.style.zIndex = '2';
	// bodyElement.classList.add('active');
	updateTotal();
};
//close u cart
closeCart.onclick = () => {
	cart.style.display = 'none';
};

// cart working js
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready);
} else {
	ready();
}

function ready() {
	//remove item from cart
	var removeCartButtons = document.getElementsByClassName('cart-remove');
	for (var i = 0; i < removeCartButtons.length; i++) {
		var button = removeCartButtons[i];
		button.addEventListener('click', removeCartItem);
	}
	//quantity change
	var quantityinputs = document.getElementsByClassName('cart-quantity');
	for (var i = 0; i < quantityinputs.length; i++) {
		var input = quantityinputs[i];
		input.addEventListener('change', quantityChanged);
	}
	// add to cart
	// var addCart = document.getElementsByClassName('add-cart');
	// for (var i = 0; i < quantityinputs.length; i++) {
	// 	var button = addCart[i];
	// 	button.addEventListener('click', addCartClicked);
	// }
	// buy button work
	document
		.getElementsByClassName('btn-buy')[0]
		.addEventListener('click', buyButtonClicked);
}

// remove items from cart
function removeCartItem(event) {
	var buttonClicked = event.target;
	buttonClicked.parentElement.remove();
	updateTotal();
}
// quantity change
function quantityChanged(event) {
	var input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updateTotal();
}

//phan cach so 0 bang dau ","
function ReplaceNumberWithCommas(yourNumber) {
	//Seperates the components of the number
	var n = yourNumber.toString().split('.');
	//Comma-fies the first part
	n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	//Combines the two sections
	return n.join('.');
}
//update total
function updateTotal() {
	var cartContent = document.getElementsByClassName('cart-content')[0];
	var cartBoxes = cartContent.getElementsByClassName('cart-box');
	var total = 0;
	for (var i = 0; i < cartBoxes.length; i++) {
		var cartBox = cartBoxes[i];
		var priceElement = cartBox.getElementsByClassName('cart-price')[0];
		var quantityElement =
			cartBox.getElementsByClassName('cart-quantity')[0];
		var price = parseFloat(priceElement.innerText.replace('vnd', ''));
		var quantity = quantityElement.value;
		total = total + price * quantity;
	}
	total = Math.round(total * 100) / 100;
	total = ReplaceNumberWithCommas(total);

	document.getElementsByClassName('total-price')[0].innerText =
		total + ',000' + ' vnd';
}

//add to cart
function addCartClicked(event) {
	var button = event.target;
	var shopProducts = button.parentElement;
	var title =
		shopProducts.getElementsByClassName('product-title')[0].innerText;
	var price = shopProducts.getElementsByClassName('price')[0].innerText;
	var productImg =
		shopProducts.getElementsByClassName('product-shirt-1')[0].src;
	addProductToCart();

	function addProductToCart(title, price, productImg) {
		var cartShopBox = document.createElement('div');
		cartShopBox.classList.add('cart-box');
		var cartItems = document.getElementsByClassName('cart-content')[0];
		var cartItemsNames =
			cartItems.getElementsByClassName('cart-product-title');
		for (var i = 0; i < cartItemsNames.length; i++) {
			if (cartItemsNames[i].innerText == title) {
				alert('da them vao gio hang');
				return;
			}
		}
	}

	//the box khi them vao gio hang
	var cartBoxContent = `
                <img src="${productImg}"
                    style="width: 100px; height: 100px; object-fit: contain; padding: 10px;" alt="" class="cart-img">
                <div class="detail-box" style="display: grid; row-gap: 0.5rem;">
                    <div class="cart-product-title" style="font-size: 1rem; text-transform: uppercase;">${title}</div>

                    <div class="cart-price" style="font-weight: 600;">${price} vnd</div>

                    <input type="number" value="1" class="cart-quantity"
                        style="border: 1px solid; outline-color: rgb(0, 0, 0); width: 2.4rem; text-align: center; font-size: 1rem; ">
                </div>
                <!-- Remove cart -->
                <i class="fa-solid fa-trash cart-remove"
                    style="font-size: 19px; cursor: pointer; margin-top: 2rem;"></i>
        `;

	cartShopBox.innerHTML = cartBoxContent;
	cartItems.append(cartShopBox);

	cartShopBox
		.getElementsByClassName('cart-remove')[0]
		.addEventListener('click', removeCartItem);
	cartShopBox
		.getElementsByClassName('cart-quantity')[0]
		.addEventListener('change', quantityChanged);
}

//buy button
function buyButtonClicked() {
	alert('Don dat hang se duoc xu li');
	var cartContent = document.getElementsByClassName('cart-content')[0];
	while (cartContent.hasChildNodes()) {
		cartContent.removeChild(cartContent.firstChild);
	}
	updateTotal();
}
