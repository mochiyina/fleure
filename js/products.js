document.addEventListener("DOMContentLoaded", () => {

    const productData = {
        roses: [
            { name: "Blush Rose", price: 90, stock: 5, img: "img/rose1.jpg" },
            { name: "Snow Rose", price: 93, stock: 7, img: "img/rose2.jpg" },
            { name: "Scarlet Rose", price: 95, stock: 6, img: "img/rose3.jpg" },
            { name: "Velvet Rose", price: 95, stock: 7, img: "img/rose4.jpg" }
        ],
        tulips: [
            { name: "Tulip Dew", price: 99, stock: 4, img: "img/tulip1.jpg" },
            { name: "Tulip Charm", price: 88, stock: 4, img: "img/tulip2.jpg" },
            { name: "Breeze Tulip", price: 120, stock: 3, img: "img/tulip3.jpg" },
            { name: "Golden Tulip", price: 100, stock: 4, img: "img/tulip4.jpg" }
        ],
        lilies: [
            { name: "Pure Lily", price: 100, stock: 3, img: "img/lily1.jpg" },
            { name: "Lily Noir", price: 150, stock: 3, img: "img/lily2.png" },
            { name: "Oriental Grace", price: 130, stock: 3, img: "img/lily3.png" },
            { name: "Fiery Bloom", price: 100, stock: 3, img: "img/lily4.png" }
        ],
        orchids: [
            { name: "Violet Dream", price: 199, stock: 4, img: "img/orch1.jpg" },
            { name: "Petite Orchid", price: 120, stock: 4, img: "img/orch2.jpg" },
            { name: "Blush Orchid", price: 135, stock: 5, img: "img/orch3.jpg" },
            { name: "Ruby Serenity", price: 150, stock: 5, img: "img/orch4.jpg" }
        ],
        mixed: [
            { name: "Serene Bloom", price: 120, stock: 4, img: "img/mix1.jpg" },
            { name: "Garden Bouquet", price: 135, stock: 5, img: "img/mix2.jpg" },
            { name: "Garden Bliss", price: 130, stock: 4, img: "img/mix3.jpg" },
            { name: "Love Melody", price: 130, stock: 7, img: "img/mix4.jpg" }
        ],
        sunflowers: [
            { name: "Sunny Star", price: 100, stock: 4, img: "img/sun1.jpg" },
            { name: "Golden Rays", price: 130, stock: 3, img: "img/sun2.jpg" },
            { name: "Honey Sun", price: 90, stock: 2, img: "img/sun3.jpg" },
            { name: "Sun King", price: 120, stock: 1, img: "img/sun4.png" }
        ]
    };

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category") || "all";

    const grid = document.getElementById("productGrid");
    const title = document.getElementById("categoryTitle");

    title.textContent = (category === "all") ? "Our Products" : category.toUpperCase();

    let itemsToShow = [];
    if (category === "all") {
        Object.values(productData).forEach(arr => itemsToShow.push(...arr));
    } else {
        itemsToShow = productData[category] || [];
    }

    grid.innerHTML = "";

    itemsToShow.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-3 mb-4";

        card.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title text-center">${product.name}</h5>
                <p class="text-center text-muted mb-0">RM ${product.price}</p>
                <p class="text-center text-danger fw-semibold small mb-1">Pickup Only, Delivery Not Available</p>
                <p class="text-center mt-1"><span class="badge bg-secondary">Stock Left: ${product.stock}</span></p>
                <div class="d-flex justify-content-center align-items-center gap-2 mt-2">
                    <button class="btn btn-outline-secondary btn-sm qty-minus">-</button>
                    <input type="number" class="form-control text-center qty-input" style="width:60px" value="1" min="1" max="${product.stock}" readonly>
                    <button class="btn btn-outline-secondary btn-sm qty-plus">+</button>
                </div>
                <button class="btn w-100 mt-3 add-cart" style="background-color:#7A8450; border-color:#7A8450; color:white;">
                    Add to Cart
                </button>
            </div>
        </div>`;

        const input = card.querySelector(".qty-input");
        const btnMinus = card.querySelector(".qty-minus");
        const btnPlus = card.querySelector(".qty-plus");
        const btnAdd = card.querySelector(".add-cart");

        btnMinus.onclick = () => { if(input.value>1) input.value--; };
        btnPlus.onclick = () => { if(input.value<product.stock) input.value++; };

        btnAdd.onclick = () => {
            const productToAdd = {
                name: product.name,
                price: product.price,
                img: product.img,
                qty: parseInt(input.value),
                stock: product.stock
            };

            let cart = JSON.parse(sessionStorage.getItem("fleureCart")) || [];

            const existingIndex = cart.findIndex(p => p.name === productToAdd.name);
            if(existingIndex !== -1){
                const totalQty = cart[existingIndex].qty + productToAdd.qty;
                cart[existingIndex].qty = Math.min(totalQty, product.stock);
                if(totalQty > product.stock){
                    alert(`Stock for ${product.name} only ${product.stock} left.`);
                }
            } else {
                cart.push(productToAdd);
            }

            sessionStorage.setItem("fleureCart", JSON.stringify(cart));

            window.location.href = "cart.html";
        };

        grid.appendChild(card);
    });
});
