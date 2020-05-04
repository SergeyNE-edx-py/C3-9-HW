// Checkboxes - сохранение в localStorage, восстановление из localStorage, очистка localStorage
let savedChecks = (localStorage.getItem('checks')).split(",").map(e => e == 'false' ? false : true)
let checkBoxes = document.getElementsByClassName("form-check-input");
let saveChecksButton = document.getElementById("SaveChecks");
let clearStorageButton = document.getElementById("clearStorage");

if (savedChecks) {
    [...checkBoxes].map( (ch, i) => {
        ch.checked = savedChecks[i];

        ch.disabled = true;
    })

    saveChecksButton.disabled = true;           
}

saveChecksButton.addEventListener('click', () => {
    let checks = [...checkBoxes].map(ch => ch.checked);

    localStorage.setItem('checks', checks);

    [...checkBoxes].map(ch => ch.disabled = true);
    saveChecksButton.disabled = true;

    console.log('Save Checks:', checks, localStorage.getItem('checks'));
})

clearStorageButton.addEventListener('click', () => {
    localStorage.removeItem('checks');

    [...checkBoxes].map(ch => ch.disabled = false);
    saveChecksButton.disabled = false;

    console.log('Clear localStorage:', localStorage.getItem('checks'));
})
