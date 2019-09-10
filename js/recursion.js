let factorial = function fac(num) {
  // Calling a function from inside of itself
  if (num === 1) {
    return 1;
  }
  return num * fac(num - 1);
};

let result = factorial(5);
console.log(result);

// Illustration of what is happening above
// 5*fac(4)
// 5*4*fac(3)
// 5*4*3*fac(2)
// 5*4*3*2*fac(1)
// 5*4*3*2*1
// 5*4*3*2
// 5*4*6
// 5*24
// 120
