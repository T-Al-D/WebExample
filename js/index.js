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
	// conversion
	const numberInput = document.getElementById("numberInput");
	const numberButton = document.getElementById("numberButton");
	numberButton.addEventListener("click", () => {
		const resultDisplay = document.getElementById("resultDisplay");
		const radioButtons = document.getElementsByName("conversion");
		let messageString = "RESULT: " + numberInput.value + " ";
		for (const radioButton of radioButtons) {
			if (radioButton.checked) {
				if (radioButton.id === "internetSpeed") {
					messageString +=
						"MBits/s equals to " +
						Math.round((numberInput.value / 8) * 100) / 100 +
						"\n" +
						" MB/s, but usually MB is only used for storage units!";
				}
				if (radioButton.id === "storageSize") {
					messageString +=
						"GB (claimed) equals to " +
						Math.round(numberInput.value * 0.931 * 100) / 100 +
						"\n" +
						" real GB in storage, because it is advertised as GigaByte (1000^3 Bytes)" +
						" but actually the computer measures in Gibibyte (1024^3 Bytes)! ";
				}
			}
		}
		resultDisplay.textContent = messageString;
		numberInput.value = "";
	});
});
