var slidersNum = 0,
    sliderElements = document.querySelectorAll('.slider .slide'),
    slidersCount = sliderElements.length,
    sliderTimer;

sliderElements[slidersNum].classList.add("active");

sliderTimer = setInterval(slide, 4000);

function displaySlide(slideNum) {
    sliderElements[slidersNum].classList.remove("active");
    slidersNum = (slideNum < slidersCount ? (slideNum >= 0 ? slideNum : slidersCount - 1) : 0);
    sliderElements[slidersNum].classList.add("active");
}

function slide() {
    displaySlide(slidersNum + 1)
}

function prev() {
    clearInterval(sliderTimer);
    displaySlide(slidersNum - 1);
    sliderTimer = setInterval(slide, 2000);
}

function next() {
    clearInterval(sliderTimer);
    displaySlide(slidersNum + 1);
    sliderTimer = setInterval(slide, 2000);
}
