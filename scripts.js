// Example with Leaflet.js
var map = L.map('map').setView([16.4746, 102.8222], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

var marker = L.marker([16.4746, 102.8222]).addTo(map)
    .bindPopup('<b>โรงพยาบาลศรีนครินทร์</b>')
    .openPopup();
