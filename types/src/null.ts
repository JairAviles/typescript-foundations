// Explicit
let nullvariable: null;
nullvariable = null;
// nullvariable = 1; // Error

let otherVariable = null;
otherVariable = 1;

console.log('nullVariable', nullvariable);
console.log('otherVariable', otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error

let otherUndefined = undefined;
otherUndefined = 2;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);

// Null and Undefined as subtypes

// --strictNullChecks
// let albumName: string;
// albumName = null;
// albumName = undefined;