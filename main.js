/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cartLogic.js":
/*!**************************!*\
  !*** ./src/cartLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Cart\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Cart = /*#__PURE__*/function () {\n  function Cart() {\n    _classCallCheck(this, Cart);\n\n    if (localStorage.getItem('cart') == null) {\n      localStorage.setItem('cart', '{}');\n    }\n  }\n\n  _createClass(Cart, [{\n    key: \"add\",\n    value: function add(itemId) {\n      var value = JSON.parse(localStorage.getItem('cart'));\n\n      if (value[itemId] === undefined) {\n        value[itemId] = 1;\n      } else {\n        ++value[itemId];\n      }\n\n      localStorage.setItem('cart', JSON.stringify(value));\n    }\n  }, {\n    key: \"getItems\",\n    value: function getItems() {\n      return JSON.parse(localStorage.getItem('cart'));\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(itemId) {\n      var value = JSON.parse(localStorage.getItem('cart'));\n      if (!value[itemId]) return;\n      --value[itemId];\n      if (value[itemId] === 0) delete value[itemId];\n      localStorage.setItem('cart', JSON.stringify(value));\n    }\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty() {\n      var value = JSON.parse(localStorage.getItem('cart'));\n      return Object.keys(value).length === 0;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      localStorage.setItem('cart', '{}');\n    }\n  }, {\n    key: \"getPrice\",\n    value: function getPrice(data) {\n      var orders = this.getItems();\n      var res = 0;\n\n      var _loop = function _loop(key) {\n        res += data.find(function (product) {\n          return product.id === key;\n        }).price * orders[key];\n      };\n\n      for (var key in orders) {\n        _loop(key);\n      }\n\n      return res;\n    }\n  }, {\n    key: \"visualize\",\n    value: function visualize(data, view) {\n      var cartproducts = this.getItems();\n      var products = data.products.filter(function (prod) {\n        return Object.keys(cartproducts).includes(prod.id);\n      });\n      view.innerHTML = \"\\n    <div class=\\\"list-group\\\">\\n      \".concat(products.map(function (product) {\n        return \"<a class=\\\"list-group-item list-group-item-action flex-column align-items-start\\\">\\n        <div class=\\\"d-flex w-100 justify-content-between\\\">\\n          <h5 class=\\\"mb-1\\\">\".concat(product.productName, \"</h5>\\n        </div>\\n        <p class=\\\"mb-1\\\">\").concat(cartproducts[product.id], \" for \").concat(product.price, \" each</p>\\n        <hr>\\n        <button class=\\\"cartbtn btn btn-outline-primary\\\" id=\\\"\").concat(product.id, \"\\\" style=\\\"float: left\\\">Add</button>\\n        <button class=\\\"removebtn btn btn-outline-primary\\\" id=\\\"\").concat(product.id, \"\\\">Remove</button>\\n          \\n      </a>\");\n      }), \"\\n        <h3>Total: \").concat(this.getPrice(data.products), \"</h3>\\n    </div>\\n    \");\n    }\n  }]);\n\n  return Cart;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/cartLogic.js?");

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Client\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Client = /*#__PURE__*/function () {\n  function Client() {\n    _classCallCheck(this, Client);\n  }\n\n  _createClass(Client, [{\n    key: \"getData\",\n    value: function getData(endpoint) {\n      return fetch(\"https://my-json-server.typicode.com/gazinaft/pizza_db/\".concat(endpoint)).then(function (response) {\n        return response.json();\n      })[\"catch\"](function (e) {\n        return console.log(e);\n      });\n    }\n  }, {\n    key: \"post\",\n    value: function post(data, endpoint) {\n      return fetch(\"https://my-json-server.typicode.com/gazinaft/pizza_db/\".concat(endpoint), {\n        method: 'POST',\n        body: JSON.stringify(data)\n      }).then(function (response) {\n        return response.json();\n      })[\"catch\"](function (e) {\n        return console.log(e);\n      });\n    }\n  }]);\n\n  return Client;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/client.js?");

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ RenderEngine\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RenderEngine = /*#__PURE__*/function () {\n  function RenderEngine() {\n    _classCallCheck(this, RenderEngine);\n  }\n\n  _createClass(RenderEngine, [{\n    key: \"render\",\n    value: function render(view) {\n      var root = document.getElementById('main');\n      root.innerHTML = view;\n    }\n  }, {\n    key: \"loader\",\n    value: function loader() {\n      var root = document.getElementById('main');\n      root.innerHTML = \"\\n    <div class=\\\"text-center\\\">\\n      <div class=\\\"spinner-border text-primary\\\" role=\\\"status\\\" style=\\\"width: 5rem; height: 5rem;\\\">\\n        <span class=\\\"sr-only\\\">Loading...</span>\\n      </div>\\n    </div>\\n    \";\n    }\n  }]);\n\n  return RenderEngine;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/engine.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Router\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Router = /*#__PURE__*/function () {\n  function Router() {\n    _classCallCheck(this, Router);\n  }\n\n  _createClass(Router, [{\n    key: \"getHash\",\n    value: function getHash() {\n      return window.location.hash.split('#')[1];\n    }\n  }, {\n    key: \"changeURL\",\n    value: function changeURL(url) {\n      globalThis.history.pushState({}, null, \"#\".concat(url));\n    }\n  }, {\n    key: \"replace\",\n    value: function replace(hash) {\n      globalThis.history.replaceState({}, null, \"#\".concat(hash));\n    }\n  }, {\n    key: \"goBack\",\n    value: function goBack() {\n      history.back();\n    }\n  }, {\n    key: \"getShit\",\n    value: function getShit(midURL) {\n      return function () {\n        var endURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n        return {\n          'cart': {\n            viewName: 'cart',\n            endpointName: 'db'\n          },\n          'catalog': {\n            viewName: \"\".concat(endURL ? 'catalog/page' : 'catalog'),\n            endpointName: 'db'\n          },\n          'order': {\n            viewName: 'order',\n            endpointName: 'db'\n          },\n          'action': {\n            viewName: \"\".concat(endURL ? 'action/page' : 'mainPage'),\n            endpointName: 'db'\n          },\n          'product': {\n            viewName: \"\".concat(endURL ? 'product/page' : 'mainPage'),\n            endpointName: 'db'\n          }\n        }[midURL] || {\n          viewName: 'mainPage',\n          endpointName: 'db'\n        };\n      };\n    }\n  }, {\n    key: \"getState\",\n    value: function getState() {\n      if (!this.getHash()) return {\n        viewName: 'mainPage',\n        endpointName: 'db'\n      };\n\n      if (this.getHash().includes('/')) {\n        var list = this.getHash().split('/');\n        return this.getShit(list[0])(list[1]);\n      }\n\n      return this.getShit(this.getHash())();\n    }\n  }]);\n\n  return Router;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/router.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.js */ \"./src/engine.js\");\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.js */ \"./src/client.js\");\n/* harmony import */ var _cartLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartLogic.js */ \"./src/cartLogic.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar openNav = function openNav() {\n  document.getElementById('myNav').style.width = '100%';\n};\n\nvar closeNav = function closeNav() {\n  document.getElementById('myNav').style.width = '0%';\n};\n\nvar show = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var tag, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tag = document.getElementById('dropdown');\n\n            if (!tag.classList.contains('show')) {\n              _context.next = 5;\n              break;\n            }\n\n            tag.classList.remove('show');\n            _context.next = 10;\n            break;\n\n          case 5:\n            tag.classList.add('show');\n            _context.next = 8;\n            return client.getData('db');\n\n          case 8:\n            data = _context.sent;\n            cart.visualize(data, tag);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function show() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar changeHash = function changeHash(hash) {\n  router.changeURL(hash);\n  mainF();\n};\n\ndocument.addEventListener('click', function (evt) {\n  switch (evt.target.className.split(' ')[0]) {\n    case 'closebt':\n    case 'closebtn':\n      closeNav();\n      break;\n\n    case 'openbtn':\n      openNav();\n      break;\n\n    case 'cartbtn':\n      cartadd(evt.target.id);\n      break;\n\n    case 'removebtn':\n      cartremove(evt.target.id);\n      break;\n\n    case 'hashbtn':\n      changeHash(evt.target.id);\n      break;\n\n    case 'showbtn':\n      show();\n      break;\n\n    case 'submitformbtn':\n      submitForm();\n      break;\n\n    default:\n      break;\n  }\n});\nvar router = new _router_js__WEBPACK_IMPORTED_MODULE_1__.default();\nvar client = new _client_js__WEBPACK_IMPORTED_MODULE_2__.default();\nvar engine = new _engine_js__WEBPACK_IMPORTED_MODULE_0__.default();\nvar cart = new _cartLogic_js__WEBPACK_IMPORTED_MODULE_3__.default();\n\nvar cartadd = function cartadd(item) {\n  cart.add(item);\n};\n\nvar cartremove = function cartremove(item) {\n  cart[\"delete\"](item);\n};\n\nvar submitForm = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var email, phone, name, address, time, cash, db, obj, orderId, view;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            email = document.getElementById('email');\n            phone = document.getElementById('phone');\n            name = document.getElementById('name');\n            address = document.getElementById('address');\n            time = document.getElementById('time');\n            cash = document.getElementById('cash');\n            engine.loader();\n            _context2.next = 9;\n            return client.getData('db');\n\n          case 9:\n            db = _context2.sent;\n            console.log(db);\n            console.log(cart.getItems());\n            obj = {\n              email: email.value,\n              phone: phone.value,\n              name: name.value,\n              address: address.value,\n              time: time.value,\n              payment: cash.checked ? 'cash' : 'card',\n              order: cart.getItems(),\n              price: cart.getPrice(db.products)\n            };\n            console.log(JSON.stringify(obj));\n            cart.clear();\n            _context2.next = 17;\n            return client.post(obj, 'orders');\n\n          case 17:\n            orderId = _context2.sent.id;\n            _context2.next = 20;\n            return __webpack_require__.e(/*! import() */ \"src_views_orderDone_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./views/orderDone.js */ \"./src/views/orderDone.js\"));\n\n          case 20:\n            view = _context2.sent[\"default\"];\n            window.removeEventListener('hashchange', mainF);\n            router.changeURL(\"order\".concat(orderId));\n            engine.render(view(obj, db.products));\n            window.addEventListener('hashchange', mainF);\n\n          case 25:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function submitForm() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nfunction loadMain() {\n  return _loadMain.apply(this, arguments);\n}\n\nfunction _loadMain() {\n  _loadMain = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var view, data;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return __webpack_require__.e(/*! import() */ \"src_views_mainPage_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./views/mainPage.js */ \"./src/views/mainPage.js\"));\n\n          case 2:\n            view = _context3.sent;\n            _context3.next = 5;\n            return client.getData('db');\n\n          case 5:\n            data = _context3.sent;\n            engine.render(view(data));\n\n          case 7:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _loadMain.apply(this, arguments);\n}\n\nvar view;\n\nvar mainF = function mainF() {\n  var _router$getState = router.getState(),\n      viewName = _router$getState.viewName,\n      endpointName = _router$getState.endpointName;\n\n  engine.loader();\n  __webpack_require__(\"./src/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\".concat(viewName, \".js\")).then(function (viewModel) {\n    view = viewModel[\"default\"];\n    return client.getData(endpointName);\n  })[\"catch\"](function (reason) {\n    console.log(reason);\n    loadMain();\n  }).then(function (data) {\n    engine.render(view(data, router.getHash()));\n  })[\"catch\"](function (reason) {\n    console.log(reason);\n  });\n};\n\nmainF();\nwindow.addEventListener('hashchange', mainF);\n\nvar checkEmpty = function checkEmpty() {\n  if (cart.isEmpty() && router.getHash() == 'order') {\n    router.goBack();\n  }\n};\n\nwindow.addEventListener('hashchange', checkEmpty);\n\n//# sourceURL=webpack://my-webpack-project/./src/script.js?");

/***/ }),

/***/ "./src/views lazy recursive ^\\.\\/.*\\.js$":
/*!*******************************************************!*\
  !*** ./src/views/ lazy ^\.\/.*\.js$ namespace object ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./action/page.js\": [\n\t\t\"./src/views/action/page.js\",\n\t\t\"src_views_action_page_js\"\n\t],\n\t\"./catalog.js\": [\n\t\t\"./src/views/catalog.js\",\n\t\t\"src_views_catalog_js\"\n\t],\n\t\"./catalog/page.js\": [\n\t\t\"./src/views/catalog/page.js\",\n\t\t\"src_views_catalog_page_js\"\n\t],\n\t\"./mainPage.js\": [\n\t\t\"./src/views/mainPage.js\",\n\t\t\"src_views_mainPage_js\"\n\t],\n\t\"./order.js\": [\n\t\t\"./src/views/order.js\",\n\t\t\"src_views_order_js\"\n\t],\n\t\"./orderDone.js\": [\n\t\t\"./src/views/orderDone.js\",\n\t\t\"src_views_orderDone_js\"\n\t],\n\t\"./product/page.js\": [\n\t\t\"./src/views/product/page.js\",\n\t\t\"src_views_product_page_js\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => Object.keys(map);\nwebpackAsyncContext.id = \"./src/views lazy recursive ^\\\\.\\\\/.*\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://my-webpack-project/./src/views/_lazy_^\\.\\/.*\\.js$_namespace_object?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "my-webpack-project:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;