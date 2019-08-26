let daySpan = function(date) {
  let startDate = new Date(date);
  let curDate = new Date();
  let div = 1000 * 60 * 60 * 24;

  return Math.floor((curDate - startDate) / div);
};

let days = `A total of ${daySpan(
  'January 1, 2019'
)} days have passed since the beginning of the year`;

console.log(days);

let firstName = 'Jerry';
let lastName = 'Doran';
let street = '123 Main Street';
let city = 'Orlando';
let state = 'FL';
let zip = '12345';

let address = `The address is as follows:
  ${firstName} ${lastName}
  ${street}
  ${city}, ${state} ${zip}`;

console.log(address);
