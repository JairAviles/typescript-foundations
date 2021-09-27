export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

class Picture {
    // Properties
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Behavior
    public toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album {
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Me2015', PhotoOrientation.Square);
const rioPic: Picture = new Picture(2, 'Rio2017', PhotoOrientation.Landscape);
album.addPicture(picture);
album.addPicture(rioPic);

console.log(album);
console.table(album.pictures);

// Access to public attributes
picture.id = 100;
picture.title = 'Modified title';
picture.orientation = PhotoOrientation.Portrait;

album.title = 'Updated album title';
console.log('album', album);
