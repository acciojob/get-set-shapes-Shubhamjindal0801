//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	get details(){
		return this._width;
		return this._height;
	}
	getArea(){
		return this._width*this._height;
	}
}

class Square extends Rectangle {
	getPerimeter(){
		return (2*(this._length+this._width));
	}
}
var rec = new Rectangle(5,7);
console.log(rec.getArea());
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
