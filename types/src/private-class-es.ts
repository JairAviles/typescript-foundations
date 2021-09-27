export {};

// TSC ~3.8

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

class Picture {
    // Properties
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // Behavior
    public toString() {
        return `[id: ${this.#id},
                title: ${this.#title},
                orientation: ${this.#orientation}]`;
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: Picture): void {
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Me2015', PhotoOrientation.Square);
const rioPic: Picture = new Picture(2, 'Rio2017', PhotoOrientation.Landscape);
album.addPicture(picture);
album.addPicture(rioPic);

console.log('album', album);
// console.table(album.pictures); // Error

// Access to public attributes // Error
// picture.id = 100;
// picture.title = 'Modified title';
// picture.orientation = PhotoOrientation.Portrait;

// album.title = 'Updated album title';
// console.log('album', album);