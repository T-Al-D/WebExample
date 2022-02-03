"use strict"; // modern JavaScript

// after the page (Document-Object-Model) loaded do ...
document.addEventListener("DOMContentLoaded", () => {
    // text INPUT
    const textInput = document.getElementById("textInput");
    const displayTextButton = document.getElementById("textInputButton");
    displayTextButton.addEventListener("click", () => {
        const textDisplay = document.getElementById("textDisplay");
        textDisplay.textContent = textInput.value;
        textInput.value = "";
    });
});