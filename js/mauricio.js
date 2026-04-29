//==================================
//[CODE BLOCK NAME] BEGIN
//Author: Mauricio Rodriguez
//Description: text here
//==================================

//==================================
//[CODE BLOCK NAME] END
//==================================

function renderSeparator(){
    
    const icon = `<svg fill="currentColor" height="50px" width="50px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470"><g>
    <path d="m433.985,382.76l17.716-29.752c1.38-2.317 1.409-5.198 0.076-7.543-1.333-2.346-3.823-3.794-6.521-3.794h-30.001c-4.142,0-7.499,3.357-7.5,7.499 0,4.144 3.357,7.501 7.5,7.501h16.807l-13.25,22.252c-1.407,2.364-1.407,5.31 0,7.674l13.25,22.252h-72.756c-11.072,0-20.295-8.042-22.153-18.589h48.324c4.143,0 7.5-3.357 7.5-7.5v-67.178c0-4.143-3.357-7.5-7.5-7.5h-25.927c4.955-10.06 7.543-21.11 7.543-32.576 0-40.796-33.189-73.985-73.985-73.985-5.602,0-11.103,0.644-16.424,1.862v-53.507h15.312c20.132,0 36.51-16.378 36.51-36.51 0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,11.86-9.649,21.51-21.51,21.51h-15.312v-51.516c0-15.336-8.331-28.754-20.699-35.993 4.569-5.033 7.356-11.711 7.356-19.028 0.002-15.626-12.711-28.339-28.337-28.339-15.626,0-28.339,12.713-28.339,28.34 0,7.317 2.788,13.995 7.357,19.028-12.368,7.238-20.699,20.657-20.699,35.992v51.516h-15.313c-11.86,0-21.51-9.649-21.51-21.51 0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,20.132 16.378,36.51 36.51,36.51h15.312v53.52c-5.284-1.213-10.777-1.875-16.424-1.875-40.796,0-73.985,33.189-73.985,73.985 0,11.466 2.587,22.517 7.542,32.576h-25.926c-4.142,0-7.5,3.357-7.5,7.5v67.178c0,4.143 3.358,7.5 7.5,7.5h48.318c-1.858,10.547-11.081,18.589-22.153,18.589h-72.756l13.249-22.252c1.408-2.364 1.408-5.31 0-7.674l-13.249-22.252h16.806c4.142,0 7.5-3.357 7.5-7.5-0.001-4.143-3.358-7.5-7.5-7.5h-30.001c-2.698,0-5.187,1.448-6.521,3.794-1.333,2.345-1.304,5.226 0.076,7.543l17.715,29.752-17.715,29.752c-1.38,2.317-1.409,5.198-0.076,7.543 1.333,2.346 3.823,3.794 6.521,3.794h85.95c19.357,0 35.334-14.742 37.296-33.589h22.955l58.079,76.766c1.417,1.873 3.631,2.975 5.981,2.975s4.563-1.102 5.981-2.975l58.079-76.766h22.947c1.962,18.846 17.939,33.589 37.296,33.589h85.95c2.697,0 5.188-1.448 6.521-3.794 1.333-2.345 1.304-5.226-0.076-7.543l-17.717-29.752zm-341.956-7.5v-52.178h61.821c4.142,0 7.5-3.357 7.5-7.5 0-4.143-3.358-7.5-7.5-7.5h-26.117c-6.429-9.661-9.82-20.845-9.82-32.576 0-32.524 26.461-58.985 58.985-58.985 32.21,0 58.416,26.205 58.416,58.416 0,4.143 3.357,7.5 7.5,7.5s7.5-3.357 7.5-7.5c0-11.015-2.454-21.462-6.819-30.848 10.638-17.094 29.317-27.568 49.614-27.568 32.524,0 58.985,26.461 58.985,58.985 0,11.73-3.391,22.915-9.82,32.576h-158.424c-4.142,0-7.5,3.357-7.5,7.5 0,4.143 3.358,7.5 7.5,7.5h194.129v52.178h-285.95zm129.636-346.92c0-7.355 5.984-13.34 13.339-13.34s13.339,5.984 13.339,13.34-5.983,13.339-13.339,13.339-13.339-5.984-13.339-13.339zm13.339,28.339c14.712,0 26.682,11.97 26.682,26.682v51.516h-53.363v-51.517c-0.001-14.712 11.969-26.681 26.681-26.681zm-26.682,93.197h19.182v48.741c0,4.141 3.356,7.498 7.496,7.5 4.146,0 7.504-3.357 7.504-7.5v-48.741h19.182v58.697c-10.38,4.913-19.548,12.24-26.686,21.486-7.071-9.059-16.188-16.469-26.678-21.458v-58.725zm71.932,240.384l-45.25,59.81-45.25-59.81h90.5z"/>
  </g></svg>`;
    return `<div class="separator">
    <div class="separator-edge"></div>
    <div class="separator-img">${icon}</div>
    <div class="separator-edge"></div>
    </div>`
}

const separatorSlot = document.querySelectorAll(".separator-slot")
separatorSlot.forEach((slot) => {
    return slot.innerHTML = renderSeparator();
})

function renderSeparatorDark(){
    
    const icon = `<svg fill="currentColor" height="50px" width="50px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470"><g>
    <path d="m433.985,382.76l17.716-29.752c1.38-2.317 1.409-5.198 0.076-7.543-1.333-2.346-3.823-3.794-6.521-3.794h-30.001c-4.142,0-7.499,3.357-7.5,7.499 0,4.144 3.357,7.501 7.5,7.501h16.807l-13.25,22.252c-1.407,2.364-1.407,5.31 0,7.674l13.25,22.252h-72.756c-11.072,0-20.295-8.042-22.153-18.589h48.324c4.143,0 7.5-3.357 7.5-7.5v-67.178c0-4.143-3.357-7.5-7.5-7.5h-25.927c4.955-10.06 7.543-21.11 7.543-32.576 0-40.796-33.189-73.985-73.985-73.985-5.602,0-11.103,0.644-16.424,1.862v-53.507h15.312c20.132,0 36.51-16.378 36.51-36.51 0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,11.86-9.649,21.51-21.51,21.51h-15.312v-51.516c0-15.336-8.331-28.754-20.699-35.993 4.569-5.033 7.356-11.711 7.356-19.028 0.002-15.626-12.711-28.339-28.337-28.339-15.626,0-28.339,12.713-28.339,28.34 0,7.317 2.788,13.995 7.357,19.028-12.368,7.238-20.699,20.657-20.699,35.992v51.516h-15.313c-11.86,0-21.51-9.649-21.51-21.51 0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,20.132 16.378,36.51 36.51,36.51h15.312v53.52c-5.284-1.213-10.777-1.875-16.424-1.875-40.796,0-73.985,33.189-73.985,73.985 0,11.466 2.587,22.517 7.542,32.576h-25.926c-4.142,0-7.5,3.357-7.5,7.5v67.178c0,4.143 3.358,7.5 7.5,7.5h48.318c-1.858,10.547-11.081,18.589-22.153,18.589h-72.756l13.249-22.252c1.408-2.364 1.408-5.31 0-7.674l-13.249-22.252h16.806c4.142,0 7.5-3.357 7.5-7.5-0.001-4.143-3.358-7.5-7.5-7.5h-30.001c-2.698,0-5.187,1.448-6.521,3.794-1.333,2.345-1.304,5.226 0.076,7.543l17.715,29.752-17.715,29.752c-1.38,2.317-1.409,5.198-0.076,7.543 1.333,2.346 3.823,3.794 6.521,3.794h85.95c19.357,0 35.334-14.742 37.296-33.589h22.955l58.079,76.766c1.417,1.873 3.631,2.975 5.981,2.975s4.563-1.102 5.981-2.975l58.079-76.766h22.947c1.962,18.846 17.939,33.589 37.296,33.589h85.95c2.697,0 5.188-1.448 6.521-3.794 1.333-2.345 1.304-5.226-0.076-7.543l-17.717-29.752zm-341.956-7.5v-52.178h61.821c4.142,0 7.5-3.357 7.5-7.5 0-4.143-3.358-7.5-7.5-7.5h-26.117c-6.429-9.661-9.82-20.845-9.82-32.576 0-32.524 26.461-58.985 58.985-58.985 32.21,0 58.416,26.205 58.416,58.416 0,4.143 3.357,7.5 7.5,7.5s7.5-3.357 7.5-7.5c0-11.015-2.454-21.462-6.819-30.848 10.638-17.094 29.317-27.568 49.614-27.568 32.524,0 58.985,26.461 58.985,58.985 0,11.73-3.391,22.915-9.82,32.576h-158.424c-4.142,0-7.5,3.357-7.5,7.5 0,4.143 3.358,7.5 7.5,7.5h194.129v52.178h-285.95zm129.636-346.92c0-7.355 5.984-13.34 13.339-13.34s13.339,5.984 13.339,13.34-5.983,13.339-13.339,13.339-13.339-5.984-13.339-13.339zm13.339,28.339c14.712,0 26.682,11.97 26.682,26.682v51.516h-53.363v-51.517c-0.001-14.712 11.969-26.681 26.681-26.681zm-26.682,93.197h19.182v48.741c0,4.141 3.356,7.498 7.496,7.5 4.146,0 7.504-3.357 7.504-7.5v-48.741h19.182v58.697c-10.38,4.913-19.548,12.24-26.686,21.486-7.071-9.059-16.188-16.469-26.678-21.458v-58.725zm71.932,240.384l-45.25,59.81-45.25-59.81h90.5z"/>
  </g></svg>`;
    return `<div class="separator">
    <div class="separator-edge-dark"></div>
    <div class="separator-img-dark">${icon}</div>
    <div class="separator-edge-dark"></div>
    </div>`
}

const separatorSlotDark = document.querySelectorAll(".separator-slot-dark");

if (separatorSlotDark) separatorSlotDark.forEach((slot) => {
    return slot.innerHTML = renderSeparatorDark();
})

function renderSmallSeparator(){
    return `<div class="separator">
    <div class="small-separator-edge"></div>
    </div>`
}

// ----------------------------------
// Author: Mauricio Rodriguez
// Description: Renders the portfolio grid
// I know that using a loop to iterate and render the images would be better,
// but since a few of those have a different class and there is a limited amount of pictures
// I decide to hard code it and duplicate it. 
// Against the DRY concept, but acceptable for such a small project.
//
// images source: pexels.com
// ----------------------------------
const imagesArr = ["port_0.jpg", "port_1.jpg", "port_2.jpg", "port_3.jpg", 
                "port_4.jpg", "port_5.jpg", "port_6.jpg", "port_7.jpg"];

function renderPortfolioGrid(imagesArr){
    return `<div class="grid-portfolio">
    <div class="grid-portfolio-img"  style="background-image: url(images/${imagesArr[0]})"></div>
    <div class="grid-portfolio-img2" style="background-image: url(images/${imagesArr[1]})"></div>
    <div class="grid-portfolio-img"  style="background-image: url(images/${imagesArr[2]})"></div>
    <div class="grid-portfolio-img2" style="background-image: url(images/${imagesArr[3]})"></div>
    <div class="grid-portfolio-img"  style="background-image: url(images/${imagesArr[4]})"></div>
    <div class="grid-portfolio-img"  style="background-image: url(images/${imagesArr[5]})"></div>
    <div class="grid-portfolio-img"  style="background-image: url(images/${imagesArr[6]})"></div>
    <div class="grid-portfolio-img"  style="background-image: url(images/${imagesArr[7]})"></div>
    </div>`
}

function renderPortfolioGrid2(imagesArr){
    return `<div class="grid-portfolio">
    <div class="grid-portfolio-img2"  style="background-image: url(images/${imagesArr[0]})"></div>
    <div class="grid-portfolio-img"   style="background-image: url(images/${imagesArr[1]})"></div>
    <div class="grid-portfolio-img2"  style="background-image: url(images/${imagesArr[2]})"></div>
    <div class="grid-portfolio-img"   style="background-image: url(images/${imagesArr[3]})"></div>
    <div class="grid-portfolio-img2"  style="background-image: url(images/${imagesArr[7]})"></div>
    <div class="grid-portfolio-img"   style="background-image: url(images/${imagesArr[5]})"></div>
    <div class="grid-portfolio-img"   style="background-image: url(images/${imagesArr[6]})"></div>
    </div>`
}

const gridSlot  = document.querySelector(".grid-portfolio-slot");
const gridSlot2 = document.querySelector(".grid-portfolio-slot2");

if (gridSlot)  gridSlot.innerHTML  = renderPortfolioGrid(imagesArr);
if (gridSlot2) gridSlot2.innerHTML = renderPortfolioGrid2(imagesArr.reverse());



// ----------------------------------
// Author: Mauricio Rodriguez
// Description:Renders the portfolio grid
// I know that using a loop to iterate and render the images would be better,
// but since a few of those have a different class and there is a limited amount of pictures
// I decide to hard code it and duplicate it. 
// Against the DRY concept, but acceptable for such a small project.
//
// images source: pexels.com
// ----------------------------------
function renderMap(){
    //Await for Eamonn's code
    const address = "Spanish Arch, Galway";
    return `<iframe
                src="https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed"
                style="width: 100%; height: 400px; border: 0; border-radius: 0px; display: block;"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                title="Studio location map">
            </iframe>`;
}

const mapSlot   = document.querySelector(".render-map");
if (mapSlot)   mapSlot.innerHTML   = renderMap();

// ----------------------------------
// Author: Mauricio Rodriguez
// Description:Renders the footer in all pages with Eamonn's code
// ----------------------------------


// ----------------------------------
// Author: Mauricio Rodriguez
// Description:Renders the footer in all pages with Eamonn's code
// ----------------------------------
function renderFooter(){
    //Eamonn`s code
    return `<footer class="footer">

    <div class="footer-container">

        <!-- About -->
        <div class="footer-section">
            <h3>Ink & Iron</h3>
            <p>Professional tattoo studio delivering unique and creative designs.</p>
        </div>

        <!-- Links -->
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="artists.html">Artists</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: info@inkandiron.com</p>
            <p>Phone: 089 123 4567</p>
        </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
        <p>&copy; 2026 Ink & Iron. All rights reserved.</p>
    </div>

</footer>`;
}

const footerSlot   = document.querySelector(".render-footer");
if (footerSlot)   footerSlot.innerHTML   = renderFooter();
