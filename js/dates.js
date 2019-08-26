let startDate = new Date('Jul 20, 1969');
let endDate = new Date();
let diff = 0;
let days = 1000 * 60 * 60 * 24;

diff = endDate - startDate;
console.log(
  ` ${Math.floor(
    diff / days
  )} days have passed since Neil Armstrong walked on moon.`
);
