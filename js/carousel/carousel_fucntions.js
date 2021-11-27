
const setCarouselItems = () => {
    const carousel = document.querySelector('.carousel-content');
    const pageAmount = document.querySelector('.carousel-page-amount');

    // Show number of pages in the carousel
    pageAmount.textContent = Math.ceil(carouselItems.length / CAROUSEL_AMOUNT);
    
    // Remove current carousel items
    carousel.innerHTML = '';
    
    if (carouselStart < 0) {
        // Exceeded carousel-items array from start
        carouselStart = carouselItems.length - (carouselItems.length % CAROUSEL_AMOUNT);
    }

    if (carouselStart > carouselItems.length) {
        // Exceeded carousel-items array from end
        carouselStart = 0;
    }

    // Append next carousel items
    for (let i = carouselStart; i < carouselItems.length && i< carouselStart + CAROUSEL_AMOUNT; i++) {
        appendItemToCarousel(carousel, carouselItems[i]);
    }
}

const appendItemToCarousel = (carousel, item) => {
    const div = document.createElement('div');
    div.className = 'carousel-content-item';
    div.innerHTML = toInnerHTML(item);
    carousel.appendChild(div);
}

// Convert item object to innerHTML
const toInnerHTML = (item) => {
    let rating = '';

    // item was rated
    if (item.stars !== 0) {
        rating = `
            <div class="item-rating">
                <figure class="item-stars" style="${item.stars.style}"></figure>
                <span class="item-global-rating">${item.global_rating}</span>
            </div>
        `;
    }

    return (`
        <div class="item-img-container">
            <img class="item-img" src="${item.src}" alt="shirt-img"/>
        </div>
        <p class="item-title">${item.title}</p>
        ${rating}
        <p class="item-price"><span>$</span>${item.price}</p>
        <p class="item-shipping-price">$${item.shipping_price} shipping</p>
    `)
}


setCarouselItems();



