//==================================
//[CODE BLOCK NAME] BEGIN
//Author: Eamonn Corban
//Description: text decribing what the function/block does
//==================================

//TODO: Check what the below line does and what its doing
// eamonn.JSON.stringify()
// Wait until the page is fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Select the container where the menu will be inserted
    const menuContainer = document.querySelector(".render-menu");

    // Menu HTML is stored as a template string
    // This allows us to reuse the same navigation across multiple pages
    const menuHTML = `
        <div class="navbar">
            <div class="logo"><a href="index.html">Ink &amp; Iron</a></div>
            <div class="menu-toggle">&#9776;</div>
            <ul class="nav-links" id="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="artists.html">Artists</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
    `;

    // Insert menu into the page
    // This avoids repeating navigation code in every HTML file
    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    }

    //adds the classlist toggle
    const toggle = document.querySelector(".menu-toggle");
    const links  = document.querySelector(".nav-links");
    if (toggle && links) {
        toggle.addEventListener("click", () => links.classList.toggle("active"));
    }
});

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    // Select form and message display
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    // Listen for form submission
    if (form){
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
    }

});

//==================================
//[CODE BLOCK NAME] END
//==================================
