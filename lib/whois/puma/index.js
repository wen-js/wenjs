"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const who_1 = __importDefault(require("../who"));
class Puma extends who_1.default {
    constructor() {
        super(['富婆', '妍妍', '顾研', 'puma'], '富婆(真富婆) 坏吕人');
    }
}
exports.default = new Puma();
