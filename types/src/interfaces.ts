// Function to show a picture
export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panoramic
}

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.table({ picture });
}

let myPic = {
    title: 'My cool picture',
    date: '2021-09',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic);
showPicture({
    title: 'Another picture',
    date: '2021-03',
    orientation: PhotoOrientation.Portrait
});

interface PictureConfig {
    title?: string,
    date?: string,
    orientation?: PhotoOrientation
}

function generatePictureConfig(config: PictureConfig): object {
    const picture = {title: '', date: '1900-01-01'};

    if (config.title) {
        picture.title = config.title;
    }
    if (config.date) {
        picture.date = config.date;
    }

    return picture;
}

let picConfig = generatePictureConfig({});
console.log({picConfig});
picConfig = generatePictureConfig({title: 'Tavel'})
console.log({picConfig});
picConfig = generatePictureConfig({title: 'Tavel', date: '2021-09-21'})
console.log({picConfig});

// Interface: User
interface User {
    readonly id: string;
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: '10', username: 'jisrae', isPro: true}
console.log('user', user);
user.username = 'yajairo87';
console.log('user', user);
