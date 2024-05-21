// Масив фігур та виклик методів площі та периметра
const shapes = [
    new Circle(5),
    new Rectangle(4, 6)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.getArea()}`);
    console.log(`Perimeter: ${shape.getPerimeter()}`);
});
