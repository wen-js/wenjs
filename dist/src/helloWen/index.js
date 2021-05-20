"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWen = void 0;
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
const helloWen = () => {
    console.log(`%c${logoStr}`, logoStyle);
};
exports.helloWen = helloWen;