let session = new Map();

function checkAge() {
    let age = prompt("Пожалуйста, введите ваш возраст?");
    session.set("userAge", age)

    if (age >= 18) {
        alert('Приветствуем на LifeSpot ' + new Date().toLocaleString());
    } else {
        alert('Вы слишком молоды для такого содержимого, посмотрите видео с котиками.');
        window.location.href = "http://www.google.com"
    }
}

function advertisement() {
    alert('Подпишитесь на нас в Instagram')
}

setTimeout(advertisement, 60000)

function handleSession() {
    session.set("userAgent", window.navigator.userAgent)
    session.set("startDate", new Date().toLocaleString())
}

let sessionLog = function () {
    for (let result of session) {
        console.log(result)
    }
}

function getSearch() {
    let elementText = funcElementText();
    let video = document.getElementsByClassName('video-container');
    for (let i = 0; i < video.length; i++) {
        let title = video[i].getElementsByClassName('video-title')[0].innerText;

        if (title.toLowerCase().includes(elementText.toLowerCase())) {
            video[i].style.display = 'inline-block';
        } else {
            video[i].style.display = 'none'
        }

    }
}