"use strict";
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
// Enums can be initialized with numbers
var ColorNumbers;
(function (ColorNumbers) {
    ColorNumbers[ColorNumbers["Red"] = 1] = "Red";
    ColorNumbers[ColorNumbers["Green"] = 2] = "Green";
    ColorNumbers[ColorNumbers["Blue"] = 3] = "Blue";
})(ColorNumbers || (ColorNumbers = {}));
let d = ColorNumbers.Green;
// Enums can be initialized with strings
var ColorStrings;
(function (ColorStrings) {
    ColorStrings["Red"] = "Red";
    ColorStrings["Green"] = "Green";
    ColorStrings["Blue"] = "Blue";
})(ColorStrings || (ColorStrings = {}));
let e = ColorStrings.Green;
