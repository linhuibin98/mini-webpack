/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/util.js":
/*!****************************!*\
  !*** ./src/common/util.js ***!
  \****************************/
/***/ ((module) => {

eval("\r\nfunction isObject(obj) {\r\n  return obj !== null && typeof obj === 'object';\r\n}\r\n\r\nmodule.exports = {\r\n    isObject\r\n};\n\n//# sourceURL=webpack://webpack-dev/./src/common/util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./styles/global.less */ \"./src/styles/global.less\");\r\n\r\nconst avatar = __webpack_require__(/*! ./assets/images/180.png */ \"./src/assets/images/180.png\");\r\nconsole.log(\"🚀 ~ file: index.js ~ line 4 ~ avatar\", avatar)\r\n\r\nconst util = __webpack_require__(/*! ./common/util.js */ \"./src/common/util.js\");\r\n\r\nconst o1 = null;\r\nconst o2 = {};\r\nconst n = 1; \r\n\r\nconsole.log('util.isObject', util.isObject(o1), util.isObject(o2), util.isObject(n));\n\n//# sourceURL=webpack://webpack-dev/./src/index.js?");

/***/ }),

/***/ "./loader/css-loader.js!./loader/less-loader.js!./src/styles/global.less":
/*!*******************************************************************************!*\
  !*** ./loader/css-loader.js!./loader/less-loader.js!./src/styles/global.less ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let list = []\r\nlist.push(\"body {\\n  font-size: 14px;\\n  color: #333;\\n}\\n#app {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #f5f5f5;\\n}\\n#app h1 {\\n  color: red;\\n  background: \")\r\nlist.push('url(' + __webpack_require__(/*! ../assets/images/180.png */ \"./src/assets/images/180.png\") +')')\r\nlist.push(\";\\n}\\n\")\r\nmodule.exports = list.join('')\n\n//# sourceURL=webpack://webpack-dev/./src/styles/global.less?./loader/css-loader.js!./loader/less-loader.js");

/***/ }),

/***/ "./src/styles/global.less":
/*!********************************!*\
  !*** ./src/styles/global.less ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var style = document.createElement('style');\n    style.innerHTML = __webpack_require__(/*! !!../../loader/css-loader.js!../../loader/less-loader.js!./global.less */ \"./loader/css-loader.js!./loader/less-loader.js!./src/styles/global.less\");\n    document.head.appendChild(style);\n\n//# sourceURL=webpack://webpack-dev/./src/styles/global.less?");

/***/ }),

/***/ "./src/assets/images/180.png":
/*!***********************************!*\
  !*** ./src/assets/images/180.png ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"58985db8dee7fdf0.png\"\n\n//# sourceURL=webpack://webpack-dev/./src/assets/images/180.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;