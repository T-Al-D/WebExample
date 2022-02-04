"use strict";

document.addEventListener("DOMContentLoaded", () => {
	// display data to the images
	const images = document.getElementsByClassName("flower_images");
	for (let image of images) {
		image.addEventListener("click", () => {
			alert(image.dataset.info);
		});
	}
});
