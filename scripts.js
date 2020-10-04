var divisorAustralia = document.getElementById("divisor_before-australia");
var divisorCalifornia = document.getElementById("divisor_before-california");
var divisorAmazonas = document.getElementById('divisor_before-amazonas');
var divisorGalicia = document.getElementById('divisor_before-galicia');

slider_california = document.getElementById("slider-california");
slider_australia = document.getElementById("slider-australia");
slider_amazonas = document.getElementById('slider-amazonas');
slider_galicia = document.getElementById('slider-galicia');

handle_australia = document.getElementById("handle_australia");
handle_california = document.getElementById("handle_california");
handle_amazonas = document.getElementById("handle_amazonas");
handle_galicia = document.getElementById('handle_galicia');




function moveDivisorAustralia() {
  
  handle_australia.style.left = slider_australia.value+"%";
	divisorAustralia.style.width = slider_australia.value+"%";
}

function moveDivisorCalifornia() {
 
  handle_california.style.left = slider_california.value+"%";
	divisorCalifornia.style.width = slider_california.value+"%";
}

function moveDivisorAmazonas(){
  handle_amazonas.style.left = slider_amazonas.value+"%";
	divisorAmazonas.style.width = slider_amazonas.value+"%";
}

function moveDivisorGalicia(){
  handle_galicia.style.left = slider_galicia.value+"%";
  divisorGalicia.style.width = slider_galicia.value+"%";
}



