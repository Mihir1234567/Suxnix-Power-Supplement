document.addEventListener("DOMContentLoaded", () => {
    // --- Form submission logic ---
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevents the page from reloading

            // You can add your form validation and submission logic here
            // For example, getting the values:
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            console.log("Login attempt with:");
            console.log("Email:", email);
            console.log("Password:", password);

            // Here you would typically send the data to a server
            // For now, we'll just show a confirmation.
            // Avoid using alert() in real applications for better UX.
            const submitButton = event.target.querySelector(".login-btn");
            submitButton.textContent = "Logging in...";
            setTimeout(() => {
                submitButton.textContent = "Login";
                // You could redirect or show a success message here
            }, 1500);
        });
    }
});
