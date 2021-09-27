// <type> Angle bracket syntax

export {};

let username: any;
username = 'jair';

// array, TS trust me!
let message: string = (<string>username).length > 5 ?
                    `Hello ${username}` : 'Username length is short';
console.log('message', message);

let usernameWithId: any = 'jisrae 1';
// How to get the username from above variable?
username = (<string>usernameWithId).substring(0, 6);
console.log('username only', username);

// as Syntaxis
message = (username as string).length > 5 ?
                    `Welcome ${username}` : 'Invalid username';
console.log('message', message);

let helloUser: any;
helloUser = 'hello player1';
username = (helloUser as string).substring(6);
console.log('username', username);