class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon(100, 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

//  Triangle
class Triangle  extends Polygon {
  constructor(height, width){
    super(height, width);
    this.name = "Triangle";
    this.sides = 3 ;
  }
  get area() {return this.width * this.height;}
  sayName(){
  console.log('Hi I am a polygon and my name is ' + this.name + '.');
 }
}
let t = new Triangle(40,60,60)
t.sayName();
console.log('The area of this polygon is ' + t.area)


// Circle

class Circle  extends Polygon {
  constructor(height, width){
    super(height, width);
    this.name = "Circle";
    this.sides = 4 ;
  }
  get area() {return this.width * this.height;}
  sayName(){
  console.log('Hi I am a polygon and my name is ' + this.name + '.');
 }
}
let c = new Circle(330,80)
c.sayName();
console.log('The area of this polygon is ' + c.area)