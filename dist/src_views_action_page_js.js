/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_views_action_page_js"],{

/***/ "./src/views/action/page.js":
/*!**********************************!*\
  !*** ./src/views/action/page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar display = function display(data, hash) {\n  var endpoint = hash.split('/').pop();\n  var slide = data.slider.find(function (prod) {\n    return prod.id === endpoint;\n  });\n  return \"\\n  <div class=\\\"container-fluid\\\">\\n    <div class=\\\"row\\\">\\n      <div class=\\\"col-md-4\\\">\\n        <img src=\\\"./images/\".concat(slide.images, \".jpg\\\" style=\\\"width: 100%\\\" class=\\\"img-rounded\\\">\\n      </div>\\n      <div class=\\\"col-md-8\\\">\\n        <h1>\").concat(slide.name, \"</h1>\\n        <p>\").concat(slide.description, \"</p>\\n      </div>\\n    </div>\\n  </div>\\n  \");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://my-webpack-project/./src/views/action/page.js?");

/***/ })

}]);