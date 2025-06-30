const user = { name: 'Vinit', age: 25 };
console.log(user);

//Entries : Returns an array of [key, value] pairs.
console.log(Object.entries(user)); 

// keys and values
console.log(Object.keys(user));
console.log(Object.values(user));

// hasOwn : Checks if a property exists in the object.
const own = Object.hasOwn(user, 'name'); // ➞ true
console.log(own)

// assign : Copies properties from one or more objects to another
const a = { x: 1 };
const b = { y: 2 };
const c = Object.assign({}, a, b);  // ➞ { x: 1, y: 2 }

// Converts an array of [key, value] back into an object.
const entries = [['name', 'Vinit'], ['age', 25]];
console.log(Object.fromEntries(entries));  // ➞ { name: 'Vinit', age: 25 }