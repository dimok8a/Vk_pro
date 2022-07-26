function makeSound(audioSrc) {
    return () => {
        const audio = new Audio(audioSrc);
        audio.volume = 0.2;
        audio.autoplay = true;
    }
}

function makeMessagesSound(audioSrc) {
    return () => {
        const audio = new Audio(audioSrc);
        audio.volume = 0.3;
        audio.autoplay = false;
        return audio;
    }
}


export const logoClickSound = makeSound('https://zvukipro.com/uploads/files/2019-09/1568275226_fbe6297172aad1e.mp3')

export const bellClickSound = makeSound('https://zvukipro.com/uploads/files/2019-09/1568276021_f946f3f8c39b945.mp3')

export const musicClickSound = makeSound('https://zvukipro.com/uploads/files/2019-09/1568276021_f946f3f8c39b945.mp3')

export const profileClickSound = makeSound('https://zvukipro.com/uploads/files/2019-09/1568276128_8bb9a29014590e5.mp3')

export const mouseOverSound = makeSound('https://zvukipro.com/uploads/files/2020-12/1607403427_f1904a8be71e239.mp3')

export const mouseClickSound = makeSound('https://zvukipro.com/uploads/files/2019-09/1568274777_e61cdb72dc8aa8c.mp3')

export const messageTypingSound = makeMessagesSound('https://zvukipro.com/uploads/files/2019-07/1564068640_cf9b99726102246.mp3')
export const messageRecordingSound = makeMessagesSound('https://zvukipro.com/uploads/files/2020-12/1609052060_elevator-music-vanoss-gaming-background-music.mp3')
