var cartItems = JSON.parse(localStorage.getItem("userItems"))

if (cartItems==undefined) {
	localStorage.setItem("cartItems", "{}")
	cartItems = {}
}


var totalPrice = 0
var totalTax = 0
var finalTotal = 0

for (var key in cartItems) {
	item = cartItems[key]

	totalPrice += item.qty*19.99
	totalTax += 0.07*item.qty*19.99

	// var container = document.getElementById("cardContainer")
	document.getElementById("cardContainer").innerHTML += `<div class="cartCard">
			<!-- Image Source: https://cdn.shopify.com/s/files/1/0857/6834/products/mesh-plus-dog-harness_mczee_hamburger_zeedog_pet_info-image.png?v=1547752157 -->
			<!-- Product Image, Description, Color, Size -->
			<img id=cartPic src="./images/dailyHarness.png" alt="Daily Harness">
			<img onclick="removeItem(this.id)" class= "exit" id="exitButton${key}" src="./images/close-button.png">
			<div class="cartCardRightTxt">
				<p id=cartProdName> Daily Harness</p>
				<p> $19.99 </p>
				<p> Color: ${item.color}</p>
				<p> Size: ${item.size}</p>
				<span class="quantityDec"><span>-</span></span>
				<span class="quantityTxt"><span>${item.qty}</span></span>
				<span class="quantityInc"><span>+</span></span><br>
				<a href="detailPage.html"> <p> Edit </p></a>
			</div>
		</div>`
}

finalTotal = totalPrice + totalTax +2.99
document.getElementById("itemPrice").innerHTML = '$'+ totalPrice.toFixed(2).toString()
document.getElementById("itemTax").innerHTML = '$'+ totalTax.toFixed(2).toString()
document.getElementById("total").innerHTML = '$'+ finalTotal.toFixed(2).toString()


// Removing items from cart

function removeItem (id) {
	toRemove = document.getElementById(id).parentNode
	toRemove.parentNode.removeChild(toRemove)

	idNum = id.split("exitButton")[1]
	item = cartItems[idNum]

	totalPrice -= item.qty*19.99
	totalTax -= 0.07*item.qty*19.99
	finalTotal = totalPrice + totalTax +2.99

	document.getElementById("itemPrice").innerHTML = '$'+ Math.abs(totalPrice).toFixed(2).toString()
	document.getElementById("itemTax").innerHTML = '$'+ Math.abs(totalTax).toFixed(2).toString()
	document.getElementById("total").innerHTML = '$'+ Math.abs(finalTotal).toFixed(2).toString()

	delete cartItems[idNum]
	localStorage.removeItem("userItems")
	localStorage.setItem("userItems",JSON.stringify(cartItems));
}