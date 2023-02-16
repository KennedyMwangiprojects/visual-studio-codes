"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.circle = function (radius) {
        var area = Math.PI * radius * radius;
        var perimeter = 2 * Math.PI * radius;
        return { area: area, perimeter: perimeter };
    };
    Shape.prototype.rectangle = function (length, width) {
        var area = length * width;
        var perimeter = (length + width) * 2;
        return { area: area, perimeter: perimeter };
    };
    Shape.prototype.square = function (side) {
        var area = side * side;
        var perimeter = 4 * side;
        return { area: area, perimeter: perimeter };
    };
    return Shape;
}());
exports.Shape = Shape;
