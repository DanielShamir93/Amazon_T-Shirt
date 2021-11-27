document.querySelector('.carousel-left-arrow-button').addEventListener('click', (e) => {
    const currPage = document.querySelector('.carousel-curr-page');
    
    if (currPage.textContent > 1) {
        // Decrement current in the carousel
        currPage.textContent--;
    } else {
        // Set current in the carousel to end page
        currPage.textContent = Math.ceil(carouselItems.length / CAROUSEL_AMOUNT);
    }
    // Set the prev page in the carousel
    carouselStart -= CAROUSEL_AMOUNT;
    setCarouselItems();
});

document.querySelector('.carousel-right-arrow-button').addEventListener('click', (e) => {
    const currPage = document.querySelector('.carousel-curr-page');

    if (currPage.textContent < Math.ceil(carouselItems.length / CAROUSEL_AMOUNT)) {
        // Increment current in the carousel
        currPage.textContent++;
    } else {
        // Set current in the carousel to starting page
        currPage.textContent = 1;
    }
    // Set the next page in the carousel
    carouselStart += CAROUSEL_AMOUNT;
    setCarouselItems();
});