
// const tmp = {
//   name: 'vishnu',
//   show: () => this.name
// }

// console.log(tmp.show())

// export default tmp;

function sum() {
  const newArgsArray = Array.prototype.slice.call(arguments)
  return newArgsArray.reduce((a, b) => a + b, 0)
}

function sum2() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum2(10, 20, 40));

console.log(String.prototype.split.call('vishnu'));

class node {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class WrapperNode {

  #_instance = null;

  constructor(name, age) {
    if (!this._instance) {
      this._instance = new node(name, age)
    }
  }
}

WrapperNode.prototype.getInstance = function () { return this._instance }

console.log('GetInstance', WrapperNode.prototype.getInstance())

const newNode = new WrapperNode('vikings', 21)
console.log('GetInstance2::', newNode.getInstance())
console.log('::', newNode._instance.name)

