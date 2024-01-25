// для получения пользовательского ввода самое простое - воспользоваться конструкцией prompt()
let userName = prompt("Пожалуйста, введите ваше имя");
let elements = document.getElementsByTagName('*');
alert(`Приветствуем, ${userName}. В вашем имени ${userName.length} символа(ов). Количество элементов на странице — ${elements.length}.`)