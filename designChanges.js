export const changeHeader = () => {
    const header = document.getElementById("page_header_wrap"); // Шапка вк
    header.setAttribute('style', 'background-color : #4D77A7FF');
}

export const changeLogo = () => {
    const logo = document.getElementsByClassName("TopHomeLink")[0]; // Новый логотип ВК
    while (logo.firstChild) {
        logo.removeChild(logo.firstChild);
    }
    logo.classList.add('main_logo')
    return logo;
}

export const changeBell = () => {
    const bell = document.querySelector('.TopNavBtn__icon')
    bell.querySelector('path').setAttribute('fill', '#FFF')
    return bell;
}

export const changeMusicLogo = () => {
    const music = document.getElementsByClassName('TopNavBtn__icon')[1];
    music.querySelector('path').setAttribute('fill', '#FFF')
    return music;
}

export const changeRightButton = () => {
    const rightButton = document.querySelector('#react_rootEcosystemServicesNavigationEntry');
    rightButton.querySelector('path').setAttribute('fill', '#FFF')
    return rightButton;
}
