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

function genHexString() {
    let output = '#';
    for (let i = 0; i < 6; ++i) {
        output += (Math.floor(Math.random() * 16)).toString(16);
    }
    return output;
}

function genHexString1() {
    let output = '#';
    for (let i = 0; i < 6; ++i) {
        output += (Math.floor(Math.random() * 16)).toString(16);
    }
    return output;
}

function getRandomColor() {
	var first = genHexString()
	var second = genHexString1()
	body.style.background = "linear-gradient(to right, " + first + ", " + second + ")";
	css.textContent = body.style.background + ";";
	color1.value = first;
	color2.value = second;
}

window.addEventListener("load", backgroundStyle);

color1.addEventListener("input", backgroundStyle);

color2.addEventListener("input", backgroundStyle);

button.addEventListener("click", getRandomColor);