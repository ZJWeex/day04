// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(4)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/jion/Desktop/Weex2018/day04/src/components/HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-469af010"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "button": {
    "fontSize": "60",
    "width": "450",
    "textAlign": "center",
    "marginTop": "30",
    "paddingTop": "20",
    "paddingBottom": "20",
    "borderWidth": "2",
    "borderStyle": "solid",
    "color": "#666666",
    "borderColor": "#DDDDDD",
    "backgroundColor": "#F5F5F5"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fetch = __webpack_require__(3);

var _Fetch2 = _interopRequireDefault(_Fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//

var stream = weex.requireModule('stream');

exports.default = {
  name: 'Hello',
  data: function data() {
    return {
      GET_URL: 'http://app.taocaimall.com/taocaimall/superiorGoodsTemplate.json',
      POST_URL: 'http://ts.taocaimall.com/cg/pub/about/CgVersion'
    };
  },

  created: function created() {},
  methods: {
    postFetch: function postFetch() {
      // var param = {app_version:'1.0.0',os_flag:'CG_ios'};
      var param = { 'os_flag': 'ios' };
      // var url = 'cg/pub/about/CgVersion';
      var url = 'http://app.taocaimall.com/taocaimall/version.json';
      _Fetch2.default.post(url, param, function (data) {
        modal.alert({
          message: data
        }, function (vaule) {});
      }, function (err) {
        modal.alert({
          message: err
        }, function (vaule) {});
      });
    },
    getFetch: function getFetch() {
      _Fetch2.default.get(this.GET_URL, function (data) {
        modal.alert({
          message: data
        }, function (vaule) {});
      }, function (er) {
        modal.alert({
          message: err
        }, function (vaule) {});
      });
    },
    postLoadData: function postLoadData() {
      var HTTPHeader = {};
      var jsonType = '';
      if (WXEnvironment.platform === 'Web') {
        HTTPHeader = { 'Content-Type': 'application/json' };
        jsonType = 'json';
      } else {
        HTTPHeader = { 'Content-Type': 'application/json;charset=utf-8' };
        jsonType = 'jsonp';
      }
      stream.fetch({
        method: 'POST',
        url: this.POST_URL,
        type: jsonType,
        headers: HTTPHeader,
        body: JSON.stringify({ app_version: '1.0.0', os_flag: 'CG_ios' })
      }, function (ret) {
        if (!ret.ok) {
          modal.toast({
            message: 'request failed',
            duration: 0.3
          });
        } else {
          var result = JSON.stringify(ret.data);
          console.log('post:' + result);
          modal.alert({
            message: result
          }, function (vaule) {});
        }
      }, function (response) {
        console.log('get in progress:' + response.length);
        console.log('response:' + response);
      });
    },
    getLoadData: function getLoadData() {
      stream.fetch({
        method: 'GET',
        url: this.GET_URL,
        type: 'jsonp'
      }, function (ret) {
        if (!ret.ok) {
          modal.toast({
            message: 'request failed',
            duration: 0.3
          });
        } else {
          var result = JSON.stringify(ret.data);
          console.log('get:' + result);
          modal.alert({
            message: result
          }, function (vaule) {});
        }
      }, function (response) {
        console.log('get in progress:' + response.length);
        console.log('response:' + response);
      });
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get$get$post;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 配置API接口地址
var baseUrl = 'http://ts.taocaimall.com/';
// 引入 弹窗组件
var modal = weex.requireModule('modal');

// 自定义判断元素类型JS
function toType(obj) {
  return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
// 参数过滤函数
function filterNull(objc) {
  for (var key in objc) {
    if (objc[key] === null) {
      delete objc[key];
    }
    if (toType(objc[key]) === 'string') {
      objc[key] = objc[key].trim();
    } else if (toType(objc[key]) === 'object') {
      objc[key] = filterNull(objc[key]);
    } else if (toType(objc[key]) === 'array') {
      objc[key] = filterNull(objc[key]);
    }
  }
  return objc;
}

// 工具方法
function toParams(obj) {
  var param = "";
  if (!obj) return param;

  for (var name in obj) {
    if (typeof obj[name] != 'function') {
      param += "&" + name + "=" + encodeURI(obj[name]);
    }
  }
  return param.substring(1);
};

function getRequest(url, params, success, failure) {
  // 引入请求数据组件
  var stream = weex.requireModule('stream');
  var resultURL = url;
  if (url.indexOf('http') == -1) {
    resultURL = baseUrl + url;
  }

  stream.fetch({
    method: 'GET',
    url: resultURL + toParams(params),
    type: 'jsonp'
  }, function (ret) {
    if (!ret.ok) {
      modal.toast({
        message: 'request failed',
        duration: 0.3
      });
      failure('请求失败');
    } else {
      var result = JSON.stringify(ret.data);
      console.log('get:' + result);
      success(result);
    }
  }, function (response) {
    console.log('get in progress:' + response.length);
  });
}
//params为对象类型
function postRequest(url, params, success, failure) {
  // 引入请求数据组件
  var stream = weex.requireModule('stream');
  var resultURL = url;
  if (url.indexOf('http') == -1) {
    resultURL = baseUrl + url;
  }
  // 过滤参数
  if (params) {
    params = filterNull(params);
  }

  var HTTPHeader = {};
  var jsonType = '';
  if (WXEnvironment.platform === 'Web') {
    HTTPHeader = { 'Content-Type': 'application/json' };
    jsonType = 'json';
  } else {
    HTTPHeader = { 'Content-Type': 'application/json;charset=utf-8' };
    jsonType = 'jsonp';
  }
  stream.fetch({
    method: 'POST',
    // timeout: 30000,//30s
    url: resultURL,
    type: jsonType,
    headers: HTTPHeader,
    body: JSON.stringify(params)
  }, function (ret) {
    if (!ret.ok) {
      failure('请求失败');
    } else {
      var result = JSON.stringify(ret.data);
      console.log('post:' + result);
      success(result);
    }
  }, function (response) {
    console.log('post in progress:' + response.length);
  });
}

// 返回在vue模板中的调用接口
exports.default = (_get$get$post = {
  get: function get(url, params, success, failure) {
    return getRequest(url, params, success, failure);
  }
}, _defineProperty(_get$get$post, 'get', function get(url, success, failure) {
  return getRequest(url, {}, success, failure);
}), _defineProperty(_get$get$post, 'post', function post(url, params, success, failure) {
  // return postRequest(url, params, success, failure)
  return postRequest(url, { requestmodel: params }, success, failure);
}), _get$get$post);

//使用
/*
import Fetch from '@/Module/Fetch.js'
//请求
Fetch.post('uri',{key:'vaule'},function(data){
     },function(err){
      
    })
*/

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["subdiv"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.getFetch
    }
  }, [_vm._v("GET加载数据")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.postFetch
    }
  }, [_vm._v("POST加载数据")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HelloWorld = __webpack_require__(0);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HelloWorld2.default.el = '#root';
new Vue(_HelloWorld2.default);

/***/ })
/******/ ]);