export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

// get & set

class Picture {
    // Properties
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
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

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }

    get id() {
        return this._id;
    }
    set id (id: number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(t: string) {
        this._title = t;
    }

    public addPicture(picture: Picture): void {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Me2015', PhotoOrientation.Square);
const rioPic: Picture = new Picture(2, 'Rio2017', PhotoOrientation.Landscape);
album.addPicture(picture);
album.addPicture(rioPic);

// Access to private members though accessor methods
picture.id = 100; // private, set id(100)
picture.title = 'Modified title'; // private
picture.orientation = PhotoOrientation.Portrait; // private

album.title = 'Updated album title';
console.log('album', album);