/*** SIMPLE CLOSURE EXAMPLE - FUNCT IS STILL ACCESSED ONE SECOND AFTER IT CLOSES ***/

// var funct = function funct() {
//   var a = 2;
//   var b = 3;

//   var funct2 = function funct2() {
//     console.log(a + b);
//   };

//   // Execute funct2 after 1 second
//   setTimeout(funct2, 1000);
// };

// funct();

/*** ANOTHER CLOSURE EXAMPLE - IMMEDIATELY INVOKING THE COUNTER FUNCTION (IIFE)  ***/
(function counter() {
  var count = 0;
  var item1 = document.querySelector('#item1');
  var item2 = document.querySelector('#item2');

  var print = function print() {
    console.log(count);
  };

  item1.addEventListener('click', () => {
    count++;
    print();
  });

  item2.addEventListener('click', () => {
    count++;
    print();
  });
})();

/*** ANOTHER CLOSURE EXAMPLE - MODULE PATTERN THAT ASSIGNS AN IIFE TO THE APP VARIABLE ***/
var APP = (function module() {
  var a = 3;

  var printIt = function printIt(val) {
    console.log(val);
  };

  var sumIt = function sumIt(b) {
    printIt(a + b);
  };

  var multiplyIt = function multiplyIt(b) {
    printIt(a * b);
  };

  // This will be assigned to the APP variable
  return {
    sumIt: sumIt,
    multiplyIt: multiplyIt
  };
})();
