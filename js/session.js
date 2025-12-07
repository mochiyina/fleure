document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const errorDiv = document.getElementById("error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if(username === "user" && password === "12345"){
            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem("username", username);
            window.location.href = "dashboard.html";
        } else {
            errorDiv.textContent = "Invalid username or password.";
            errorDiv.classList.remove("d-none");
        }
    });
});
