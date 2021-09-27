export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

// Superclass

abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id;
    }
    // set id(id: number) {
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}

// get & set

class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    // Properties
    private _orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {
        super(id, title);
        this._orientation = orientation;
    }

    get orientation() {
        return this._orientation;
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }

    // Behavior
    public toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album extends Item {
    private _pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this._pictures = [];
    }

    public addPicture(picture: Picture): void {
        this.pictures.push(picture);
    }
    get pictures() {
        return this._pictures;
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Me2015', PhotoOrientation.Square);
const rioPic: Picture = new Picture(2, 'Rio2017', PhotoOrientation.Landscape);
album.addPicture(picture);
album.addPicture(rioPic);

console.log('album', album);
console.table(album.pictures);

// Access to private members though accessor methods
// picture.id = 100; // private, set id(100)
picture.title = 'Modified title'; // private
picture.orientation = PhotoOrientation.Portrait; // private

album.title = 'Updated album title';
console.log('album', album);

// const item = new Item(1, 'Any Item'); // Error
// console.log('item', item);

// Test static member from Picture class
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
