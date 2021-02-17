new Vue({
	el: '#app',
	data: {
		title: '',
		boxShow: false,
		imgArr: [
			'../img/best1.jpg',
			'../img/best2.jpg',
			'../img/best3.jpg',
			'../img/best4.jpg',
		],
		imgSrc: '../img/best1.jpg',
		imgIdx: 0,
	},
	methods: {
		onBtnClick(e) {
			this.boxShow = !this.boxShow;
		},
		onImgClick(e) {
			this.imgIdx = (this.imgArr.length - 1 == this.imgIdx) ? 0 : this.imgIdx + 1;
			this.imgSrc = this.imgArr[this.imgIdx];
		}
	}
});