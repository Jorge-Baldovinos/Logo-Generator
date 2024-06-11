const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="50 15, 100 100, 0 100" fill="blue"');

const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="blue"/>');

const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="10" y="10" width="20%" height="20" fill="blue">');