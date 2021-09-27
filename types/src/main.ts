console.log('Hola Typescript!');

// Explicit number
let phone: number;
phone = 55129227527;
// phone = 'Hello'; // wrong assignment

// Inherit
let num = 7147150920;
// num = false; // wrong assignment

let hex: number    = 0xf00d;
let binary: number = 0b1010;
let octal: number  = 0o744;

// Type: Boolean
// Explicit type
let isPro: boolean;
isPro = true;
// isPro = 1; // wrong assignment

//Inherit
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // wrong assignment

// Type: String
let username: string = 'jair.aviles';
username = "Jair Israel";
// username = 1234; // wrong assignment

// Template String
// Back-tick use `
let userInfo: string;
userInfo = `
    User Info:
        - username: ${username}
        - firstname: ${username + ' Aviles Eusebio'}
        - phone: ${phone}
        - isPro: ${isPro}
`;
console.log('userInfo', userInfo);