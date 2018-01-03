window.onload = function () {
	initColorPicker();
};

function initColorPicker(){
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(element, colors, pickerElements) {
	let pickerLen = pickerElements.length; //Pulled pickerElements.length out and made it a variable. This way, JS only has to calculate the length of the array one time.
	for (let i = 0; i < pickerLen; i++) {
		pickerElements[i].addEventListener('change', () => {
			// console.log("Red value: ", colors.red.value);
			// Can cut the following and instead set them to variables, as seen below. Keeping the original for reference.
			// setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
			let red = colors.red.value;
			let green = colors.green.value;
			let blue = colors.blue.value;
			setElementBGColor(element, red, green, blue);
			setDisplayValues(red, green, blue);
		});
	}}

	/* We built in the above function in order to clean up code. Could delete the code below but leaving for reference.

	 rgb.red.addEventListener('change', () => {
		console.log ("Red value: ", rgb.red.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.green.addEventListener('change', () => {
		console.log ("Green value: ", rgb.green.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.blue.addEventListener('change', () => {
		console.log ("Blue value: ", rgb.blue.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	})
}*/

function setElementBGColor(bgElement, red, green, blue) {
	let rgbVal = [red, green, blue].join(',');
	bgElement.style.backgroundColor = "rgb(" + rgbVal + ")"; //an object on all HTML elements that we pass in
}

function setDisplayValues(red, green, blue) {
	let redVal = document.getElementById("redVal");
	let greenVal = document.getElementById("greenVal");
	let blueVal = document.getElementById("blueVal");

	redVal.innerText = red;
	greenVal.innerText = green;
	blueVal.innerText = blue;
}


