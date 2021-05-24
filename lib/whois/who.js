"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Who {
    constructor(
    // 群友名称 别名
    name, 
    // 群友简介
    dec) {
        this.name = name;
        this.dec = dec;
    }
    // 名称匹配规则
    pattern(input) {
        const inputName = input.trim();
        if (Array.isArray(this.name)) {
            return this.name.some(name => name.trim() === inputName);
        }
        return inputName === this.name;
    }
}
exports.default = Who;
