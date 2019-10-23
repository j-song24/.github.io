// Creating a color selector

// setting variables selected as empty string
var selected = ""

function colorSelector1() {
	// If the color is already teal, clicking it again will remove the border 
	if (selected == "Teal") {
		document.getElementById(selected).classList.remove("selectedColor");
		// Adding text to the HTML page that indicates the color selected
		selected = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
		// if selected is any other color, remove it and add it to the color that is clicked on
	} else {
		if (selected != "") {
			document.getElementById(selected).classList.remove("selectedColor");
		}
		selected = "Teal"
		document.getElementById(selected).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${selected}`;
	}
}

// Same process for these color selectors, one for each color option
function colorSelector2() {
	if (selected == "Yellow") {
		document.getElementById(selected).classList.remove("selectedColor");
		selected = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
	} else {
		if (selected != "") {
			document.getElementById(selected).classList.remove("selectedColor");
		}
		selected = "Yellow"
		document.getElementById(selected).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${selected}`;
	}
}

// Same process for these color selectors, one for each color option
function colorSelector3() {
	if (selected == "Orange") {
		document.getElementById(selected).classList.remove("selectedColor");
		selected = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
	} else {
		if (selected != "") {
			document.getElementById(selected).classList.remove("selectedColor");
		}
		selected = "Orange"
		document.getElementById(selected).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${selected}`;
	}
}

// Same process for these color selectors, one for each color option
function colorSelector4() {
	if (selected == "Magenta") {
		document.getElementById(selected).classList.remove("selectedColor");
		selected = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
	} else {
		if (selected != "") {
			document.getElementById(selected).classList.remove("selectedColor");
		}
		selected = "Magenta"
		document.getElementById(selected).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${selected}`;
	}
}

// Size Selector
// setting variables selected as empty string

size = ""
function sizeSelector1() {
	// If the size is already tiny, clicking it again will remove the border 
	if (size == "Tiny") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		// Adding text to the HTML page that indicates the size selected
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		// if selected is any other size, remove the background color and add it to the size that is clicked on
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Tiny"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// Same process for these size selectors, one for each size option
function sizeSelector2() {
	if (size == "Small") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Small"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// Same process for these size selectors, one for each size option
function sizeSelector3() {
	if (size == "Medium") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Medium"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// Same process for these size selectors, one for each size option
function sizeSelector4() {
	if (size == "Large") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Large"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

// Creating a counter for the items added to the cart
var button = 
	document.getElementById("counter"),
	counter = 0; 
// Adding 1 everytime the "Add to Cart" button is pressed and showing that on the HTML page
function addCart() {
	counter += 1;
	document.getElementById("counter").innerHTML = counter;
}



