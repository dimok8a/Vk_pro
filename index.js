import {makeCheckboxes} from './makeCheckboxes.js';
import {changeBell, changeHeader, changeLogo, changeMusicLogo, changeRightButton} from "./designChanges.js";
import {
    bellClickSound,
    logoClickSound,
    messageRecordingSound,
    messageTypingSound, mouseClickSound,
    mouseOverSound,
    musicClickSound,
    profileClickSound
} from "./audios.js";
import {bellClass, leftLabelClass, mainLogoClass, musicClass, profileClass} from "./cssClasses.js";
const [clickingChoicer, musicChoicer] = makeCheckboxes()

// localstorage и кнопки слева
if (!localStorage.getItem('isClicking')) { // Если в ls нет check, то создаем его со значением true по дефолту
    clickingChoicer.checked = true;
    localStorage.setItem('isClicking', 'true');
} else {
    clickingChoicer.checked = JSON.parse(localStorage.getItem('isClicking')); // А иначе значение кнопки берем из ls (последнее выбранное пользователем)
}
if (!localStorage.getItem('isMusicPlaying')) { // Если в ls нет check, то создаем его со значением true по дефолту
    musicChoicer.checked = true;
    localStorage.setItem('isMusicPlaying', 'true');
} else {
    musicChoicer.checked = JSON.parse(localStorage.getItem('isMusicPlaying')); // А иначе значение кнопки берем из ls (последнее выбранное пользователем)
}
window.addEventListener('storage', () => {
    if (JSON.parse(localStorage.getItem('isClicking')) !== clickingChoicer.checked ) { // Если значение кнопки и ls разные, то делаем их одинаковыми (жмем на кнопку)
        clickingChoicer.click();
    }
    if (JSON.parse(localStorage.getItem('isMusicPlaying')) !== clickingChoicer.checked) { // Если значение кнопки и ls разные, то делаем их одинаковыми (жмем на кнопку)
        musicChoicer.click();
    }
});

changeHeader();
changeLogo();
changeBell();
changeMusicLogo();
changeRightButton();

// Звуки кликов
document.body.addEventListener('click', (e) => {
    try {
        if (!clickingChoicer.checked)
            return
        if (e.target.classList.contains(mainLogoClass)) {
            return logoClickSound()
        }
        if (e.target.closest('li').classList.contains(bellClass)) {
            return bellClickSound();
        }
        if (e.target.closest('li').classList.contains(musicClass)) {
            return musicClickSound();
        }
        if (e.target.closest('a').classList.contains(profileClass)) {
            return profileClickSound();
        }
        if (e.target.classList.contains(leftLabelClass))
            return mouseClickSound();
    } catch (e) {
    }
})

// Звук наведения на левую панель
document.addEventListener('mouseover', (e) => {
    if (!clickingChoicer.checked)
        return
    if (e.target.classList.contains(leftLabelClass))
        return mouseOverSound();
})


const typingSound = messageTypingSound();
const recordingSound = messageRecordingSound();

// Отслеживаем запись голосовых и текстовых сообщений
function messageEventListener() {
    if (window.location.search.indexOf('sel') !== -1) {
        document.querySelector('.im-page--fixer').innerHTML = `<div class="im-page--typing _im_typing" data-activity-type="none"> <div class="im-activity im-activity_classic"><div class="pr im-activity--icon"><div class="pr_bt"></div><div class="pr_bt"></div><div class="pr_bt"></div></div><span class="_im_typing_name"></span></div> </div>`
        document.querySelector('.im-page--fixer').addEventListener("DOMNodeInserted", (e) => {
            setTimeout(() => {
                const type = e.path[3].attributes[1].value;
                if (type === 'typing') {
                    recordingSound.pause();
                    if (clickingChoicer.checked)
                        typingSound.play();
                } else if (type === "recording") {
                    typingSound.pause();
                    if (musicChoicer.checked)
                        recordingSound.play();
                }
            }, 100)
        })
        document.querySelector('.im-page--fixer').addEventListener("DOMNodeRemoved", (e) => {
            setTimeout(() => {
                typingSound.pause();
                recordingSound.pause();
            }, 100)
        })
    }
}

document.addEventListener('mouseover', messageEventListener)

// Функция, которая меняет цвет фона блоку, если у него есть определенный класс
const newBgc = (block, actClass, newClass = 'green__bgc') => {
    const mutationListener = (mutations) => {
        for (let mutation of mutations) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (document.querySelector(block).classList.contains(actClass)) {
                    document.querySelector(block).setAttribute('data-new-color', newClass)
                } else {
                    document.querySelector(block).removeAttribute('data-new-color');
                }
            }
        }
    }
    const observer = new MutationObserver(mutationListener);
    observer.observe(document.querySelector(block), {
        attributes: true,
        attributeOldValue: true,
    });
};

newBgc('.top_notify_btn', 'TopNavBtn--active');
newBgc('#top_audio_btn_group', 'TopNavBtn--active');
newBgc('#top_profile_link', 'active', 'blue__bgc');

// Смена кнопок и тайтла аудиоплеера
document.addEventListener('mouseover', () => {
    if (document.querySelector('#pause_24__Rectangle-737'))
        document.querySelector('#pause_24__Rectangle-737').remove();
    if (document.querySelectorAll('.top_audio_player_btn')) {
        document.querySelectorAll('.top_audio_player_btn').forEach(elem => {
            elem.querySelector('path').setAttribute('fill', '#FFF')
        })
    }
    if (document.querySelector('.top_audio_player_title')) {
        document.querySelector('.top_audio_player_title').setAttribute('style', 'color : #DBECFFFF');
    }
})
