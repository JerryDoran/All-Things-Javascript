var arr = [1, 2, 3, 4, 5];
var scoresArr = [0, 100, 95, 45, 65, 80, 75, 90];

// USING THE FOR LOOP FOR LOOPING THROUGH ELEMENTS OF AN ARRAY
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * arr[i]);
// }

// USING THE FOR EACH LOOP FOR LOOPING THROUGH ELEMENTS OF AN ARRAY
// CAN ALSO PASS IN UP TO THREE PARAMETERS WHEN USING THIS METHOD
// arr.forEach((item, index, theArray) => {
//   theArray[index] = item * item;
// });

// console.log(arr);

// USING THE MAP METHOD - WILL RETURN A NEW ARRAY. REQUIRES YOU TO RETURN A VALUE
// FOR BUILDING A NEW ARRAY.  ALLOWS YOU TO RUN A FUNCTION ON EACH ELEMENT OF AN ARRAY AND RETURN
// A MODIFIED VERSION OF EACH ELEMENT
let newArray = arr.map(item => {
  return item * item;
});

console.log(newArray);

// USING THE FILTER METHOD -  NEED TO PASS IN A PREDICATE FUNCTION TO THE FILTER METHOD
// PREDICATE FUNCTION IS A FUNCTION THAT RETURNS 'TRUE' OR 'FALSE'
// WILL RETURN A NEW ARRAY THAT MEETS THOSE CRITERIA THAT ARE TRUE

let newFilteredArray = scoresArr.filter(item => {
  return item > 80;
});

console.log(newFilteredArray);

// USING EVERY AND SOME METHODS ARE PREDICATE METHODS THAT RETURN 'TRUE' OR 'FALSE'
if (
  scoresArr.every(val => {
    return val > 80;
  })
) {
  console.log('Everyone scored above 80');
} else {
  console.log('Not everyone scored above 80');
}

if (
  scoresArr.some(val => {
    return val > 80;
  })
) {
  console.log('At least one scored above 80');
} else {
  console.log('No one scored above 80');
}

let corrArr = 'The correct answer'.split(' ');
let ansArr = 'The correct answer'.split(' ');

let results = corrArr.every((word, index) => {
  return word.toUpperCase() === ansArr[index].toUpperCase();
});

if (results) {
  console.log('It is correct!');
} else {
  console.log('Sorry that was wrong');
}

// USING THE REDUCE METHOD - TAKES ALL THE VALUES IN AN ARRAY AND COMBINES THEM ACCORDING TO THE
// FUNCTION THAT IS PASSED INTO THE REDUCE METHOD TO COMBINE THE ELEMENTS DOWN INTO A SINGLE RESULT.
// THIS METHOD TAKES IN AN ACCUMULATOR THEN SUMS UP EACH VALUE IN THE ARRAY.  THE ACCUMULATOR WILL
// HOLD THE SUM(VALUE) AFTER EACH RETURN.  OPTIONAL: INITIAL VALUE OF 0 FOR ACCUMULATOR AS SECOND ARGUMENT
let sum = scoresArr.reduce((accumulator, val) => {
  return accumulator + val;
});

// Can also pass in a defined function instead of anonymous functions
let highestValue = function(val1, val2) {
  return val1 > val2 ? val1 : val2;
};

// Return the highest value from the array
let max = scoresArr.reduce((high, val) => {
  return high > val ? high : val;
});

let maxScore = scoresArr.reduce(highestValue);

console.log(`The total is ${sum}`);

console.log(`The highest score is ${max}`);

console.log(maxScore);
