const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
            card.style.position = 'relative';
            card.style.width = '300px';
            card.style.height = '200px';
        } else {
            card.classList.add('expanded');
            card.style.position = 'fixed';
            card.style.top = '0';
            card.style.left = '0';
            card.style.width = '100vw';
            card.style.height = '100vh';
        }
    });
});