"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
