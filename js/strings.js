// ESCAPE CHARACTERS IN STRINGS
let str = "Enter a single quote (') inside of single quotes.";
console.log(str);

// ARRAY OF UNICODE CHARACTERS
let specialCharacters = [
  '\u00A9',
  '\u2665',
  '\u2014',
  '\u2122',
  '\u2018',
  '\u2019',
  '\u201C',
  '\u201D',
  '\u20AC',
  '\u2026',
  '\u2022',
  '\u2705',
  '\u2753',
  '\u2783',
  '\u279C',
  '\u2154',
  '\u215B',
  '\u201B'
];

let showChars = function() {
  specialCharacters.forEach(char => {
    document.write(char + '</br>');
  });
};

showChars();
