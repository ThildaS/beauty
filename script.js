let cartCount = 0;

// Add product to cart
function addToCart(product, price) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert(`${product} added to cart!`);
}

// Show product details in modal
function showDetails(title, description, imgSrc) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('product-modal').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Filter products by category
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
