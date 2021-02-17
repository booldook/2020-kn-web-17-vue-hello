new Vue({
	el: '#app',
	data: {
		title: 'Vue | Page형식으로 맛보기',
		titleSub: '이미지 검색',
		search: '',
		isSearch: false,
	},
	methods: {
		onSearchRemove(e) {
			this.search = '';
		}
	}
});