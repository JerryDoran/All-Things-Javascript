let url = 'https://www.youtube.com/watch?v=F4gJsKZvqE4';
console.log(url);

let parts = url.split('?')[1].split('=');
console.log(parts);

var str = 'The cow jumped over the moon';

var parts2 = str.split(' ');
console.log(parts2);
console.log(parts2.join('-'));
