<?php
session_start();
if(isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true){
    header('Location: dashboard.php');
    exit();
}
$error = '';
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if($username === 'user' && $password === '12345'){
        $_SESSION['loggedIn'] = true;
        $_SESSION['username'] = $username;
        header('Location: dashboard.php');
        exit();
    } else {
        $error = 'Invalid username or password.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fleure - Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body class="login-body">
    <div class="container-fluid vh-100">
        <div class="row h-100">
            <div class="col-md-6 d-none d-md-block login-image-section">
                <div class="login-overlay">
                    <h3 class="brand-title">Fleure</h3>
                    <p class="brand-subtitle">Fresh Flowers, Forever Memories</p>
                </div>
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-center">
                <div class="login-form-container w-75">
                    <form method="POST" class="login-card">
                        <h3>Welcome Back</h3>
                        <p>Sign in to your account</p>
                        <?php if($error): ?>
                            <div class="alert alert-danger"><?= htmlspecialchars($error) ?></div>
                        <?php endif; ?>
                        <div class="mb-3">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" class="form-control" required>
                        </div>
                        <div class="mb-4">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" class="form-control" required>
                        </div>
                        <button type="submit" class="btn btn-login w-100">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
