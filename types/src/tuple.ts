export {};

// Tuple type [1, 'user']
let user: [number, string];
user = [1, 'Jair Israel Aviles Eusebio'];

console.log('user', user);
console.log('id', user[0]);
console.log('username', user[1]);
console.log('username.length', user[1].length);

// Multiple value tuples
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'Aline de Castro', true];
console.log('userInfo', userInfo);

// Array of tuples
let tuples: [number, string][] = [];
tuples.push([1, 'yajairo87']);
tuples.push([2, 'linech19']);
tuples.push([3, 'jisrae']);
console.log('tuples', tuples);

// Array class functions
// jisrae -> jisrae_cdmx
tuples[2][1] = tuples[2][1].concat('_cdmx');
console.log('tuples', tuples);
