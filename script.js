// script.js
var map = L.map('map').setView([16.4734, 102.824], 14); // พิกัดในมหาวิทยาลัยขอนแก่น
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// ตำแหน่งของสถานี
var stations = {
    "ที่พักญาติ":[16.476117, 102.812641],
    "สระพลาสติก":[16.474429, 102.815982],
    "คณะเกษตรศาสตร์1":[16.474451, 102.820614],
    "โรงพยาบาลศรีนครินทร์":[16.467199, 102.830746],
    "ศูนย์หัวใจสิริกิติ์":[16.466279, 102.830641],
    "คอมเพล็กซ์":[16.477264, 102.823369],
    "โรงยิมเก่า":[16.477634, 102.818686],
    "สนามยิงปืน":[16.477710, 102.818019],
    "คณะเทศโนโลยี1":[16.473496, 102.821960],
    "คณะวิศวกรรมศาสตร์1":[16.471039, 102.824350],
    "คณะวิศวะกรรมศสตร์2":[16.471142, 102.822993],
    "อาคารจอดรถสถานีชาร์จไฟฟ้า":[16.466036, 102.807785],
    "อาคารเฉลิมพระเกียรติ 72 พรรษา":[16.4733,102.8247],3333333333333333333333333333333333333333333333333333333333333
    "คณะวิศวกรรมศาสตร์3":[16.475568, 102.817674],
    "คณะวิทยาศาสตร์":[16.475032, 102.825077],
    "คณะเทคนิคการแพทย์":[16.466713, 102.828181],
    "คณะเภสัชศาสตร์":[16.470640, 102.827987],
    "คณะเกษตรศาสตร์1":[16.476046, 102.822668],
    "คณะมนุษยศาสตร์และสังคมศาสตร์":[16.476594, 102.826981],
    "คณะศิลปกรรมศาสตร์":[16.468990, 102.816923],
    "คณะทันตแพทยศาสตร์":[16.466488, 102.827986],
    "คณะสัตวแพทยศาสตร์":[16.478239, 102.831967],
    "คณะพยาบาลศาสตร์":[16.470034, 102.824665],
    "KKBS":[16.474502, 102.825405],
    "คณะสถาปัตยกรรมศาสตร์":[16.472300, 102.828045],
    "คณะเทคโนโลยี2":[16.473541, 102.821990],
    "วิทยาลัยปกครองท้องถิ่น":[16.473673, 102.831690],
    "ลานจอดรถหอพัก 8 หลัง":[16.479435, 102.808442],
    "คณะนิติศาสตร์":[16.449944, 102.815529],
    "หอพักนักศึกษาแพทย์":[16.470929, 102.823482],
    "คณะแพทย์ศาสตร์":[16.470477, 102.828068],
    "แฟลตศูนย์แพทย์":[16.467937, 102.823719],
    "หมู่บ้านศูนย์แพทย์1":[16.469421, 102.822382],
    "หมู่บ้านศูนย์แพทย์4":[16.468935, 102.821268],
    "หอพักนศ.พยาบาล":[16.468423, 102.817477],
    "หอศิลป์":[16.4705,102.8224],
    "ศูนย์ประชุมกาญจนาภิเษก":[16.446665, 102.815143],
    "แฟลตป่าดู่1":[16.455548, 102.812846],
    "แฟลตป่าดู่2":[16.454991, 102.815182],
    "ปตท.":[16.478381, 102.814011],
    "สถาบันขงจื่อ":[16.474521, 102.830126],
    "สนามรักบี้":[16.475243, 102.815944],
    "โรงอาหารหนองแวง":[16.465594, 102.825733],
    "ประตูกังสดาล":[16.465403, 102.827794],
    "วงเวียนศูนย์หัวใจสิริกิติ์":[16.465814, 102.829367],
    "แฟลต14":[16.465868, 102.828321],
    "JK เครื่องเขียน":[16.463436, 102.827538],
    "ร้านพรพระ":[16.460849, 102.827959],
    "บึงหนองแวงตราชู":[16.459100, 102.828139],
    "YOUR SMILE":[16.458498, 102.828014],
v   "โรงแรมบายาสิตา":[16.477508, 102.831952],
    "โรงเรียนสาธิตมอดินแดง":[16.481205, 102.831749],
    "ศาลเจ้าพ่อมอ":[16.476920, 102.831977],
    "ประตูเจ้าพ่อมอ":[16.476024, 102.831253],
    "โรงพิมพ์":[16.472255, 102.821634],
    "คุ้มศรีฐาน":[16.445187, 102.812636],
    "พิพิธภัณฑ์ธรรมชาติวิทยา":[16.445830, 102.811494],
    "หอศิลป์":[16.444504, 102.814721],
    "อุทยานการเกษตร1":[16.466404, 102.815469],
    "หน้าอาคารสิริคุณากร":[16.469887, 102.816219],
    "ตรงข้ามอาคารสิริคุณากร":[16.469869, 102.816477],
    "อาคารสิริคุณากร":[16.469552, 102.815702],
    "ลานจอรถอุทยานการเกษตร":[16.468866, 102.815840],
    "โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น":[16.449931, 102.815640],
    "ประตูศรีฐาน":[16.442518, 102.814827],
    "อุทยานการเกษตร2":[16.466749, 102.815335],
    "บ้านสวนมอ":[16.480251, 102.805194],
    "วิมานดิน":[16.480739, 102.807144],
    "Golden Living":[16.480341, 102.810397],
    "7-11 หลังหอ 8":[16.480184, 102.811889],
    "ร้านพู่กันเครื่องเขียน":[16.479871, 102.814776],
    "หอพักมอแดงเพลส":[16.480014, 102.815649],
    "ร้านชบา":[16.481730, 102.815997],
    "เคี้ยงหลังมอ":[16.483321, 102.816261],
    "ครัวโอมหมูกรอบ":[16.485139, 102.816266],
    "บ้านพักสบาย":[16.485139, 102.816266],
    "เกษียรสินธุ์ปาร์ค":[16.484311, 102.818122],
    "พิมานคอนโด":[16.482990, 102.819185],
    "โรงอาหาร U-center":[16.479864, 102.818881],
    "หอในชาย 9":[16.479122, 102.818270],
    "หอในชาย 8":[16.477864, 102.818209],
    "โรงชาย":[16.477693, 102.819749],
    "Complex":[16.477264, 102.823369],
    "กาแฟเด้อหล่า":[16.476954, 102.825863],
    "สถาบันลุ่มน้ำโขง":[16.474368, 102.828210],
    "KKBS":[16.474502, 102.825405]
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
