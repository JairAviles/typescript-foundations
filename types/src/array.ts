// Brackets []

// Explicit Type
let users: string[];
users = ['Jair Israel', 'Aline'];

// Inherit type
let otherUsers = ['Jair Israel', 'Aline'];
// otherUsers = [1, true, '3']; // wrong assigment

// Array<T>
let pictureTitles: Array<string>;
pictureTitles = ['Dog', 'Landscape', 'Izcalli'];

// Accessing array values
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);

// Array properties
console.log('users.length', users.length);

// Functions in Arrays
users.push('Nike User');
users.sort();
console.log('sorted users', users);