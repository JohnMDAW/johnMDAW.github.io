function initialize() {
    var options = {
        zooming: false,
        scrollWheelZoom: false,
        tilting: false,
    };


    var earth = new WE.map('globo', options);
    earth.setView([38.89, -77.09], 1.5);

    WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
        tileSize: 256,
        bounds: [[-85, -180], [85, 180]],
        minZoom: 0,
        maxZoom: 6,
        attribution: 'WebGLEarth example',
        tms: true


    }).addTo(earth);

    var marker1 = WE.marker([43.05, -8.13], 'img/fuego.png', 50, 50).addTo(earth);
    marker1.bindPopup("<a href=\"javascript:apareceGalicia()\"><b>Incendio de Galicia</span></a>", { maxWidth: 150, closeButton: false }).openPopup();
    var marker2 = WE.marker([-14.86, -55.20], 'img/fuego.png', 50, 50).addTo(earth);
    marker2.bindPopup("<a href=\"javascript:apareceAmazonas()\"><b>Incendio del Amazonas</span></a>", { maxWidth: 150, closeButton: false }).openPopup();
    var marker3 = WE.marker([-25.284, 132.671], 'img/fuego.png', 50, 50).addTo(earth);
    marker3.bindPopup("<a href=\"javascript:apareceAustralia()\"><b>Incendio de Australia</span></a>", { maxWidth: 150, closeButton: false }).openPopup();
    var marker4 = WE.marker([37.0, -121], 'img/fuego.png', 50, 50).addTo(earth);
    marker4.bindPopup("<a href=\"javascript:apareceCalifornia()\"><b>Incendio de California</span></a>", { maxWidth: 150, closeButton: false }).openPopup();
    var marker5 = WE.marker([38.89, -77.09]).addTo(earth);
    marker5.bindPopup("<a href=\"javascript:apareceNasa()\"><b>NASA</span></a>", { maxWidth: 150, closeButton: false }).openPopup();
}


function apareceCalifornia() {
    document.getElementById('nasa').style.display = 'none';

    document.getElementById('incendioAmazonas').style.display = 'none';
    document.getElementById('incendioGalicia').style.display = 'none';
    document.getElementById('incendioAustralia').style.display = 'none';
    document.getElementById('incendioCalifornia').style.display = 'block';
    document.getElementById('titulo-articulo').textContent="Incendio en California"
}

function apareceGalicia() {
    document.getElementById('nasa').style.display = 'none';

    document.getElementById('incendioAmazonas').style.display = 'none';
    document.getElementById('incendioGalicia').style.display = 'block';
    document.getElementById('incendioAustralia').style.display = 'none';
    document.getElementById('incendioCalifornia').style.display = 'none';
    document.getElementById('titulo-articulo').textContent="Incendio en Galicia"

}

function apareceAustralia() {
    document.getElementById('nasa').style.display = 'none';

    document.getElementById('incendioAmazonas').style.display = 'none';
    document.getElementById('incendioGalicia').style.display = 'none';
    document.getElementById('incendioAustralia').style.display = 'block';
    document.getElementById('incendioCalifornia').style.display = 'none';
    document.getElementById('titulo-articulo').textContent="Incendio en Australia"

}

function apareceAmazonas() {
    document.getElementById('nasa').style.display = 'none';

    document.getElementById('incendioAmazonas').style.display = 'block';
    document.getElementById('incendioGalicia').style.display = 'none';
    document.getElementById('incendioAustralia').style.display = 'none';
    document.getElementById('incendioCalifornia').style.display = 'none';
    document.getElementById('titulo-articulo').textContent="Incendio en Amazonas"

}

function apareceNasa() {
    document.getElementById('divisor').style.display='none';
    document.getElementById('nasa').style.display = 'block';
    document.getElementById('incendioAmazonas').style.display = 'none';
    document.getElementById('incendioGalicia').style.display = 'none';
    document.getElementById('incendioAustralia').style.display = 'none';
    document.getElementById('incendioCalifornia').style.display = 'none';
    document.getElementById('titulo-articulo').textContent="¿Qué rol juega Landsat?"
}
