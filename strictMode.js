// Strict Mode - converting mistakes into Errors

// To enable strict mode

// Value assignments that would silently fail, will raise an exception in the strict mode.


const object1 = {};
// defineProperty is used to create an property on an Object.

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1);
// expected output: 42
