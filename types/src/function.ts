// Function in TS
// JS style - Create a photo
// function createPhoto(title, date, size) {
//     title
// }

export {};

type SquareSize = '100x100' | '500x500' | '1000x1000';

// TS typed parameters function
function createPhoto(title: string, date: string, size: SquareSize) {
    // Creates Photo
    console.log('create photo', title, date, size);
}

createPhoto('Fall 2021', '2021-09-21', '500x500');
// createPhoto('Xmas 2020', '2020-12-24'); // Error

// Optional parameters in functions
function createPicture(title?: string, date?: string, size?: SquareSize) {
    // Creates Photo
    console.log('create picture', title, date, size);
}

createPicture('Halloween 2021', '2021-10-31', '1000x1000');
createPicture('Xmas 2021', '2021-12-24');

// Flat Array function
let createPic = (title: string, date: string, size: SquareSize): object => {
    return  { title, date, size };
};

let picture = createPic('My wedding 2023', '2023-02-05', '1000x1000');
console.log('picture', picture);

// Return type with TSC

function handleError(code: number, message: string): never | string {
    // Code or message process
    if (code >= 400) {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return 'An error has occurred';
    }
}

try {
    let result = handleError(400, 'Bad Request');
    console.log('result', result);
} catch (error) {
    console.error('error', error);
}