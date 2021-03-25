// Assertions

var obj = {};

// In javascript everything is an object. Sure, we can `typeof` but the typeof null is also an Object.

// We can use, {Object}.constructor to check if it is an Object.

obj.constructor === true || obj.constructor.prototype.isPrototypeOf(Object)
