(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wenjs"] = factory();
	else
		root["wenjs"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.baidu = exports.helloWen = void 0;
var helloWen_1 = __webpack_require__(1);
Object.defineProperty(exports, "helloWen", ({ enumerable: true, get: function () { return __importDefault(helloWen_1).default; } }));
var baidu_1 = __webpack_require__(2);
Object.defineProperty(exports, "baidu", ({ enumerable: true, get: function () { return __importDefault(baidu_1).default; } }));


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const logoStr = `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@ttttttttttttttttttt@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@ttttttttttttttttttttttt@@@@@@@@@@@@@
@@@@@@@@@@@@ttttttttttttttttttttttttttt@@@@@@@@@@@
@@@@@@@@@@ttttttttt@@@@@@@@@@@@@ttttttttt@@@@@@@@@
@@@@@@@@@@ttttttt@@@@@@@@@@@@@@@@@ttttttt@@@@@@@@@
@@@@@@@@@@@@ttt@@@@@@@@@@@@@@@@@@@@tttttt@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@tttttt@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@tttttt@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@tttttt@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ttttttt@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@fttttttttttt@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@ttttttttttttttt@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@tttttttttttttt@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ttttttttt@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ttttttt@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ttttttt@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ttttttt@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ttttttt@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ttttttt@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@ttttttt@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`;
const logoStyle = `
  color: rgb(5, 176, 250);
`;
exports.default = () => {
    console.log(`%c${logoStr}`, logoStyle);
};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = (str = '') => {
    const a = document.createElement('a');
    a.href = `https://www.baidu.com/s?wd=${str}`;
    a.target = '_blank';
    a.click();
};
// const child_process = require("child_process")
// const url = "https://www.baidu.com/s?wd=debu"
// let cmd = ''
// switch (process.platform) {
//     case 'win32':
//         cmd = 'start';
//         break;
//     case 'linux':
//         cmd = 'xdg-open';
//         break;
//     case 'darwin':
//         cmd = 'open';
//         break;
// }
// child_process.exec(cmd + ' ' + url)


/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});