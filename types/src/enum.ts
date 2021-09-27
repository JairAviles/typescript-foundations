// Enum type
// Photo orientation
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panoramic = 3;

enum PhotoOrientation {
    Landscape = 0, // 0
    Portrait = 1,  // 1
    Square = 2,    // 2
    Panoramic = 3  // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait,       // 11
    Square,         // 12
    Panoramic       // 13
}

console.log('portrait', PictureOrientation.Portrait);

enum Country {
    Mexico = 'MX',
    UnitedStates = 'USA',
    Canada = 'CA'
}

const mex: Country = Country.Mexico;
console.log('country', mex);
