// STEP 6: Nab all the SUMMARY elements
const details = document.quertSelectorAll("details");

// STEP 7: Loop through details array and add event listener for toggle
details.forEach((detail) => {
	detail.addEventListener("toggle", (event) => {
		// console.log("Toggle event added!");
		if (event.target.open) {
			details.forEach((detail) => {
				if (detail !== event.target) {
					// This is not the details element that was clicked
					detail.removeAttribute("open");
				}
			})
		};
	});

});
// STEP 9: Check in the browser to make sure there are no errors - use the console, then proceed to the CSS for the final step