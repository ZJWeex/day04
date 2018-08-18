# POST请求中的问题
## 返回的数据类型
```
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

```

## POST请求头问题
```
//官方的
stream.fetch({
    method: 'POST',
    // timeout: 30000,//30s
    url: resultURL,
    type:jsonType,
    headers:HTTPHeader,
    body:JSON.stringify(params)
  },function(ret){
}
```
由于服务端的问题请求不到数据，可尝试拼接到URL上即GET参数处理的方式
```
stream.fetch({
  method: 'POST',
  // timeout: 30000,//30s
  url: resultURL +'?' + toParams(params),
  type:jsonType,
  headers:HTTPHeader

},function(ret){
}
```

