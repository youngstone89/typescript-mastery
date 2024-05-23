"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(shape) {
    // instanceof can only be used for classes
    // Rectangle is an interface which is a compile-time construct
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
// types like Rectangle are erasable during compile
// one way to check runtime instance is looking for property
function calculateAreaTwo(shape) {
    if ('height' in shape) {
        shape; // type Rectangle
        return shape.width * shape.height;
    }
    else {
        shape; // type Square
        return shape.width * shape.width;
    }
}
function calculateAreaWithTag(shape) {
    if (shape.kind === 'square') {
        shape;
    }
    else {
        shape;
    }
}
class SquareClass {
    width;
    constructor(width) {
        this.width = width;
    }
}
class RectangleClass extends SquareClass {
    width;
    constructor(width, height) {
        super(width);
        this.width = width;
    }
}
const cacl = (shape) => {
    if (shape instanceof RectangleClass) {
        shape;
    }
    else {
        shape;
    }
};
