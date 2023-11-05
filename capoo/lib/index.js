"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.using = exports.Config = exports.name = void 0;
const koishi_1 = require("koishi");
const koishi_2 = require("koishi");
exports.name = 'capoo';
exports.Config = koishi_1.Schema.object({});
exports.using = [];
async function apply(ctx) {
    function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    ctx.command('capoo').action(async ({ session }, ...args) => {
        return ((0, koishi_2.h)('image', { url: (['https://git.acwing.com/HuParry/capoo/-/raw/master/capoo%20(', mathRandomInt(1, 456), ').gif'].join('')) }));
    });
}
exports.apply = apply;
