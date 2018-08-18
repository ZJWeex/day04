
// 配置API接口地址
const baseUrl = 'http://ts.taocaimall.com/';
// 引入 弹窗组件
var modal = weex.requireModule('modal');

// 自定义判断元素类型JS
function toType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }
// 参数过滤函数
function filterNull (objc) {
    for (var key in objc) {
      if (objc[key] === null) {
        delete objc[key]
      }
      if (toType(objc[key]) === 'string') {
        objc[key] = objc[key].trim()
      } else if (toType(objc[key]) === 'object') {
        objc[key] = filterNull(objc[key])
      } else if (toType(objc[key]) === 'array') {
        objc[key] = filterNull(objc[key])
      }
    }
    return objc
  }

// 工具方法
function toParams(obj) {
    var param = ""
    if(!obj)return param;

    for(const name in obj) {
      if(typeof obj[name] != 'function') {
        param += "&" + name + "=" + encodeURI(obj[name])
      }
    }
    return param.substring(1)
  };

function getRequest(url, params,success,failure) {
    // 引入请求数据组件
    var stream = weex.requireModule('stream');
    var resultURL = url;
   if(url.indexOf('http') == -1){
     resultURL = baseUrl + url;
   }

    stream.fetch({
        method: 'GET',
        url: resultURL + toParams(params),
        type:'jsonp'
      },function(ret) {
        if(!ret.ok){
          modal.toast({
            message: 'request failed',
            duration: 0.3
          })
          failure('请求失败');
        }else{
          var result = JSON.stringify(ret.data);
          console.log('get:'+result);
          success(result)
        }
      },function(response){
        console.log('get in progress:'+response.length);
      })

}
//params为对象类型
function postRequest(url, params,success,failure){
    // 引入请求数据组件
   var stream = weex.requireModule('stream');
   var resultURL = url;
   if(url.indexOf('http') == -1){
     resultURL = baseUrl + url;
   }
    // 过滤参数
  if (params) {
    params = filterNull(params)
  }

  var HTTPHeader = {}
  var jsonType = ''
  if (WXEnvironment.platform.toLowerCase() === 'web'){
    HTTPHeader = {'Content-Type':'application/json'}
    jsonType = 'json'
  }else if(WXEnvironment.platform.toLowerCase() === 'ios'){
    HTTPHeader = {'Content-Type':'application/json;charset=utf-8'}
    jsonType = 'jsonp'
  }else if(WXEnvironment.platform.toLowerCase() === 'android'){
    HTTPHeader = {'Content-Type':'application/json'}
    jsonType = 'text'
  }
  stream.fetch({
    method: 'POST',
    // timeout: 30000,//30s
    url: resultURL,
    type:jsonType,
    headers:HTTPHeader,
    body:JSON.stringify(params)
  },function(ret){
    if(!ret.ok){
      failure('请求失败');
    }else{
      var result = JSON.stringify(ret.data);
      console.log('post:'+result);
      success(result);
    }
  },function(response){
    console.log('post in progress:'+response.length);
  })
}
//
function postModelRequest(url, params,success,failure){
  // 引入请求数据组件
 var stream = weex.requireModule('stream');
 var resultURL = url;
 if(url.indexOf('http') == -1){
   resultURL = baseUrl + url;
 }
  // 过滤参数
if (params) {
  params = filterNull(params)
}

var HTTPHeader = {'Content-Type':'application/json;charset=utf-8'}
var jsonType = 'jsonp'
if (WXEnvironment.platform.toLowerCase() === 'web'){
  HTTPHeader = {'Content-Type':'application/json'}
  jsonType = 'jsonp'
}else if(WXEnvironment.platform.toLowerCase() === 'ios'){
  HTTPHeader = {'Content-Type':'application/json;charset=utf-8'}
  jsonType = 'jsonp'
}else if(WXEnvironment.platform.toLowerCase() === 'android'){
  HTTPHeader = {'Content-Type':'application/json'}
  jsonType = 'text'
}

stream.fetch({
  method: 'POST',
  // timeout: 30000,//30s
  url: resultURL +'?' + toParams(params),
  type:jsonType,
  headers:HTTPHeader

},function(ret){
  if(!ret.ok){
    failure('请求失败');
  }else{
    var result = JSON.stringify(ret.data);
    console.log('post:'+result);
    if(WXEnvironment.platform === 'android'){
      jsonString = JSON.parse(jsonString)
    }
    success(result);
  }
},function(response){
  console.log('post in progress:'+response.length);
})
}

// 返回在vue模板中的调用接口
//post请求需要注意，有时候参数放body里，会有问题。不知道是服务器端的问题还是weex本身的问题。 
export default {
    get: function (url, params, success, failure) {
      return getRequest(url, params, success, failure)
    },
    get: function (url, success, failure) {
      return getRequest(url, {}, success, failure)
    },
    post: function (url, params, success, failure) {
      return postRequest(url, params, success, failure)
    },
    postModel: function (url, params, success, failure) {
      return postModelRequest(url, params, success, failure)
    }
  }

  //使用
  /*
  import Fetch from '@/Module/Fetch.js'
  //请求
  Fetch.post('uri',{key:'vaule'},function(data){

      },function(err){
        
      })
  */