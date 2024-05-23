"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fnA = (val) => {
    return val;
};
const fnB = (val) => {
    return typeof (val) === 'string' ? Number(val) : val;
};
