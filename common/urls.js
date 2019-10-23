let host = ""

if(process.env.NODE_ENV === 'development'){
	host = "http://yxapi.tianniu.cc";
    console.log('开发环境');
}else{
    console.log('生产环境')
	host = "https://s.sihurl.com";
}

let urls = {
  //注册
  register: "/api/merchant/user",
  // 登录
  login: "/api/merchant/auth", 
  //概览信息
  overviewInfo: "/api/merchant/overview",
};

for (let item in urls) {
  urls[item] = host + urls[item];
}

// 补充基础域名
urls["host"] = host;

urls["restful"] = function(name, id) {
  return urls[name] + "/" + id;
};

export default urls;
