function initialize() {
    var options = {
        zooming: false,
        scrollWheelZoom: false,
        tilting: false,
    };


    var earth = new WE.map('globo', options);
    earth.setView([46.8011, 8.2266], 1.5);

    WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
        tileSize: 256,
        bounds: [[-85, -180], [85, 180]],
        minZoom: 0,
        maxZoom: 6,
        attribution: 'WebGLEarth example',
        tms: true


    }).addTo(earth);

    var marker1 = WE.marker([43.05, -8.13], 'img/fuego.png', 50, 50).addTo(earth);
    marker1.bindPopup("<b>Incendio de Galicia</span>", { maxWidth: 150, closeButton: false }).openPopup();
    var marker2 = WE.marker([-14.86, -55.20], 'img/fuego.png', 50, 50).addTo(earth);
    marker2.bindPopup("<b>Incendio del Amazonas   </span>", { maxWidth: 150, closeButton: false }).openPopup();
    var marker3 = WE.marker([-25.284, 132.671], 'img/fuego.png', 50, 50).addTo(earth);
    marker3.bindPopup("<b>Incendio de Australia </span>", { maxWidth: 150, closeButton: false }).openPopup();
    var marker4 = WE.marker([37.0, -121], 'img/fuego.png', 50, 50).addTo(earth);

    marker4.bindPopup("<a href=\"https://www.w3schools.com\"><b>Incendio de California</span></a>", { maxWidth: 150, closeButton: false }).openPopup();
}