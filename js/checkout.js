document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(sessionStorage.getItem("fleureCart")) || [];
    const checkoutItems = document.getElementById("checkoutItems");
    const orderSummaryDiv = document.querySelector(".order-summary");

    if(cart.length === 0){
        checkoutItems.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-cart-x" style="font-size:3rem;color:var(--primary-pink);"></i>
                <h4 class="mt-3">Your cart is empty</h4>
                <p class="text-muted">Add some flowers first!</p>
                <a href="products.php" class="btn btn-view-all mt-3">Browse Products</a>
            </div>`;
        orderSummaryDiv.innerHTML = "";
        return;
    }

    cart.forEach(item=>{
        const div = document.createElement("div");
        div.className = "d-flex justify-content-between align-items-center mb-2";
        div.innerHTML = `
            <span>${item.name} x ${item.qty}</span>
            <span>RM ${(item.price*item.qty).toFixed(2)}</span>`;
        checkoutItems.appendChild(div);
    });

    const subtotal = cart.reduce((sum,item)=>sum + item.price*item.qty,0);
    const total = subtotal;

    orderSummaryDiv.innerHTML = `
        <div class="d-flex justify-content-between mb-2"><span>Subtotal:</span><span>RM ${subtotal.toFixed(2)}</span></div>
        <hr>
        <div class="d-flex justify-content-between mb-2"><strong>Total:</strong><strong>RM ${total.toFixed(2)}</strong></div>
    `;

    document.getElementById("confirmBtn").onclick = () => {
        sessionStorage.setItem("fleureCart", JSON.stringify(cart));

        sessionStorage.removeItem("fleureCart");

        window.location.href = "order-confirmation.php";
    };

    document.getElementById("backCartBtn").onclick = () => {
        window.location.href = "cart.php";
    };
});
