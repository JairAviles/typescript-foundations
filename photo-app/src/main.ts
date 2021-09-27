import { User } from "./user";
import { Album } from "./album";
import { Picture } from "./picture";
import { PhotoOrientation } from "./photo-orientation";

const user = new User(1, 'jisrae', 'Jair Israel', true);
const album = new Album(1, 'Another cool photo album');
const picture = new Picture(1, 'Me2021', '2021-09-29', PhotoOrientation.Landscape);

// Create relations among objects
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

// Delete album
user.removeAlbum(album);
console.log('user', user);