var divisorAustralia = document.getElementById("divisor_before-australia");
var divisorCalifornia = document.getElementById("divisor_before-california");
handle = document.getElementById("handle");



function moveDivisorAustralia() {
  slider_australia = document.getElementById("slider-australia");
  handle.style.left = slider_australia.value+"%";
	divisorAustralia.style.width = slider_australia.value+"%";
}

function moveDivisorCalifornia() {
  slider_california = document.getElementById("slider-california");
  handle.style.left = slider_california.value+"%";
	divisorCalifornia.style.width = slider_california.value+"%";
}



