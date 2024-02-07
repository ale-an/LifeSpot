/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */

/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession() {
    // Сохраним время начала сессии
    if (window.sessionStorage.getItem("startDate") == null) {
        sessionStorage.setItem("startDate", new Date().toLocaleString());
    }
    // Сохраним UserAgent
    if (window.sessionStorage.getItem("userAgent") == null) {
        sessionStorage.setItem("userAgent", window.navigator.userAgent);
    }
}

/*
* Проверка возраста пользователя
* 
* */
function checkAge(newVisit) {
    if (!sessionStorage.getItem("age")) {

        sessionStorage.setItem("age", prompt("Пожалуйста, введите ваш возраст?"));

        let age = sessionStorage.getItem("age");

        if (age >= 18) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        } else {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. ВыL будете перенаправлены");
            window.location.href = "http://www.google.com"
        }
    }
}


/*
* Вывод данных сессии в консоль
* 
* */
let sessionLog = function () {
    for (let field of sessionStorage) {
        console.log(session[field])
    }
}

/*
* Функция для фильтраци контента
* Будет вызываться благодаря атрибуту oninput на index.html
* 
* */

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




