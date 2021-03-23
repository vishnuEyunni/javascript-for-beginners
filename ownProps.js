// Understanding own properties

// Consider the below constructor

// Tip: Constructor functions can easily be spotted, because they start with Capital Letters.

function Bird(name) {
  this.name = name,
  this.numLegs = 4
}

// The above Bird Constructor takes an argument called `name`
// It has two properties `name` and `numLegs`.

let canary = new Bird("Tweety");
let duck = new Bird("Donald");

// `name` and `numLegs` are called own properties, because they are defined directly on the instance object.
// That means duck and canary each has its own seperate copy of those properties.
// In other words, own properties are those that are defined in Constructor.

// To check if a prop is ownProps or not we have `hasOwnProperty`

let ownProps = [];

for (let prop in duck) {
  if (duck.hasOwnProperty(prop)) {
    ownProps.push(prop)
  }
}

console.log(ownProps); // Outputs: ["name", "numLegs"]
