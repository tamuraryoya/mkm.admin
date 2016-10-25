/*
 * JSONを参照して保持するモジュール
 * シングルトンで管理するためアクセスを抑えられる（はず）
 */

const request = require('superagent');

const dataStore = {
	rec: null
}

const updated = {
	rec: false
}

module.exports = {
	getRecommend: (eventName) => {
		// 取得済みの場合
		if(dataStore.rec) {
			console.log('ready')
			return dataStore.rec;
		}
		// 取得されていない場合
		else {
			request
				.get('./assets/recommend.json')
				.end((err, res) => {
					if(err) throw err;
					dataStore.rec = res.body
					obs.trigger(eventName, res.body);
				});
		}
	}
}