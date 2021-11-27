document.querySelector('.carousel-left-arrow-button').addEventListener('click', (e) => {
    carouselStart -= CAROUSEL_AMOUNT;
    setCarouselItems();
});

document.querySelector('.carousel-right-arrow-button').addEventListener('click', (e) => {
    carouselStart += CAROUSEL_AMOUNT;
    setCarouselItems();
});