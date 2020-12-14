/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_views_product_page_js"],{

/***/ "./src/views/product/page.js":
/*!***********************************!*\
  !*** ./src/views/product/page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar display = function display(data, hash) {\n  var endpoint = hash.split('/').pop();\n  var product = data.products.find(function (prod) {\n    return prod.id === endpoint;\n  });\n  return \"\\n  <div class=\\\"container-fluid\\\">\\n    <div class=\\\"row\\\">\\n      <div class=\\\"col-md-4\\\">\\n        <img src=\\\"./images/\".concat(product.images, \".jpg\\\" style=\\\"width: 100%\\\">\\n      </div>\\n      <div class=\\\"col-md-8\\\">\\n        <h1>\").concat(product.productName, \"</h1>\\n        <p>\").concat(product.productDescription, \"</p>\\n\\n        <hr>\\n\\n        <p>Weight: \").concat(product.weight, \" <br>\\n          Price: \").concat(product.price, \"\\n        </p>\\n        <button type=\\\"button\\\" class=\\\"cartbtn btn btn-primary\\\" id=\\\"\").concat(product.id, \"\\\">Add to cart</button>\\n        <hr>\\n\\n        <h3>Related products</h3>\\n        <div class=\\\"row\\\">\\n          \").concat(data.products.filter(function (x, i) {\n    return product.relatedProductIds.includes(i);\n  }).map(function (prod) {\n    return \"\\n            <div class=\\\"col-md-4\\\">\\n              <div class=\\\"thumbnail\\\">\\n                <a href=\\\"#product/\".concat(prod.id, \"\\\">\\n                  <img class=\\\"img-thumbnail\\\" src=\\\"./images/\").concat(prod.images, \".jpg\\\" alt=\\\"\").concat(prod.productName, \"\\\" style=\\\"width:100%\\\">\\n                  <div class=\\\"caption\\\">\\n                    <p>\").concat(prod.productName, \"</p>\\n                  </div>\\n                </a>\\n              </div>\\n            </div>\\n            \");\n  }).join('\\n'), \"\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n  \");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://my-webpack-project/./src/views/product/page.js?");

/***/ })

}]);