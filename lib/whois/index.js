"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (who = '') => {
    const whoStr = who.toLowerCase();
    switch (whoStr) {
        case ('富婆' || '妍妍' || '顾研' || 'puma'): {
            return '富婆(真富婆) 坏吕人';
        }
        default: return '没有这个人';
    }
};
