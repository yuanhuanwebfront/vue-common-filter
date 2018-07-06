function transDoubleNum(num) {
	return num >= 10 ? num : '0' + num;
}



const filterInfo = {
	install(Vue, options) {

		//  转换时间为制定格式的时间字符串
		Vue.filter('date', (val, format) => {
			let realDate = new Date(val),
				year = realDate.getFullYear(),
				month = transDoubleNum(realDate.getMonth() + 1),
				day = transDoubleNum(realDate.getDate()),
				hour = realDate.getHours(),
				minute = transDoubleNum(realDate.getMinutes()),
				second = transDoubleNum(realDate.getSeconds());

			let formatInfo = format.replace(/yyyy/g, year)
				.replace(/MM/g, month)
				.replace(/dd/g, day)
				.replace(/HH/g, transDoubleNum(hour))
				.replace(/hh/g, hour)
				.replace(/mm/g, minute)
				.replace(/ss/g, second);

			return formatInfo;
		})

		// 将分的金额转换为元，divideNum为需要转换为元需要除的倍数
		Vue.filter('rmb', (val, divideNum) => {
			let realVal = Number(val);
			if (Number.isNaN(realVal)) {
				console.error('转换数据不是数字，请重试')
			} else {
				return parseFloat(realVal / divideNum).toFixed(2);
			}
		})

	}
}

export default filterInfo;