<?php
session_start();
if(!isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true){
    header('Location: index.php');
    exit();
}
$username = $_SESSION['username'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fleure - Cart</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    
     <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid">
           <a class="navbar-brand" href="dashboard.php">
                <img src="img/fleure.png" alt="Fleure Logo" class="navbar-logo ms-3">
           </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link fs-5" href="dashboard.php">DASHBOARD</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link fs-5 dropdown-toggle" href="#" id="productDropdown" role="button" data-bs-toggle="dropdown">PRODUCTS</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="products.php?category=roses">Roses</a></li>
<li><a class="dropdown-item" href="products.php?category=tulips">Tulips</a></li>
<li><a class="dropdown-item" href="products.php?category=lilies">Lilies</a></li>
<li><a class="dropdown-item" href="products.php?category=orchids">Orchids</a></li>
<li><a class="dropdown-item" href="products.php?category=mixed">Mixed Flowers</a></li>
<li><a class="dropdown-item" href="products.php?category=sunflowers">Sunflowers</a></li>


                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active fs-5" href="cart.php">CART</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fs-5" href="about.php">ABOUT US
                        </a>
                    </li>
                </ul>
                <div class="navbar-nav">
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle"></i> <?= htmlspecialchars($username) ?>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="logout.php">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="container my-5">
        <div class="section-header">
            <h4 class="section-title">Shopping Cart</h4>
            <div class="section-underline"></div>
        </div>

        <div class="row gx-4">
            <div class="col-lg-8 mb-4">
                <div id="cartItems" class="cart-items">
                    <div class="text-center py-5">
                        <i class="bi bi-cart-x" style="font-size:3rem;color:var(--primary-pink);"></i>
                        <h4 class="mt-3">Your cart is empty</h4>
                        <p class="text-muted">Start adding some beautiful flowers!</p>
                        <a href="products.php" class="btn btn-view-all mt-3">Browse Products</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="chart-card">
                    <h4>Order Summary</h4>
                    <div class="order-summary">
                        <div class="d-flex justify-content-between mb-2"><span>Subtotal:</span><span>RM 0.00</span></div>
                        <hr>
                        <div class="d-flex justify-content-between mb-3"><strong>Total:</strong><strong>RM 10.00</strong></div>
                        <button class="btn btn-checkout w-100" id="checkoutBtn">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer-custom py-4" style="background-color:#7A8450; color:white;">
        <div class="container text-center">
            <p class="mb-2 fw-bold">Fresh Flowers, Forever Memories</p>
            <div class="social-icons mb-2">
                <a href="#"><i class="bi bi-facebook text-white mx-2 fs-5"></i></a>
                <a href="#"><i class="bi bi-instagram text-white mx-2 fs-5"></i></a>
                <a href="#"><i class="bi bi-twitter text-white mx-2 fs-5"></i></a>
            </div>
            <p class="mb-0">&copy; 2025 Fleure. All rights reserved.</p>
        </div>
    </footer>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/cart.js"></script>
</body>
</html>
