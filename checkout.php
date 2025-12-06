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
    <title>Fleure - Checkout</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid">
        <a class="navbar-brand" href="dashboard.php">
            <img src="img/fleure.png" alt="Fleure Logo" class="navbar-logo ms-3">
        </a>
    </div>
</nav>

<div class="container my-5">
    <h4 class="mb-4 text-center">Checkout</h4>

    <div class="row">
        <div class="col-lg-8 mb-4">
            <div id="checkoutItems" class="checkout-items"></div>
        </div>

        <div class="col-lg-4">
            <div class="card p-3 shadow-sm">
                <h5>Order Summary</h5>
                <div class="order-summary mb-3"></div>
                <button class="btn btn-checkout w-100 mb-2" id="confirmBtn">Confirm Order</button>
                <button class="btn btn-secondary w-100" id="backCartBtn">Back to Cart</button>
            </div>
        </div>
    </div>
</div>

<footer class="footer-custom py-4" style="background-color:#7A8450; color:white;">
    <div class="container text-center">
        <p class="mb-2 fw-bold">Fresh Flowers, Forever Memories</p>
        <p class="mb-0">&copy; 2025 Fleure. All rights reserved.</p>
    </div>
</footer>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/checkout.js"></script>
</body>
</html>
