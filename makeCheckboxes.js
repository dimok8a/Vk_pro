const checkboxesTemplate = `
<div class="choicer_div">
<input type="checkbox" id="clickingChoicer">
<label for="clickingChoicer" class="labels">Щелканье</label>
</div>
<div class="choicer_div">
<input type="checkbox" id="musicChoicer">
<label for="musicChoicer" class="labels">Музыка из лифта</label>
</div>`
export function makeCheckboxes() {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('checkbox_div');
    checkboxDiv.innerHTML = checkboxesTemplate
    document.querySelector('#side_bar_inner').appendChild(checkboxDiv);
    document.querySelector('#clickingChoicer').addEventListener('click', (e) => {
        localStorage.setItem('isClicking', document.querySelector('#clickingChoicer').checked)
    })
    document.querySelector('#musicChoicer').addEventListener('click', (e) => {
        localStorage.setItem('isMusicPlaying', document.querySelector('#musicChoicer').checked)
    })
    return [document.querySelector('#clickingChoicer'), document.querySelector('#musicChoicer')]
}
