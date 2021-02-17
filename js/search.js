new Vue({
	el: '#app',
	data: {
		title: 'Vue | Page형식으로 맛보기',
		titleSub: '이미지 검색',
		search: '',
		isSearch: false,
		products: [],
		searchProducts: [],
	},
	created() {
		axios.get('../json/products.json')
		.then((r) => {
			this.products = r.data;
			this.searchProducts = this.products;
		})
		.catch((err) => {
			console.log(err);
		});
	},
	methods: {
		onSearchRemove(e) {
			this.search = '';
			this.searchProducts = this.products;
		},
		onSearch(e) {
			this.searchProducts = _.filter(this.products, o => o.title.includes(this.search));
		}
	}
});