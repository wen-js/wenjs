"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = __importDefault(require("../../package.json"));
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
