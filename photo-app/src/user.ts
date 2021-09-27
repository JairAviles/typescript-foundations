import { Album } from './album';

export class User {
	private album: Album[];

	constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
		this.album = [];
	}

	addAlbum(album: Album) {
		this.album.push(album);
	}

	removeAlbum(album: Album): Album | undefined {
		// Search album, remove if exists
		const indexOfAlbum = this.album.findIndex(a => a.id === album.id);
		let deletedAlbum;

		if (indexOfAlbum >= 0) {
			deletedAlbum = this.album[indexOfAlbum];
			this.album.splice(indexOfAlbum, 1);
		}
		return deletedAlbum;
	}
}
