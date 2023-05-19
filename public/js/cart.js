let cartIcon = document.querySelector('#iconCart');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
let bodyElement = document.querySelector('body');
let addToCartElement = document.getElementsByClassName('btn-muahang add')[0];
//add to cart from detail product
// addToCartElement.onclick = () =>{
// 	cart.style.display = 'block';
// 	// cart.style.zIndex = '2';
// 	// bodyElement.classList.add('active');
// 	updateTotal();
// }

// show cart
cartIcon.onclick = () => {
	cart.style.display = 'block';
	// cart.style.zIndex = '2';
	// bodyElement.classList.add('active');
	updateTotal();
	getCartFromStorage();
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
	var addCart = document.getElementsByClassName('btn-muahang add');
	for (var i = 0; i < addCart.length; i++) {
		var button = addCart[i];
		button.addEventListener('click', addCartClicked);
	}
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
	updateCartInStorage();
}


// quantity change
function quantityChanged(event) {
	console.log(event);
	var input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updateTotal();
	updateCartInStorage();
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
function addCartClicked() {
	//lay id va lưu
    var title = document.getElementsByClassName('summary__title')[0].innerHTML;
	var productImg = document.getElementsByClassName('productImg')[0].src;
	var price = document.getElementsByClassName('summary__price')[0].innerHTML;
	var quantity = document.getElementsByClassName('amount')[0].value;
	//save to local storage


	addProductToCart(title, price, productImg, quantity);
	alert("Thêm thành công!");
	updateTotal();
}

//add product to cart
function addProductToCart(title, price, productImg, quantity) {
	var cartShopBox = document.createElement('div');
	cartShopBox.classList.add('cart-box');
	var cartItems = document.getElementsByClassName('cart-content')[0];
	var cartItemsNames =
		cartItems.getElementsByClassName('cart-product-title');
	for (var i = 0; i < cartItemsNames.length; i++) {
		if (cartItemsNames[i].innerText == title) {
			alert('Đã có trong giỏ hàng');
			return;
		}
	}


	//the box khi them vao gio hang
	var cartBoxContent = `
	<img src="${productImg}"
		style="width: 100px; height: 100px; object-fit: contain; padding: 10px;" alt="" class="cart-img">
	<div class="detail-box" style="display: grid; row-gap: 0.5rem;">
		<div class="cart-product-title" style="font-size: 1rem; text-transform: uppercase;">${title}</div>

		<div class="cart-price" style="font-weight: 600;">${price}</div>

		<input type="number" value="${quantity}" class="cart-quantity"
			style="border: 1px solid; outline-color: rgb(0, 0, 0); width: 2.4rem; text-align: center; font-size: 1rem; ">
	</div>
	<!-- Remove cart -->
	<i class="fa-solid fa-trash cart-remove"
		style="font-size: 19px; cursor: pointer; margin-top: 2rem;"></i>
	
</div>
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



//Buy button
function buyButtonClicked() {
	alert('Don dat hang se duoc xu li');
	
	var cartContent = document.getElementsByClassName('cart-content')[0];
	while (cartContent.hasChildNodes()) {
		cartContent.removeChild(cartContent.firstChild);
	}
	updateTotal();
	window.location.href = "Cart.html";
}




//luu gio hang vao local storage
function updateCartInStorage() {
	var cartItems = document.getElementsByClassName('cart-box');
	var cartData = [];
  
	// Lặp qua từng phần tử trong giỏ hàng và lấy thông tin cần lưu trữ
	for (var i = 0; i < cartItems.length; i++) {
	  var cartBox = cartItems[i];
	  var title = cartBox.getElementsByClassName('cart-product-title')[0].innerText;
	  var price = cartBox.getElementsByClassName('cart-price')[0].innerText;
	  var quantity = cartBox.getElementsByClassName('cart-quantity')[0].value;
	  var productImg = cartBox.getElementsByClassName('cart-img')[0].src;
  
	  // Tạo đối tượng chứa thông tin của sản phẩm
	  var product = {
		title: title,
		price: price,
		quantity: quantity,
		productImg: productImg
	  };
  
	  // Thêm đối tượng sản phẩm vào mảng cartData
	  cartData.push(product);
	}
  
	// Chuyển đổi mảng cartData thành chuỗi JSON
	var jsonString = JSON.stringify(cartData);
  
	// Lưu chuỗi JSON vào localStorage với một khóa (key) là 'cartData'
	localStorage.setItem('cartData', jsonString);
  }


  function getCartFromStorage() {
	var cartData = localStorage.getItem('cartData');
	var cartItemsContainer = document.querySelector('.cart-content');
	cartItemsContainer.innerHTML = '';
  
	// Kiểm tra xem dữ liệu giỏ hàng có tồn tại trong localStorage không
	if (cartData) {
	  var cartItems = JSON.parse(cartData);
  
	  // Lặp qua từng sản phẩm trong giỏ hàng và hiển thị thông tin ra
	  for (var i = 0; i < cartItems.length; i++) {
		var product = cartItems[i];
  
		// Tạo phần tử HTML để hiển thị thông tin sản phẩm
		var cartShopBox = document.createElement('div');
		cartShopBox.classList.add('cart-box');
		
		var cartBoxContent = `
		  <img src="${product.productImg}"
			style="width: 100px; height: 100px; object-fit: contain; padding: 10px;" alt="" class="cart-img">
		  <div class="detail-box" style="display: grid; row-gap: 0.5rem;">
			<div class="cart-product-title" style="font-size: 1rem; text-transform: uppercase;">${product.title}</div>
			<div class="cart-price" style="font-weight: 600;">${product.price}</div>
			<input type="number" value="${product.quantity}" class="cart-quantity"
			  style="border: 1px solid; outline-color: rgb(0, 0, 0); width: 2.4rem; text-align: center; font-size: 1rem; ">
		  </div>
		  <!-- Remove cart -->
		  <i class="fa-solid fa-trash cart-remove"
			style="font-size: 19px; cursor: pointer; margin-top: 2rem;"></i>
		`;
  
		cartShopBox.innerHTML = cartBoxContent;
		cartItemsContainer.appendChild(cartShopBox);
  
		var removeCartButton = cartShopBox.querySelector('.cart-remove');
		removeCartButton.addEventListener('click', removeCartItem);
  
		var quantityInput = cartShopBox.querySelector('.cart-quantity');
		quantityInput.addEventListener('change', quantityChanged);
	  }
	}
  }
  
// Hàm xử lý sự kiện lưu thông tin giỏ hàng vào local storage
function saveCartToStorage() {
	// Lấy thông tin giỏ hàng từ giao diện và lưu vào biến cartData
  
	// Lưu cartData vào local storage
	localStorage.setItem('cart', JSON.stringify(cartData));
  }
  
  // Gắn hàm xử lý sự kiện vào sự kiện beforeunload
  window.addEventListener('beforeunload', saveCartToStorage);
  
  