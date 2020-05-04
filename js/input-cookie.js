// Input1 - сохранение в cookie, восстановление из cookie, очистка cookie
let savedInput = getCookie("Input1");
let inputField = document.getElementById("Input1");
let inputHelp = document.getElementById("InputHelp");
let saveInputButton = document.getElementById("SaveInput");
let clearCookieButton = document.getElementById("clearCookie");

if (savedInput) {
    inputField.value = savedInput;

    inputField.disabled = true;
    saveInputButton.disabled = true;

    inputHelp.innerHTML = "Указанный город был ранее сохранен в cookie"

    console.log("savedInput", inputField.value, inputField.disabled, saveInputButton.disabled)           
}

saveInputButton.addEventListener('click', () => {
    setCookie("Input1", inputField.value, {'max-age': 60})

    inputField.disabled = true;
    saveInputButton.disabled = true;

    inputHelp.innerHTML = "Указанный город будет храниться в cookie <strong>в течение 1 мин</strong>"           

    console.log('Save Input:', getCookie("Input1"));
})

clearCookieButton.addEventListener('click', () => {
    deleteCookie("Input1");

    inputField.disabled = false;
    saveInputButton.disabled = false;

    inputHelp.innerHTML = "По нажатию кнопки  <strong>Сохранить</strong>, указанный город сохранится в cookie"           

    console.log('Clear Cookie:', getCookie("Input1"));
})

// возвращает куки с указанным name, или undefined, если ничего не найдено      
'use strict';
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    let updatedCookie = name + "=" + value;

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}      
