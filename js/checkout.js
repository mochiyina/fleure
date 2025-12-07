document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(sessionStorage.getItem("fleureCart")) || [];
    const checkoutItems = document.getElementById("checkoutItems");
    const subtotalEl = document.getElementById("checkoutSubtotal");
    const totalEl = document.getElementById("checkoutTotal");

    let subtotal = 0;

    if(cart.length === 0){
        checkoutItems.innerHTML = `<p class="text-center py-5">Your cart is empty. Please add items before checkout.</p>`;
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "d-flex justify-content-between mb-2";
            itemDiv.innerHTML = `<span>${item.name} x ${item.qty}</span><span>RM ${(item.price * item.qty).toFixed(2)}</span>`;
            checkoutItems.appendChild(itemDiv);

            subtotal += item.price * item.qty;
        });
    }

    subtotalEl.textContent = subtotal.toFixed(2);
    totalEl.textContent = subtotal.toFixed(2);

    document.getElementById("confirmOrderBtn")?.addEventListener("click", () => {
        alert("Thank you for your order! Your order has been confirmed.");
        sessionStorage.removeItem("fleureCart");
        window.location.href = "dashboard.html";
    });
});
