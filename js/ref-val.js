// MOST CASES IN JAVASCRIPT VARIABLES ARE PASSED BY VALUE EXCEPT USING OBJECTS
let num1 = 10;
let num2 = num1;

let obj1 = {
    num: 10,
    name: 'Joe'
  },
  obj2 = obj1;

let func1 = function() {
  console.log(obj1.name);
};

let func2 = func1;
