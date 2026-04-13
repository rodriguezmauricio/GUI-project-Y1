//==================================
//[CODE BLOCK NAME] BEGIN
//Author: Mauricio Rodriguez
//Description: text here
//==================================

//==================================
//[CODE BLOCK NAME] END
//==================================

function renderSeparator(){
    return `<div class="separator">
    <div class="separator-edge"></div>
    <div class="separator-img"><img src="images/separator_img.png"></div>
    <div class="separator-edge"></div>
    </div>`
}

document.querySelectorAll(".separator-slot").forEach((slot) => {
    return slot.innerHTML = renderSeparator();
})