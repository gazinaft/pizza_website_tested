/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_views_mainPage_js"],{

/***/ "./src/views/mainPage.js":
/*!*******************************!*\
  !*** ./src/views/mainPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar display = function display(data) {\n  return \"\\n  <div class=\\\"container\\\" style=\\\"height: 30vw; overflow: hidden; min-height: 270px\\\">\\n  <div class=\\\"pic-ctn\\\">\\n    \".concat(data.slider.map(function (slide) {\n    return \"\\n    <img src=\\\"./images/\".concat(slide.images, \".jpg\\\" alt=\\\"\\\" id=\\\"action/\").concat(slide.id, \"\\\" class=\\\"hashbtn pic\\\">\\n    \");\n  }).reduce(function (acc, item) {\n    return acc + item;\n  }), \"\\n  </div>\\n  </div>\\n  \").concat(data.categories.map(function (category, index) {\n    return \"\\n  <div style=\\\"height: 50px\\\"></div>\\n  <a href=\\\"#catalog/\".concat(category.id, \"\\\"><h1>\").concat(category.name, \"</h1></a>\\n  <div class=\\\"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 style=\\\"max-width: 100%\\\">\\n  \").concat(data.products.filter(function (product) {\n      return product.categoryId == index;\n    }).map(function (product) {\n      return \"\\n    <div class=\\\"card\\\" style=\\\"min-width: 90px\\\">\\n      <img class=\\\"card-img-top\\\" src=\\\"./images/\".concat(product.images, \".jpg\\\" alt=\\\"Card image cap\\\">\\n      <div class=\\\"card-body\\\">\\n        <a href=\\\"#product/\").concat(product.id, \"\\\"><h5 class=\\\"card-title\\\">\").concat(product.productName, \"</h5></a>\\n        <h6><strong>\").concat(product.price, \"</strong> uah</h6>\\n        <button type=\\\"button\\\" class=\\\"cartbtn btn btn-primary\\\" id=\\\"\").concat(product.id, \"\\\">Add to cart</button>\\n      </div>\\n      <div class=\\\"card-footer\\\">\\n        <small class=\\\"text-muted\\\">Last updated 3 mins ago</small>\\n      </div>\\n    </div>\\n  \");\n    }).join('\\n'), \"\\n  </div>\\n  \");\n  }).join('\\n'), \"\\n\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://my-webpack-project/./src/views/mainPage.js?");

/***/ })

}]);