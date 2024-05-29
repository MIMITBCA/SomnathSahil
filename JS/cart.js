// Load cart data from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save cart data to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Function to remove product from cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    saveCart();
    updateCart();
}

// Function to update cart display
function updateCart() {
    let cartList = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Clear previous cart items
    cartList.innerHTML = '';

    // Add current cart items
    cartItems.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeFromCart(index);
        });
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        total += item.price;
    });

    // Update total
    cartTotal.textContent = total.toFixed(2);
    let checkoutButton = document.getElementById('checkoutBtn');
    if (cartItems.length > 0) {
        checkoutButton.disabled = false;
    } else {
        checkoutButton.disabled = true;
    }
}
// Function to redirect to checkout page
function redirectToCheckout() {
    const cartParams = new URLSearchParams();
            cartItems.forEach(item => {
                cartParams.append('name', item.name);
                cartParams.append('price', item.price);
            });
            window.location.href = `checkout.html?${cartParams.toString()}`;
}

// Function to clear the cart
function clearCart() {
    cartItems = [];
    saveCart();
    updateCart();
}

// Function to handle checkout
function checkout() {
    alert('Checkout functionality will be implemented in the future!');
}

// Clear cart button event listener
document.getElementById('clear-cart').addEventListener('click', clearCart);

// Checkout button event listener
document.getElementById('checkout-button').addEventListener('click', checkout);

// Update cart display when the page loads
updateCart();
