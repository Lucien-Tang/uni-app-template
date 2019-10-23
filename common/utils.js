let toString = Object.prototype.toString;

/**
 * 判断传入值是否对象
 * @param {object} obj
 */
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

/**
 * 判断对象是否数组
 * @param {object} obj
 */
function isArray(obj) {
  return toString.call(obj) === "[object Array]";
}

/**
 * 判断对象是否函数
 * @param {object} obj
 */
function isFunction(obj) {
  return toString.call(obj) === "[object Function]";
}

/**
 * 判断对象是否布尔值
 * @param {object} obj
 */
function isBool(obj) {
  return toString.call(obj) === "[object Boolean]";
}

/**
 * 判断对象是否字符串
 * @param {Object} obj
 */
function isString(obj) {
  return typeof obj === "string";
}

/**
 * 判断对象是否数值
 * @param {object} obj
 */
function isNumber(obj) {
  return typeof obj === "number";
}

/**
 * 检查传入值是否为空
 * @param {object|string} obj
 */
function isEmpty(obj) {
  if (obj === null || typeof obj === "undefined" || obj === "") return true;

  if (typeof obj === "object") return Object.keys(obj).length === 0;

  if (typeof obj === "string") return obj.length === 0;
}

/**
 * 判断是否为正确手机号
 * @param {any}
 */
function isPhone(num) {
  return /^1[34578]\d{9}$/.test(num);
}

/**
 * 数据深拷贝
 * @param {Object} obj
 * @param {Fn} hash
 * @returns {Object}
 */

function deepClone(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== "object") {
    //如果不是复杂数据类型，直接返回
    return obj;
  }

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  /**
   * 如果obj是数组， 那么 obj.constructor 是 [Function: Array]
   * 如果obj是对象， 那么 obj.constructor 是 [Function: Object]
   */

  let t = new obj.constructor();
  hash.set(obj, t);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = deepClone(obj[key], hash);
    }
  }
  return t;
}


/**
 * 登录校验
 * 
 * @returns {Boolean}
 */

function isLogin() {
	let token = uni.getStorageSync('token_key');
	console.log(token)
	if(token == "") {
		uni.navigateTo({
		    url: '/pages/login/login.vue'
		});
		return
	}
	
}



export default {
  isObject,
  isFunction,
  isArray,
  isBool,
  isString,
  isNumber,
  isEmpty,
  isPhone,
  deepClone,
  isLogin
};
