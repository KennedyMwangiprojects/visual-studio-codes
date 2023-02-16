import{Shape}from'./shape';

const circle = Shape.circle(7);
console.log(`Circle area:${circle.area}`);
console.log(`Circle perimeter:${circle.perimeter}`);

const rectangle = Shape.rectangle(10,6);
console.log(`Rectangle area:${rectangle.area}`);
console.log(`Rectangle perimeter:${rectangle.perimeter}`);

const square=Shape.square(5);
    console.log(`square area:${square.area}`)
    console.log(`square perimeter:${square.perimeter}`)