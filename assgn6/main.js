
var selected = ""

function colorSelector1() {
	if (selected == "Teal") {
		document.getElementById(selected).classList.remove("selectedColor");
		selected = ""
		document.getElementById("selecColorTxt").innerHTML = `Color:`;
	} else {
		if (selected != "") {
			document.getElementById(selected).classList.remove("selectedColor");
		}
		selected = "Teal"
		document.getElementById(selected).classList.add("selectedColor");
		document.getElementById("selecColorTxt").innerHTML = `Color: ${selected}`;
	}
}


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

size = ""
function sizeSelector1() {
	if (size == "Tiny") {
		document.getElementById(size).classList.remove("selectedSize");
		size = ""
		document.getElementById("selecSizeTxt").innerHTML = `Size:`;
	} else {
		if (size != "") {
			document.getElementById(size).classList.remove("selectedSize");
		}
		size = "Tiny"
		document.getElementById(size).classList.add("selectedSize");
		document.getElementById("selecSizeTxt").innerHTML = `Size: ${size}`;
	}
}

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

var button = 
	document.getElementById("counter"),
	counter = 0; 

function addCart() {
	counter += 1;
	document.getElementById("counter").innerHTML = counter;
}



