// Type: object
let user: object;
user = {}; // Object

user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Luke',
    lastName: 'Blake',
    isPro: true
};

console.log('user', user);

// Object vs object(JS Class vs TS type)
const myObj  = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Luke',
    lastName: 'Blake',
    isPro: true
};

const isInstance = myObj instanceof Object;
console.log('isInstance', isInstance);
console.log(myObj.username);