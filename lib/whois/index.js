"use strict";
// import Puma from './puma'
// import Zzt from './003'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuyouData = void 0;
function getQuyouData() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        const dataScript = document.createElement('script');
        script.innerText = `
    function getQunYou(qunyou) {
      window.qunyouRes = qunyou
    }
    `;
        dataScript.src = 'https://cdn.jsdelivr.net/gh/wen-js/wen-data@main/qunyou.js';
        dataScript.onload = () => {
            document.body.removeChild(script);
            document.body.removeChild(dataScript);
            resolve(window['qunyouRes']);
        };
        dataScript.onerror = () => {
            reject(new Error('群友数据不见了！'));
        };
        document.body.appendChild(script);
        document.body.appendChild(dataScript);
    });
}
exports.getQuyouData = getQuyouData;
exports.default = (who = '') => __awaiter(void 0, void 0, void 0, function* () {
    const qunYouList = yield getQuyouData();
    const filter = qunYouList.filter(qunyou => {
        const inputName = who.trim();
        if (Array.isArray(qunyou.name)) {
            return qunyou.name.some(name => name.trim() === inputName);
        }
        return inputName === qunyou.name;
    });
    // const filter = qunYouList.filter(qunyou => qunyou.pattern(who))
    if (!filter[0]) {
        return '没有这个人，或者没有简介';
    }
    if (filter.length > 1) {
        const first = filter.pop();
        const rest = filter.map(i => i.name).join(',');
        return `${first.desc} → 你想查看的是ta们？${rest}`;
    }
    return filter[0].desc || '没有这个人';
});
