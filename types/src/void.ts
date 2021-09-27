// Void
// Explicit type

function showInfo(user: any): void {
    console.log('User Info', user.id, user.username, user.firstName);
}

showInfo({ id: 1, username: 'yajairo87', firstName: 'Jair Israel' });

// Inherit type
function showFormatedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormatedInfo({ id: 1, username: 'yajairo87', firstName: 'Jair Israel' });

// Void type
let unusable: void;
unusable;

// Type: Never
function handleError(code: number, message: string): never {
    // Process your code here
    // Generate a message
    throw new Error(`
        An error has occurred!
            ${message}. Code: ${code}
    `);
}

try {
    handleError(404, 'Not Found');
} catch (error) {
    console.error(error);
}

// Never type
function sumNumbers(limit: number): never {
    let sum = 0;
    // infinite loop
    while (true) {
        sum++;
    }
    // return sum;
}

sumNumbers(10);