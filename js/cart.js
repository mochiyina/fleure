document.addEventListener("DOMContentLoaded", () => {
    const cartKey = "fleureCart";
    const cartItemsContainer = document.getElementById("cartItems");

    let cart = JSON.parse(sessionStorage.getItem(cartKey)) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = "";

        if(cart.length === 0){
            cartItemsContainer.innerHTML = `
                <div class="text-center py-5">
                    <i class="bi bi-cart-x" style="font-size:3rem;color:var(--primary-pink);"></i>
                    <h4 class="mt-3">Your cart is empty</h4>
                    <p class="text-muted">Start adding some beautiful flowers!</p>
                    <a href="products.php" class="btn btn-view-all mt-3">Browse Products</a>
                </div>`;
            updateSummary();
            return;
        }

        cart.forEach((item,index)=>{
            const itemDiv = document.createElement("div");
            itemDiv.className = "card mb-3 p-3";
            itemDiv.innerHTML = `
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.img}" style="width:80px;height:80px;object-fit:cover;">
                        <div>
                            <h6>${item.name}</h6>
                            <p class="mb-0">RM ${item.price} x <span id="qty-${index}">${item.qty}</span></p>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-outline-secondary btn-sm me-1" data-action="minus" data-index="${index}">-</button>
                        <button class="btn btn-outline-secondary btn-sm me-1" data-action="plus" data-index="${index}">+</button>
                        <button class="btn btn-danger btn-sm" data-action="remove" data-index="${index}"><i class="bi bi-trash"></i></button>
                    </div>
                </div>`;
            cartItemsContainer.appendChild(itemDiv);
        });

        const addMoreDiv = document.createElement("div");
        addMoreDiv.className = "mt-3 text-end";
        addMoreDiv.innerHTML = `<button class="btn btn-secondary" id="addMoreBtn">Add More Items</button>`;
        cartItemsContainer.appendChild(addMoreDiv);

        document.getElementById("addMoreBtn").onclick = () => {
            window.location.href = "products.php";
        };

        updateSummary();
    }

    function updateSummary(){
        const orderSummaryDiv = document.querySelector(".order-summary");
        let subtotal = cart.reduce((sum,item)=>sum + item.price*item.qty,0);
        let total = subtotal;

        orderSummaryDiv.innerHTML = `
            <div class="d-flex justify-content-between mb-2"><span>Subtotal:</span><span>RM ${subtotal.toFixed(2)}</span></div>
            <hr>
            <div class="d-flex justify-content-between mb-3"><strong>Total:</strong><strong>RM ${total.toFixed(2)}</strong></div>
            <button class="btn btn-checkout w-100" id="checkoutBtn">Proceed to Checkout</button>
        `;

        document.getElementById("checkoutBtn").onclick = () => {
            if(cart.length === 0){
                alert("Your cart is empty! Please add items before checkout.");
                return;
            }
            sessionStorage.setItem(cartKey, JSON.stringify(cart));
            window.location.href = "checkout.php";
        };
    }

    
    cartItemsContainer.addEventListener("click",(e)=>{
        const action = e.target.dataset.action || e.target.parentElement.dataset.action;
        const index = e.target.dataset.index || e.target.parentElement.dataset.index;

        if(index===undefined) return;

        if(action==="plus"){
            if(cart[index].qty < cart[index].stock){
                cart[index].qty++;
            } else {
                alert(`Sorry! The stock for ${cart[index].name} is only ${cart[index].stock} left.`);
            }
        }
        if(action==="minus" && cart[index].qty>1) cart[index].qty--;
        if(action==="remove") cart.splice(index,1);

        sessionStorage.setItem(cartKey, JSON.stringify(cart));
        renderCart();
    });

    renderCart();
});
