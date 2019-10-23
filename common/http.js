
import $urls from './urls.js'

/**
 * get
 *
 * @param {*} url
 * @param {*} data
 */
function get(url, data) {
	return request(url, data, 'GET')
}

/**
 * post
 *
 * @param {*} url
 * @param {*} data
 */
function post(url, data) {
	return request(url, data, 'POST')
}

/**
 * request
 *
 * @param {String} url
 * @param {Object} data
 * @param {String} method
 */

function request(url, data, method) {
	return new Promise((resolve, reject) => {
		uni.request({
			data,
			method,
			url: $urls[url],
			dataType: 'json',
			responseType: 'text',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				from: 'wxapp',
				version: '1.0',
				'x-requested-with': 'xmlhttprequest',
			},
			success:(res)=> {
				resolve(res);
			},
			fail:(res)=>{
				reject(res);
			}
		})
	});
}

export default{
	get,
	post,
}