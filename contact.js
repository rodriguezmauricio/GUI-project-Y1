// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    // Select form and message display
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    // Listen for form submission
    form.addEventListener("submit", (e) => {

        // Prevent page refresh
        e.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const userMessage = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || userMessage === "") {
            message.textContent = "Please fill in all fields.";
            message.style.color = "red";
            return;
        }

        // If valid
        message.textContent = "Message sent successfully!";
        message.style.color = "green";

        // Reset form
        form.reset();
    });

});