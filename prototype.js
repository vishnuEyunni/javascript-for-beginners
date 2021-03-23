// Prototype properties

// Using prototype objets to reduce duplicate code.

function Animal(name) {
  this.name = name;
}

let duck = new Animal("Donald");
let canary = new Animal("Tweety");

// the above two instances each have the property called name.

function Animal(name) {
  this.name = name;
  this.numLegs = 4;
}

// If the constructor was like this, the numLegs property is also present in all the instances created this.
// To avoid code duplication, but to have this property present across all its instances, we can make use of Prototype property.

Animal.prototype.numLegs = 4;

// Writing like this instead of declaring it inside constructor, still lets all the instances have access to the Animal's prototype properties.

let duck = new Animal("Donald");
console.log(duck.numLegs); // Outputs: 4

// Note:
// the properties added via prototype are not part of ownProps but rather part of prototypeProps.
