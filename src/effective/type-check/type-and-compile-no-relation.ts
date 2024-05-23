interface Square {
    width: number
}
interface Rectangle extends Square {
    height: number
}
type Shape = Square | Rectangle

function calculateArea(shape: Shape) {
    // instanceof can only be used for classes
    // Rectangle is an interface which is a compile-time construct
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}
// types like Rectangle are erasable during compile

// one way to check runtime instance is looking for property
function calculateAreaTwo(shape: Shape) {
    if ('height' in shape) {
        shape; // type Rectangle
        return shape.width * shape.height;
    } else {
        shape; // type Square
        return shape.width * shape.width;
    }
}


interface SquareWithTag {
    width: number
    kind: 'square' //tag
}
interface Rectangle {
    width: number
    height: number
    kind: 'rectangle' //tag
}

type ShapeWithTag = SquareWithTag | Rectangle
function calculateAreaWithTag(shape: ShapeWithTag) {
    if (shape.kind === 'square') {
        shape;
    } else {
        shape;
    }
}


class SquareClass {
    constructor(public width: number) { }
}
class RectangleClass extends SquareClass {
    constructor(public width: number, height: number) {
        super(width)
    }
}
type ClassShape = SquareClass | RectangleClass


const cacl = (shape: ClassShape) => {
    if (shape instanceof RectangleClass) {
        shape;
    } else {
        shape;
    }
}