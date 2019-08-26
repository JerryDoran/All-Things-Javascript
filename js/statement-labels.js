let scores = [9, 10, 5, 6, 'hi', 10, 5, 6, 6, 5];

let total = 0;
let allResponses = false;

// Statement label goes here
compute_total: if (scores.length > 0) {
  for (let i = 0; i < scores.length; i++) {
    // NaN - Not a Number
    if (isNaN(scores[i])) {
      break compute_total;
    } else {
      total = total + scores[i];
    }
  }
  allResponses = true;
}

if (allResponses) {
  console.log(`Your combined total is: ${total}`);
} else {
  console.log('You still need to finish some items.');
}
