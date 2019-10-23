function panda(name, age) {
  this.name = name;
  this.age = age;
  this.type = "panda";
  this.image = "panda.jpg";
}

function arcticFox(name, age) {
  this.name = name;
  this.age = age;
  this.type = "arcticFox";
  this.image = "arcticFox.jpg";
}

function elephant(name, age) {
  this.name = name;
  this.age = age;
  this.type = "elephant";
  this.image = "elephant.jpeg";
}

var animal = [new panda(), new arcticFox(), new elephant()]
var names = ["BaoBao", "Inu", "Maro"]

function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
	var randomIndex = generateRandomIndex(names.length);
	return names[randomIndex];
}

function generateRandomAge() {
	var randomIndex = generateRandomIndex(5);
	return randomIndex;

}

function generateRandomAnimal () {
	var randomIndex = generateRandomIndex(animal.length);
	var randomAnimal = animal[randomIndex];

	if (randomAnimal instanceof panda) {
		    return new panda(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof arcticFox) 
  {
    return new arcticFox(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof elephant) 
  {
    return new elephant(generateRandomName(), generateRandomAge());
  }
}

function onLoad() {
	  var animal = generateRandomAnimal();
	  console.log (animal);
	  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
	  document.getElementById("animal-img").setAttribute("src", animal.image);
	}



