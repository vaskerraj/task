const deepEqual = require('./src/deepEqual');

console.log(deepEqual(null, null)); // output => true
console.log(deepEqual(null, {})); // output => false
console.log(deepEqual({name: 'Bob'}, {name: 'Bob'})); // output => true (two value equal objects)
console.log(deepEqual({ name: ['Bob', 'Jack']}, { name: 'Bob' })); // => output: false (when value is not string/number/boolean)
console.log(deepEqual({ age: 31, name: 'Bob' }, { name: 'Bob', age: 31 })); // => output: true (two value equal objects with order of  object fields are not same)
console.log(deepEqual({ age: 31, name: 'Bob', email: undefined }, { name: 'Bob', age: 31 })); // =>output: true (object filed have value as undfined)
console.log(deepEqual({ age: 31, name: 'Bob', email: null }, { name: 'Bob', age: 31 })); // => output: false (object filed have value as null)