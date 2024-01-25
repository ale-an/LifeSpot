function request() {
    let userName = prompt('Напишите, пожалуйста, ваше имя')
    let feedback = prompt('Оставьте отзыв')

    add(userName, feedback);
}

let add = (name, text) => {
    let elem = document.getElementsByClassName('list')[0];
    elem.innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${name}</b>  ${new Date().toLocaleDateString()}</i></p>` +
        `<p>${text}</p>` +
        '</div>';
}