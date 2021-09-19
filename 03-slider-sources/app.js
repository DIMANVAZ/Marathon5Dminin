const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');

const container = document.querySelector('.container');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

let mainSlidesCount = document.querySelectorAll('.main-slide div').length //количество слайдов - переменная

let activeSlideIndex = 0;
sidebar.style.top = `-${(mainSlidesCount-1) * 100}vh`

upBtn.addEventListener('click', ()=> {changeSlide
('up')});
downBtn.addEventListener('click', ()=> {changeSlide
('down')});

function changeSlide(direction) {
    if (direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex === mainSlidesCount) {
            activeSlideIndex = 0;
        }
    }
    else if (direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = mainSlidesCount - 1;
        }
    }
    let height = container.clientHeight //высота области просмотра

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)` //для слайдинга картинок
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)` //для слайдинга сайдбара
}