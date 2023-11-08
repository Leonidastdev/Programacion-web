document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.getAttribute("data-product");
            const productPrice = parseFloat(this.getAttribute("data-price"));

            const cartItem = document.createElement("li");
            cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItems.appendChild(cartItem);

            const currentTotal = parseFloat(cartTotal.textContent);
            cartTotal.textContent = (currentTotal + productPrice).toFixed(2);
        });
    });
});