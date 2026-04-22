eamonn.JSON.stringify()
// Wait until the page is fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Select the container where the menu will be inserted
    const menuContainer = document.querySelector(".render-menu");

    // Menu HTML is stored as a template string
    // This allows us to reuse the same navigation across multiple pages
    const menuHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="artists.html">Artists</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    `;

    // Insert menu into the page
    // This avoids repeating navigation code in every HTML file
    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    }
});