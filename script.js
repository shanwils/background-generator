var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("button");

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";

}

function changeHex() {
  const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let hex = '#';

  for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * hexValues.length)
    hex += hexValues[index];
  }

  return hex;
}

function randomColors() {
    color1.value = changeHex();
    color2.value = changeHex();

    setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomColors);