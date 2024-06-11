class Shape {
    constructor(viewBox) {
        this.viewBox = viewBox;
        
    }};

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }};

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }};

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }};

Shape.prototype.willDoSomething = function () {

};

const logo = new Shapes (

);

logo.willDoSomething();