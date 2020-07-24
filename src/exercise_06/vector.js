export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  constructor(x, y) {
    this._x = x;
    this._y = y;  
  }
}
  Vector.prototype={
  constructor: Vector,
  flagx : false,
  flagy : false,

  get x() {
  return this._x;
},
  set x(newx) {
  if(!flagx) {
  this._x=newx;
  flayx=true;
}
else throw 'should not set x of the vector';
},

  get y() {
  return this._y;
},
  set y(newy) {
  if(!flagy) {
  this._y=newy;
  flagy=true;
}
else throw 'should not set y of the vector';
},

  distance: function() {
  return Math.sqrt(this._x*this._x+this._y*this._y);
}
}
  Vector.plus=function (v1, v2) {
  var result= new Object();
  result.x=v1.x+v2.x;
  result.y=v1.y+v2.y;
  return result;
}
  Vector.minus=function (v1, v2) {
  var result= new Object();
  result.x=v1.x-v2.x;
  result.y=v1.y-v2.y;
  return result;
}
