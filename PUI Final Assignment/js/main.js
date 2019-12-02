
console.log("hi")

var rellax = new Rellax (".rellax")

var overlay = document.getElementById("morph1")

var morphing = anime({
	targets:".morph1",
	d: [
		{value:"M1228.82,444.51C1251.59,680.92,797.79,1096,424.05,927,104.58,782.46,28.15,294.6,183.86,122.2,404.8-122.44,1200.39,149.41,1228.82,444.51Z"}
	],
	easing:"easeInOutExpo",
	duration: 1500,
	loop: false,
})