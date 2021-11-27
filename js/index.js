
const getCarouselItems = () => {
    const carousel = document.querySelector('.carousel-content');
    for (let i = 0; i < MAX_CAROUSEL_SIZE; i++) {
        appendItemToCarousel(carousel, items[i]);
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


getCarouselItems();



