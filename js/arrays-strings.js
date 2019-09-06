let url = 'https://www.youtube.com/watch?v=F4gJsKZvqE4';
console.log(url);

let parts = url.split('?')[1].split('=');
console.log(parts);

var str = 'The cow jumped over the moon';

var parts2 = str.split(' ');
console.log(parts2);
console.log(parts2.join('-'));

// ES6 FUNCTIONS TO TEST STRING

// Traditional method - if index of returns anything other than -1 then we know the word 'cow'
// exists in the string.  It will only return -1 if the word does not exist in the string.
let check = str.indexOf('cow') > -1;
console.log(check);

// ES6 Version
let newCheck = str.includes('cow');
console.log(newCheck);

let checkStartsWith = str.startsWith('The');
console.log(checkStartsWith);

let checkEndsWith = str.endsWith('moon');
console.log(checkEndsWith);
