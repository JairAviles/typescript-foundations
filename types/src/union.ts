// Union type | operator
// 10, '10'

export {};

type IdUser = number | string;
type Username = string;
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// Search username given an id
function getUsernameById(id: IdUser): Username {
    // Business logic
    return 'yajairo87';
}

console.log(10, getUsernameById(10));
console.log('10', getUsernameById('10'));

// Type alias: TS
let idUser: IdUser;
idUser = 10;
idUser = '10';
console.log('idUser', idUser);

// Literal type
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000'
// let smallPicture: SquareSize = '200x200'; // Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
let largePicture: SquareSize = '1000x1000';

console.log('smallPicture', smallPicture);
console.log('mediumPicture', mediumPicture);
console.log('largePicture', largePicture);
