const itemsLength = document.querySelectorAll('.list-times__item').length;
const btnTime = document.querySelector('.btn-time');
const btnTimeHide = document.querySelector('.btn-time-hide');
const itemTime = document.querySelectorAll('.list-times__item');


showItems(widthWindiw());
showBtnTime()

// Отслеживаем изменение ширины экрана
addEventListener('resize', (event) => {
    showItems(widthWindiw());
    hideShow();
});

//Показать кнопку еще
function showBtnTime() {
    if (itemsLength > 3) {
        btnTime.classList.add('show');
    } else if (itemsLength <= 3) {
        btnTime.classList.add('hide');
    }
}

//Скрыть кнопку 'Скрыть' и показать кнопку 'еще'
function hideShow() {
    btnTimeHide.classList.remove('show');
    btnTimeHide.classList.add('hide');
    showBtnTime()
}

// Получаем ширину экрана
function widthWindiw() {
    let windowWidthOnload = window.screen.width;

    return windowWidthOnload;
}

// Условие при котором элменты скрываются или показываются
function showItems(width) {
    if (width <= 392 && itemsLength > 3) {
        let i;
        for (i = 3; i < itemTime.length; i++) {
            itemTime[i].classList.remove('show');
            itemTime[i].classList.add('hide');
        }
    }

    if (width >= 425 && width < 480 && itemsLength >= 4) {
        for (i = 4; i < itemTime.length; i++) {
            itemTime[3].classList.add('show');
            itemTime[i].classList.add('hide');
        }
    } 

    if (width >= 480 && itemsLength > 5) {
        for (i = 5; i < itemTime.length; i++) {
            itemTime[4].classList.add('show');
            itemTime[i].classList.add('hide');
        }
    }

    if (width <= 456 && itemsLength > 4) {
        for (i = 4; i < itemTime.length; i++) {
            itemTime[4].classList.remove('show');
            itemTime[i].classList.add('hide');
        }
    }

    if (width >= 576 && itemsLength > 5) {
        for (i = 6; i < itemTime.length; i++) {
            itemTime[5].classList.add('show');
            itemTime[i].classList.add('hide');
        }
    }

    if (width <= 521 && itemsLength > 5) {
        for (i = 4; i < itemTime.length; i++) {
            itemTime[5].classList.remove('show');
            itemTime[i].classList.add('hide');
        }
    }

    if (width >= 768 && itemsLength > 3) {
        let i;
        for (i = 3; i < itemTime.length; i++) {
            itemTime[i].classList.remove('show');
            itemTime[i].classList.add('hide');
        }
    }
}

//Обработчик клика ЕЩЕ
btnTime.addEventListener('click', function() {
    btnTime.classList.remove('show'); 
    btnTime.classList.add('hide');
    btnTimeHide.classList.add('show');

    for (i = 0; i < itemTime.length; i++) { 
        itemTime[i].classList.remove('hide');
        itemTime[i].classList.add('show');
    }
})

//Обработчик клика СКРЫТЬ
btnTimeHide.addEventListener('click', function() {
    btnTimeHide.classList.remove('show');
    btnTimeHide.classList.add('hide');
    btnTime.classList.remove('hide'); 
    btnTime.classList.add('show');

    for (i = 3; i < itemTime.length; i++) { 
        itemTime[i].classList.remove('show');
        itemTime[i].classList.add('hide');
    }
})