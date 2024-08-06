// แสดงแผนที่
var map = L.map('map').setView([16.432, 102.823], 13);

// เพิ่มแผนที่พื้นฐาน
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// เพิ่มจุดจอดรถและเส้นทาง
// (ตัวอย่างสำหรับแสดงข้อมูลที่สามารถเพิ่มเติมได้)
var stops = [
  { name: 'สถานี A', coords: [16.432, 102.823] },
  { name: 'สถานี B', coords: [16.435, 102.827] },
  // เพิ่มเติมสถานีอื่นๆ
];

stops.forEach(function(stop) {
  L.marker(stop.coords).addTo(map).bindPopup(stop.name);
});

// สามารถเพิ่มฟังก์ชันเพิ่มเติมสำหรับการเลือกจุดเริ่มต้นและจุดปลายทาง
