//===============Filter products at store pages==============
const selectSortBy = document.getElementById('select-sort-by');

(function () {
	const selectSortByOptions = selectSortBy.getElementsByTagName('option');
	const urlParams = new URLSearchParams(window.location.search);
	const sortBy = urlParams.get('sort-by');
	console.log(selectSortByOptions);
	for (let option of selectSortByOptions) {
		if (option.value === sortBy) {
			option.selected = 'selected';
		}
	}
	selectSortBy.onchange = function () {
		window.location.href = `/src/pages/store/Accessory.html?${this.name}=${this.value}`;
	};
})();

//Fake data used while waiting for fetch data from server function
let productsAccessory = [
	{
		productId: 1,
		productName: 'Quần',
		price: '560,000vnd',
		avatar: '/public/static resources/img/ao1.jpeg',
		avatar2: '/public/static resources/img/ao2.jpeg',
		moreImage: ['', '', '', ''],
		alias: '',
		description: '',
		amount: 'ProductDetail.html',
		viewCount: 0,
		likeCount: 0,
	},
	{
		productId: 2,
		productName: 'Áo',
		price: '560,000vnd',
		avatar: '/public/static resources/img/aoxanh1.jpeg',
		avatar2: '/public/static resources/img/aoxanh2.jpeg',
		moreImage: ['', '', '', ''],
		alias: '',
		description: '',
		amount: 0,
		viewCount: 0,
		likeCount: 0,
	},
	{
		productId: 3,
		productName: 'Phụ kiện',
		price: '560,000vnd',
		avatar: '/public/static resources/img/aotrang1.jpeg',
		avatar2: '/public/static resources/img/aotrang2.jpeg',
		moreImage: ['', '', '', ''],
		alias: '',
		description: '',
		amount: 0,
		viewCount: 0,
		likeCount: 0,
	},
	{
		productId: 4,
		productName: 'Quần',
		price: '560,000vnd',
		avatar: '/public/static resources/img/aotrangT1.jpeg',
		avatar2: '/public/static resources/img/aotrangT2.jpeg',
		moreImage: ['', '', '', ''],
		alias: '',
		description: '',
		amount: 0,
		viewCount: 0,
		likeCount: 0,
	},
	{
		productId: 5,
		productName: 'Áo khoác',
		price: '560,000vnd',
		avatar: '/public/static resources/img/aotrangK1.jpeg',
		avatar2: '/public/static resources/img/aotrangK2.jpeg',
		alias: '',
		description: '',
		amount: 0,
		viewCount: 0,
		likeCount: 0,
	},
	{
		productId: 6,
		productName: 'Áo khoác',
		price: '560,000vnd',
		avatar: '/public/static resources/img/aoxamP1.jpeg',
		avatar2: '/public/static resources/img/aoxamP2.jpeg',
		alias: '',
		description: '',
		amount: 0,
		viewCount: 0,
		likeCount: 0,
	},
	{
		productId: 7,
		productName: 'Áo khoác',
		price: '560,000vnd',
		avatar: '/public/static resources/img/aotulip1.jpeg',
		avatar2: '/public/static resources/img/aotulip2.jpeg',
		alias: '',
		description: '',
		amount: 0,
		viewCount: 0,
		likeCount: 0,
	},
];

let start = 0;
const limit = 2;
const listProductShirt = document.getElementById('list-product-accessory');
const showMoreBtn = document.getElementById('show_more_btn');
function loadMoreProductsAccessory() {
	//TODO: get count shirt products from server
	if (start > productsAccessory.length - 1) {
		showMoreBtn.remove();
		return;
	}

	//TODO: fetch paginated data from the server
	const products = productsAccessory.slice(start, start + limit);

	for (let i = 0; i < products.length; i++) {
		listProductShirt.innerHTML += `
        <div class="product-shirt-noibat">
        <a class="product-shirt-a" href="">
            <img class="product-shirt-1 "src="${[
				products[i].avatar,
			]}" alt="MatSau">
            <img class="product-shirt-2 "src="${[
				products[i].avatar2,
			]}" alt="MatTruoc">
        </a>
            <div class="product-shirt-price">
                <h1 class="product-shirt-title">${[
					products[i].productName,
				]}</h1>
                <p class="product-shirt-title ">${[products[i].price]}</p>
            </div>
        </div>
        `;
	}
	start += limit;
}

loadMoreProductsAccessory();
