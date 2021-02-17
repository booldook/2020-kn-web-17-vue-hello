new Vue({
	el: '#app',
	data: {
		title: 'Vue | Page형식으로 맛보기',
		titleSub: '이미지 검색',
		search: '',
		isSearch: false,
		products: [],
	},
	created() {
		axios.get('../json/products.json')
		.then((r) => {
			this.products = r.data;
		})
		.catch((err) => {
			console.log(err);
		});
	},
	methods: {
		onSearchRemove(e) {
			this.search = '';
		}
	}
});