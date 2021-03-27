// currying in Javascript is an advanced topic

// Currying is a pattern where you take a function, that accepts a given number of arguments, it will continue to return
// new functions until it receives all those arguments.

function add(a,b){
  return a+b;
}

add(2,3) // returns 5;
add(2)(3) // error

function add(a,b) {
  if(!b) {
    return add.bind(null,a)
  }
  return a+b;
}

// the above function returns a function if you pass in only one value.

const add2 = add(2); // add(2) returns a new function, that's what bind does, but the context we have passed is null, and argument as 'a'

const numbers = [1,2,3,4,5]
console.log(numbers.map(add2)); // loops through each element and calls the x => add2(x); which returns the sum of x + 2

// What is the Use of Currying?
// Where can I use that?

function log(date,message, importance){
  console.log(`${date.getHours()} ${date.getMinutes()} ${importance} ${message}`);
}

// normally to call this function, we have to pass in 3 arguments.
// Currying gives us the ability of Paritial Application, and its implicit.

// Manual Partial Application: numbers.map(num => add(2,num)) or numbers.map(num => add.bind(null,num))
// Automatic Partial Application: numbers.map(add(2)) - with currying you effortlessly create specialized unary functions on the fly.

// So, for the above log example

function log(date, message,importance){
  if(!message){
    return log.bind(null, date);
  }
  if(!importance) {
    return log.bind(null,date,message);
  }
  return log(date,message, importance)
}
