/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_views_orderDone_js"],{

/***/ "./src/views/orderDone.js":
/*!********************************!*\
  !*** ./src/views/orderDone.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar display = function display(data, db) {\n  return \"\\n  <div class=\\\"container\\\" max-width=\\\"600px\\\">\\n    <h1>Delivery details</h1>\\n    <p>\\n      Email: <b>\".concat(data.email, \"</b> <br>\\n      Phone number: \").concat(data.phone, \" <br>\\n      Name: \").concat(data.name, \" <br>\\n      Adress: \").concat(data.adress, \" <br>\\n      Time: \").concat(data.time, \" <br>\\n      Payment: \").concat(data.payment, \" <br>\\n    </p>\\n\\n    <hr>\\n\\n    <h1>Order</h1>\\n    \").concat(Object.keys(data.order).map(function (key) {\n    console.log(db);\n    var product = db.find(function (x) {\n      return x.id === key;\n    });\n    var quantity = data.order[key];\n    return \"\\n      \".concat(product.productName, \"\\n      <h5 style=\\\"text-align: left\\\">\").concat(quantity, \" for \").concat(quantity * product.price, \"</h5>\\n    \");\n  }).reduce(function (acc, item) {\n    return acc + item;\n  }), \"\\n\\n    <hr>\\n\\n    <p class=\\\"lead\\\">Total: \").concat(data.price, \"</p>\\n  </div>\\n  \");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://my-webpack-project/./src/views/orderDone.js?");

/***/ })

}]);