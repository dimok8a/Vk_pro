var header = document.getElementById("page_header_wrap"); // Шапка вк
    if (header.hasAttribute("style", "background-color : white")) {
        header.setAttribute('style', 'background-color : #4D77A7FF')
    }
    var names = document.getElementsByClassName("top_profile_name")[0];
    names.setAttribute('style', 'color : white')



    var logo = document.getElementsByClassName("TopHomeLink--logoWithText")[0]; // Новый логотип ВК
    logo.setAttribute('style', `background-image : url("data:image/svg+xml,%3Csvg width='136' height='25' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='m0,11.5c0,-5.42 0,-8.13 1.68,-9.82c1.69,-1.68 4.4,-1.68 9.82,-1.68l1,0c5.42,0 8.13,0 9.82,1.68c1.68,1.69 1.68,4.4 1.68,9.82l0,1c0,5.42 0,8.13 -1.68,9.82c-1.69,1.68 -4.4,1.68 -9.82,1.68l-1,0c-5.42,0 -8.13,0 -9.82,-1.68c-1.68,-1.69 -1.68,-4.4 -1.68,-9.82l0,-1z' fill='%232787f5' id='svg_1'/%3E%3Cg clip-rule='evenodd' fill-rule='evenodd' id='svg_2'%3E%3Cpath d='m6.5,7.5l-1.75,0c-0.5,0 -0.6,0.24 -0.6,0.5c0,0.46 0.6,2.76 2.76,5.8c1.45,2.07 3.49,3.2 5.34,3.2c1.11,0 1.25,-0.25 1.25,-0.68l0,-1.57c0,-0.5 0.1,-0.6 0.46,-0.6c0.26,0 0.7,0.13 1.74,1.13c1.19,1.19 1.38,1.72 2.05,1.72l1.75,0c0.5,0 0.75,-0.25 0.6,-0.74c-0.15,-0.5 -0.72,-1.2 -1.47,-2.05c-0.4,-0.49 -1.02,-1 -1.2,-1.26c-0.26,-0.34 -0.2,-0.49 0,-0.78c0,0 2.13,-3 2.35,-4.03c0.11,-0.37 0,-0.64 -0.53,-0.64l-1.75,0a0.76,0.76 0 0 0 -0.76,0.5s-0.9,2.16 -2.15,3.57c-0.41,0.41 -0.6,0.54 -0.82,0.54c-0.1,0 -0.27,-0.13 -0.27,-0.5l0,-3.47c0,-0.44 -0.13,-0.64 -0.5,-0.64l-2.75,0c-0.28,0 -0.45,0.2 -0.45,0.4c0,0.42 0.64,0.52 0.7,1.7l0,2.58c0,0.57 -0.1,0.67 -0.32,0.67c-0.6,0 -2.04,-2.18 -2.9,-4.67c-0.16,-0.48 -0.33,-0.68 -0.78,-0.68z' fill='%23fff' id='svg_3'/%3E%3Cpath d='m66.86,12.5c0,3.24 -2.43,5.5 -5.78,5.5s-5.78,-2.26 -5.78,-5.5s2.43,-5.5 5.78,-5.5s5.78,2.26 5.78,5.5zm-8.97,0c0,1.97 1.3,3.3 3.19,3.3s3.19,-1.33 3.19,-3.3c0,-1.98 -1.3,-3.25 -3.19,-3.25s-3.19,1.28 -3.19,3.25zm-17.14,-0.21c0.95,-0.44 1.56,-1.18 1.56,-2.33c0,-1.73 -1.58,-2.96 -3.87,-2.96l-5.27,0l0,11l5.5,0c2.37,0 4.02,-1.29 4.02,-3.05c0,-1.33 -0.87,-2.32 -1.94,-2.66zm-5.15,-3.28l2.83,0c0.85,0 1.44,0.5 1.44,1.2s-0.6,1.2 -1.44,1.2l-2.83,0l0,-2.4zm3.07,6.99l-3.06,0l0,-2.7l3.06,0c0.96,0 1.59,0.55 1.59,1.36s-0.63,1.33 -1.59,1.33l0,0.01zm13.17,2l3.19,0l-5.06,-5.71l4.64,-5.29l-2.9,0l-3.68,4.27l-0.6,0l0,-4.27l-2.43,0l0,11l2.44,0l0,-4.38l0.59,0l3.81,4.38zm24.63,-11l0,4.34l-4.93,0l0,-4.34l-2.44,0l0,11l2.43,0l0,-4.44l4.93,0l0,4.44l2.43,0l0,-11l-2.42,0zm10.43,11l-2.44,0l0,-8.78l-3.8,0l0,-2.22l10.04,0l0,2.22l-3.8,0l0,8.78zm9.5,-11c-2.11,0 -3.91,0.89 -4.52,2.8l2.24,0.37c0.34,-0.67 1.05,-1.2 2.15,-1.2c1.33,0 2.06,0.84 2.17,2.28l-2.32,0c-3.23,0 -4.79,1.42 -4.79,3.45c0,2.05 1.59,3.3 3.78,3.3c1.8,0 3,-0.72 3.53,-1.63l0.5,1.63l1.76,0l0,-6.18c0,-3.19 -1.74,-4.82 -4.5,-4.82zm-0.72,9c-1.19,0 -1.9,-0.5 -1.9,-1.4c0,-0.85 0.57,-1.44 2.43,-1.44l2.35,0c0,1.8 -1.19,2.84 -2.88,2.84zm17.99,2l-3.2,0l-3.8,-4.38l-0.6,0l0,4.38l-2.43,0l0,-11l2.43,0l0,4.27l0.6,0l3.67,-4.27l2.9,0l-4.63,5.29l5.06,5.71zm3.88,0l2.43,0l0,-8.78l3.8,0l0,-2.22l-10.04,0l0,2.22l3.8,0l0.01,8.78zm12.55,-11c3.34,0 5.56,2.4 5.56,5.37c0,0.3 -0.02,0.55 -0.04,0.79l-8.54,0c0.23,1.69 1.36,2.69 3.17,2.69c1.29,0 2.15,-0.4 2.68,-1.2l2.29,0.39c-0.88,2.01 -2.83,2.96 -5.12,2.96a5.28,5.28 0 0 1 -5.51,-5.5c0,-3.12 2.17,-5.5 5.51,-5.5zm2.92,4.25c-0.4,-1.37 -1.4,-2.15 -2.92,-2.15c-1.48,0 -2.47,0.74 -2.87,2.15l5.79,0z' fill='%23ffffff' id='svg_4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");)`)

    logo.addEventListener('click', function () {
        let audio = new Audio('https://zvukipro.com/uploads/files/2019-09/1568275226_fbe6297172aad1e.mp3');
        audio.volume = .3;
        audio.autoplay = true;
    })



    var bell = document.getElementsByClassName('TopNavBtn__icon')[0]; // Новая иконка музыки
    bell.setAttribute('style', `background-image : url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' fill='%23ffffff' d='m12,2.1c4,0 6.9,3.3 6.9,7.5l0,1.6c0,0.3 0.2,0.6 0.7,1.1l0.3,0.3c1,1 1.5,1.7 1.5,2.7c0,0.5 0,0.8 -0.3,1.2c-0.4,1 -1.4,1.4 -2.8,1.4l-2,0c-0.6,2.3 -2,3.6 -4.3,3.6c-2.2,0 -3.8,-1.3 -4.4,-3.7l0,0.1l-1.9,0c-1.5,0 -2.4,-0.5 -2.9,-1.4c-0.2,-0.4 -0.2,-0.7 -0.2,-1.2c0,-1 0.4,-1.6 1.5,-2.7l0.3,-0.3c0.5,-0.5 0.7,-0.8 0.7,-1l0,-1.8c0,-4.1 2.9,-7.4 6.9,-7.4zm2.5,15.8l-5,0c0.5,1.2 1.3,1.8 2.5,1.8s2,-0.6 2.5,-1.8zm-2.5,-14c-3,0 -5.1,2.4 -5.1,5.7l0,1.6c0,0.9 -0.4,1.5 -1.2,2.4l-0.3,0.2c-0.8,0.8 -1,1.2 -1,1.5l0,0.4c0.2,0.2 0.5,0.4 1.3,0.4l12.6,0c0.8,0 1.1,-0.2 1.2,-0.4l0.1,-0.4c0,-0.3 -0.2,-0.7 -1,-1.5a41,41 0 0 1 -0.3,-0.2c-0.8,-1 -1.2,-1.5 -1.2,-2.4l0,-1.6c0,-3.3 -2.1,-5.6 -5.1,-5.6l0,-0.1z'/%3E%3C/g%3E%3C/svg%3E");`)

    var music = document.getElementsByClassName('TopNavBtn__icon')[1]; // Новая иконка музыки
    music.setAttribute('style', `background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' fill-rule='evenodd' fill='%23ffffff' d='m16.7,3.6a17.3,17.3 0 0 1 1.8,-0.2c0.2,0 0.4,0.2 0.5,0.4l0,0.4l0.1,1.3l-10.2,2.1l0,-0.5a15.5,15.5 0 0 1 0,-1.4l0.5,-0.5l0.3,-0.1l1,-0.2l6,-1.3zm-9.6,11l-0.2,0a6,6 0 0 0 -4,1.2c-1,0.8 -1.3,1.8 -1.3,2.7c0,1.9 1.5,3.5 3.4,3.5c0.9,0 2,-0.4 2.7,-1.3a6,6 0 0 0 1.2,-4l0,-7.2l10.2,-2.1l0,5.2l-0.2,0a6,6 0 0 0 -4,1.2c-1,0.8 -1.3,1.8 -1.3,2.7c0,1.9 1.5,3.4 3.4,3.4c0.9,0 2,-0.4 2.7,-1.3a6,6 0 0 0 1.2,-4l0,-9.1l0,-1.5c0,-0.4 -0.2,-0.8 -0.4,-1.2c-0.3,-0.5 -0.8,-1 -1.4,-1.1c-0.4,-0.2 -0.9,-0.2 -1.3,-0.1l-1.4,0.2l-6,1.3l-1.2,0.2a3,3 0 0 0 -0.9,0.5c-0.4,0.3 -0.7,0.7 -1,1.2a3,3 0 0 0 -0.2,1l0,1l0,7.6zm9,0.6c-0.5,0.4 -0.7,0.9 -0.7,1.3c0,0.9 0.7,1.6 1.6,1.6c0.4,0 1,-0.2 1.3,-0.6c0.4,-0.5 0.8,-1.4 0.8,-2.9l0,-0.2l-0.2,0c-1.5,0 -2.4,0.4 -2.9,0.8l0.1,0zm-12.8,3.3c0,-0.4 0.2,-1 0.6,-1.3c0.5,-0.4 1.4,-0.8 2.9,-0.8l0.2,0l0,0.2c0,1.5 -0.4,2.4 -0.8,2.9c-0.4,0.4 -0.9,0.6 -1.3,0.6c-0.9,0 -1.6,-0.7 -1.6,-1.6z' clip-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E");`)


    function clickSound(obj, sound, volume = .2) { // Функция щелканья при клике на объект
        document.querySelector(obj).addEventListener('click', () => {
            let soundClick = new Audio(sound)
            soundClick.volume = volume;
            soundClick.autoplay = true;
        })
    }

    clickSound('#top_notify_btn', 'https://zvukipro.com/uploads/files/2019-09/1568276021_f946f3f8c39b945.mp3') // Щелканье при клике на колокольчик  

    clickSound('#top_audio', 'https://zvukipro.com/uploads/files/2019-09/1568276021_f946f3f8c39b945.mp3') // Щелканье при клике на аудио    

    clickSound('#top_profile_link', 'https://zvukipro.com/uploads/files/2019-09/1568276128_8bb9a29014590e5.mp3') // Нажатие на значок профиля в правом верхнем углу   



    function clickAndNavSound(div, overS, clickS, overSVol = .1, clickSVol = .3) { // (большой объект, звук при наведении на маленький, звук при нажатии на маленький, громкость звука при наведении, громкость звука при нажатии)
        for (var i = 0; i < document.querySelectorAll(div).length; i++) { //div - большой объект, в котором есть много маленьких
            document.querySelectorAll(div)[i].addEventListener('mouseover', () => {
                let overSound = new Audio(overS); // overS - звук при наведении на объект из div
                overSound.volume = overSVol;
                overSound.autoplay = true;
            })
            document.querySelectorAll(div)[i].addEventListener('click', () => {
                let clickSound = new Audio(clickS); // clickS - звук при нажатии на объект из div
                clickSound.volume = clickSVol;
                clickSound.autoplay = true;
            })
        }
    }

    clickAndNavSound('.left_row', 'https://zvukipro.com/uploads/files/2020-12/1607403427_f1904a8be71e239.mp3', 'https://zvukipro.com/uploads/files/2019-09/1568274777_e61cdb72dc8aa8c.mp3') // Щелканье и наведение на объекты в левом меню                                                         

    clickAndNavSound('.top_profile_mrow', 'https://zvukipro.com/uploads/files/2020-12/1607403427_f1904a8be71e239.mp3', 'https://zvukipro.com/uploads/files/2019-09/1568274777_e61cdb72dc8aa8c.mp3') // Щелканье и наведение на объекты профиля



    var audio = new Audio('https://zvukipro.com/uploads/files/2019-07/1564068640_cf9b99726102246.mp3'); // Звук печати
    audio.autoplay = false;
    audio.volume = .3;

    setInterval(function () {
        try {
            if (window.location.search.indexOf('sel') !== -1) {

                if (document.querySelector('.im-page--typing').classList.contains('im-page--typing_vis') == true) { // Звук печати
                    audio.play();
                }
                if (document.querySelector('.im-page--typing').classList.contains('im-page--typing_vis') == false) {
                    audio.pause();
                }
            } else {
                audio.pause();
            }
        } catch (e) {}
    }, 100)



    setInterval(function () {
        if (document.querySelector('.top_notify_btn').classList.contains('TopNavBtn--active')) { // Бирюзовый цвет при нажатии на колокольчик
            document.querySelector('.top_notify_btn').setAttribute('style', 'background-color : #7FE7E4FF');
        } else {
            document.querySelector('.top_notify_btn').setAttribute('style', 'background-color : #4D77A7FF');
        };

    }, 100)


    setInterval(function () {
        if (document.querySelector('#top_audio_btn_group').classList.contains('TopNavBtn--active')) { // Бирюзовый цвет при нажатии на аудио
            document.querySelector('#top_audio_btn_group').setAttribute('style', 'background-color : #7FE7E4FF');
        } else {
            document.querySelector('#top_audio_btn_group').setAttribute('style', 'background-color : #4D77A7FF');
        }
    }, 100);


    var prev = document.getElementsByClassName('top_audio_player_btn_icon')[0]; // Кнопка назад на плеере
    prev.setAttribute('style', `background-image : url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' fill-rule='evenodd' fill='%23ffffff' d='m7,6.25a1,1 0 0 1 1,1l0,3.45l6.38,-3.68c0.65,-0.38 0.98,-0.57 1.24,-0.6c0.54,-0.05 1.05,0.25 1.27,0.74c0.11,0.24 0.11,0.62 0.11,1.38l0,6.92c0,0.76 0,1.14 -0.1,1.38c-0.23,0.5 -0.74,0.79 -1.28,0.73c-0.26,-0.02 -0.6,-0.21 -1.25,-0.59l-6.37,-3.68l0,3.45a1,1 0 1 1 -2,0l0,-9.5a1,1 0 0 1 1,-1z' clip-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E");`);

    var play = document.getElementsByClassName('top_audio_player_btn_icon')[1];

    setInterval(function () {
        let playTxt = document.querySelector('._top_audio_player_play_blind_label').innerText; // Кнопка Play на плеере
        if (playTxt == 'Воспроизвести') {
            play.setAttribute('style', `background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='m17.74,9.97c0.88,0.5 1.31,0.76 1.52,1.04c0.43,0.59 0.43,1.38 0,1.97c-0.2,0.28 -0.64,0.53 -1.52,1.04l-7.23,4.17c-0.87,0.5 -1.3,0.76 -1.66,0.8c-0.72,0.07 -1.4,-0.32 -1.7,-0.98c-0.14,-0.33 -0.14,-0.83 -0.14,-1.84l0,-8.35c0,-1 0,-1.51 0.14,-1.83c0.3,-0.67 0.98,-1.06 1.7,-0.99c0.35,0.04 0.8,0.3 1.66,0.8l7.23,4.17z' fill='%23ffffff' id='svg_1'/%3E%3C/g%3E%3C/svg%3E");`)
        };
        if (playTxt == 'Приостановить') { // Кнопка остановить на плеере
            play.setAttribute('style', `background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' fill-rule='evenodd' fill='%23ffffff' d='m5.1,4.55c-0.1,0.21 -0.1,0.49 -0.1,1.05l0,12.8c0,0.56 0,0.84 0.1,1.05a1,1 0 0 0 0.45,0.44c0.21,0.11 0.49,0.11 1.05,0.11l1.8,0c0.56,0 0.84,0 1.05,-0.1a1,1 0 0 0 0.44,-0.45c0.11,-0.21 0.11,-0.49 0.11,-1.05l0,-12.8c0,-0.56 0,-0.84 -0.1,-1.05a1,1 0 0 0 -0.45,-0.44c-0.21,-0.11 -0.49,-0.11 -1.05,-0.11l-1.8,0c-0.56,0 -0.84,0 -1.05,0.1a1,1 0 0 0 -0.44,0.45l-0.01,0zm9,0c-0.1,0.21 -0.1,0.49 -0.1,1.05l0,12.8c0,0.56 0,0.84 0.1,1.05a1,1 0 0 0 0.45,0.44c0.21,0.11 0.49,0.11 1.05,0.11l1.8,0c0.56,0 0.84,0 1.05,-0.1a1,1 0 0 0 0.44,-0.45c0.11,-0.21 0.11,-0.49 0.11,-1.05l0,-12.8c0,-0.56 0,-0.84 -0.1,-1.05a1,1 0 0 0 -0.45,-0.44c-0.21,-0.11 -0.49,-0.11 -1.05,-0.11l-1.8,0c-0.56,0 -0.84,0 -1.05,0.1a1,1 0 0 0 -0.44,0.45l-0.01,0z' clip-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E");`);
        }
    }, 100);

    var next = document.getElementsByClassName('top_audio_player_btn_icon')[2]; // Кнопка вперед на плеере
    next.setAttribute('style', `background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' fill-rule='evenodd' fill='%23ffffff' d='m17,6.25a1,1 0 0 0 -1,1l0,3.45l-6.38,-3.68c-0.65,-0.38 -0.98,-0.57 -1.24,-0.6a1.25,1.25 0 0 0 -1.27,0.74c-0.11,0.24 -0.11,0.62 -0.11,1.38l0,6.92a4,4 0 0 0 0.1,1.38c0.23,0.5 0.74,0.79 1.28,0.73a4,4 0 0 0 1.24,-0.59l6.38,-3.68l0,3.45a1,1 0 1 0 2,0l0,-9.5a1,1 0 0 0 -1,-1z' clip-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E");`);

    var player = document.getElementById('top_audio_player'); // Наведение на плеер
    player.addEventListener('mouseover', function () {
        player.setAttribute('style', 'background-color : #40638BFF')
    });
    player.addEventListener('mouseout', function () {
        player.setAttribute('style', 'background-color : #4D77A7FF')
    });

    setInterval(function () {
        var playerTitle = document.getElementsByClassName('top_audio_player_title')[0];
        playerTitle.setAttribute('style', 'color : #DBECFFFF');
    }, 100)


    setInterval(function () {
        var profile = document.getElementById('top_profile_link'); // Задний фон при нажатии на профиль в правом верхнем углу
        if (profile.classList.contains("active")) {
            profile.setAttribute('style', 'background-color : #6094D0FF');
        } else {
            profile.setAttribute('style', 'background-color : #4D77A7FF');
        }
    }, 100);

    setInterval(function () {
        if (document.querySelectorAll('.im_gift').length !== 0) {
            let stickers = document.querySelectorAll('.im_gift'); // Неперетаскиваемые стикеры
            for (index = 0; index < document.querySelectorAll('.im_gift').length; index++) {
                stickers[index].setAttribute('ondragstart', 'return false;');
            }
        }
    }, 100);