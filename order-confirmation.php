<?php
session_start();
if(!isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true){
    header('Location: index.php');
    exit();
}
$username = $_SESSION['username'];
$storeName = "Fleure Store";
$storeAddress = "123 Jalan Bunga, Petaling Jaya, Selangor, Malaysia";
$storeHours = "Every day: 9AM - 9PM";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fleure - Order Confirmation</title>
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

<div class="container text-center my-5">
    <h2 class="mb-4">Thank you, <?= htmlspecialchars($username) ?>!</h2>
    <p class="lead">Your order has been confirmed.</p>

    <div id="pickupMessage"></div>

    <div class="text-center mt-3">
    <a href="dashboard.php" 
       class="btn btn-sm" 
       style="background-color:#7A8450; color:white; border:none;">
       Back to Dashboard
    </a>
</div>
</div>

<footer class="footer-custom py-4" style="background-color:#7A8450; color:white;">
    <div class="container text-center">
        <p class="mb-2 fw-bold">Fresh Flowers, Forever Memories</p>
        <p class="mb-0">&copy; 2025 Fleure. All rights reserved.</p>
    </div>
</footer>

<script>
    const storeInfo = {
        name: "<?= $storeName ?>",
        address: "<?= $storeAddress ?>",
        hours: "<?= $storeHours ?>"
    };
</script>
<script src="js/order_confirmation.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
