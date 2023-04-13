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
		return (2*(length+width));
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
