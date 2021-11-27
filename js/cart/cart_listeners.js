document.querySelector('input[value="Add to Cart"]').addEventListener('click', () => {
    const cartAmount = document.querySelector('.cart-icon-amount');
    cartAmount.textContent++; 
});

document.querySelector('input[value="Add to List"]').addEventListener('click', () => {
    const cartAmount = document.querySelector('.cart-icon-amount');
    if (cartAmount.textContent > 0) {
        cartAmount.textContent--; 
    }
});