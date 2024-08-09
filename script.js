// script.js
var map = L.map('map').setView([16.4734, 102.824], 14); // พิกัดในมหาวิทยาลัยขอนแก่น
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// ตำแหน่งของสถานี
var stations = {
    "B1": [16.4764, 102.8200],
    "R1": [16.4730, 102.8270]
    // เพิ่มเติมตามความต้องการ
};

// แสดงสถานีบนแผนที่
for (var key in stations) {
    L.marker(stations[key]).addTo(map).bindPopup(key);
}

function calculateRoute() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    alert("เส้นทางจาก " + start + " ถึง " + end);
    // เพิ่มฟังก์ชันการคำนวณเส้นทางต่อรถที่นี่
}
