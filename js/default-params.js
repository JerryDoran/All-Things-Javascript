// ADD ES6 DEFAULT PARAMETERS
let defaultVal = function() {
  return 3;
};

let multiplyIt = function(num1 = 2, num2 = defaultVal()) {
  return num1 * num2;
};

console.log(multiplyIt());
