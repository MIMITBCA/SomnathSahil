// Load cart data from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save cart data to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Function to add product to cart
function addToCart(name, price) {
    cartItems.push({ name: name, price: price });
    saveCart();
    alert('Item added to cart!');
}

// Wait for the DOM content to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to "Add to Cart" buttons
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let name = this.getAttribute('data-name');
            let price = parseFloat(this.getAttribute('data-price'));
            addToCart(name, price);
        });
    });
});
