// Truthy value - Any value that evaluates to true in a conditional statement.
// An empty object {}, an empty array [] and negative numbers are all truthy values
// Falsy values are: false, null, undefined, 0, NaN, empty string
let somevar;

// Long way to use conditional
// if (somevar !== undefined && somevar !== null && somevar !== '') {
//   console.log('Do something with the value');
// }

somevar = 0;

// Better way
if (somevar) {
  console.log('Do something with the value');
}
