var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var h1 = document.querySelector("h1")
var button = document.querySelector("button")


function backgroundStyle() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColor() {
	var arr = [];
	for (var i=0; i<3;i++) {
		var num = Math.floor(Math.random() * 256);
		arr.push(num);
	}
		var arrTwo = [];
	for (var i=0; i<3;i++) {
		var numTwo = Math.floor(Math.random() * 256);
		arrTwo.push(numTwo);
	}
	var rgbValue = "rgb(" + arr[0] + ", " + arr[1] + ", " + arr[2] + ")";
	var rgbValueTwo = "rgb(" + arrTwo[0] + ", " + arrTwo[1] + ", " + arrTwo[2] + ")";
	var newRgb = "linear-gradient(to right, " + rgbValue + ", " + rgbValueTwo + ")";
	return newRgb;
}

// function generateRandomHexCode() {
//   var hexCode = "#" 

//   while ( hexCode.length < 7 ) {
//     hexCode += (Math.round(Math.random() * 15)).toString(16) 
//   }

//   return hexCode 
// }

function getRandomColor() {
	body.style.background = setRandomColor();

	css.textContent = body.style.background + ";";
}

window.addEventListener("load", backgroundStyle);

color1.addEventListener("input", backgroundStyle);

color2.addEventListener("input", backgroundStyle);

button.addEventListener("click", getRandomColor);