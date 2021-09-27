export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

interface Entity {
    id: number;
    title: string;
}

interface PhotoAlbum extends Entity {
    description: string;
};

interface Photo extends Entity {
    orientation: PhotoOrientation;
};

const album: PhotoAlbum = {
    id: 1,
    title: 'My First Album',
    description: 'Just random photos...'
};

const photo: Photo = {
    id: 1,
    title: 'Me2021',
    orientation: PhotoOrientation.Square
};

let emptyPhoto = {} as Photo;
emptyPhoto.id = 2;
emptyPhoto.title = 'Moonlight';

console.log({ album });
console.log({ photo });
console.log({ emptyPhoto });
