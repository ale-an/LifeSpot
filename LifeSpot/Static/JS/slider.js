const slider = document.getElementsByClassName('slider')[0];
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slides = Array.from(slider.querySelectorAll('img'));
let slideCount = slides.length;
let slideIndex = 0;

function showPreviousSlide() {
    if (slideIndex - 1 < 0)
        return;

    slideIndex = slideIndex - 1;
    updateSlider();
}

function showNextSlide() {
    if (slideIndex + 1 >= slideCount)
        return;

    slideIndex = slideIndex + 1;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlider();