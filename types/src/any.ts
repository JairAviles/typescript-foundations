// Explicit type
let idUser: any;
idUser = 1;    // number
idUser = '1';  // String
console.log('idUser', idUser);

// Inherit type
let otherId;
otherId = 2;
otherId = '2';
otherId = true;
console.log('otherId', otherId);

let surprise: any = 'hello typescript';
// surprise.sayHello();
const res = surprise.substring(6); // Error
console.log('res', res);
