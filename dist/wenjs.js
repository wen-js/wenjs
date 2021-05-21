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
exports.whois = exports.baidu = exports.helloWen = void 0;
var helloWen_1 = __webpack_require__(1);
Object.defineProperty(exports, "helloWen", ({ enumerable: true, get: function () { return __importDefault(helloWen_1).default; } }));
var baidu_1 = __webpack_require__(3);
Object.defineProperty(exports, "baidu", ({ enumerable: true, get: function () { return __importDefault(baidu_1).default; } }));
var whois_1 = __webpack_require__(4);
Object.defineProperty(exports, "whois", ({ enumerable: true, get: function () { return __importDefault(whois_1).default; } }));


/***/ }),
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const package_json_1 = __importDefault(__webpack_require__(2));
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
    console.log(`%c Wen.js %c ${package_json_1.default.version} %c`, 'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff', 'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff', 'background:transparent');
};


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@thewen/wenjs","version":"1.0.11","description":"","main":"lib/index.js","scripts":{"login":"npm login --registry https://registry.npmjs.org","push":"gulp changeVersion && npm publish --registry https://registry.npmjs.org --access=public","test":"jest --config jest.config.ts","build":"webpack && gulp compile","watch":"gulp watchTS"},"repository":{"type":"git","url":"git+https://github.com/wen-js/wenjs.git"},"author":"","license":"MIT","bugs":{"url":"https://github.com/wen-js/wenjs/issues"},"homepage":"https://github.com/wen-js/wenjs#readme","devDependencies":{"@babel/core":"^7.14.3","@babel/preset-env":"^7.14.2","@babel/preset-typescript":"^7.13.0","@types/jest":"^26.0.23","babel-jest":"^26.6.3","clean-webpack-plugin":"^4.0.0-alpha.0","del":"^6.0.0","gulp":"^4.0.2","gulp-bump":"^3.2.0","gulp-shell":"^0.8.0","gulp-typescript":"^6.0.0-alpha.1","gulp-watch":"^5.0.1","jest":"^26.6.3","terser-webpack-plugin":"^5.1.2","through2":"^4.0.2","ts-loader":"^9.2.1","ts-node":"^9.1.1","typescript":"^4.2.4","webpack":"^5.37.1","webpack-cli":"^4.7.0"},"files":["dist","lib"]}');

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = (keyword = '') => {
    const a = document.createElement('a');
    a.href = `https://www.baidu.com/s?wd=${keyword}`;
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


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = (who = '') => {
    const whoStr = who.toLowerCase();
    switch (whoStr) {
        case ('富婆' || 0 || 0 || 0): {
            return '富婆(真富婆) 坏吕人';
        }
        default: return '没有这个人';
    }
};


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