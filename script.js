var map = L.map('map').setView([16.4734, 102.824], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {maxZoom: 19,})
    .addTo(map);
var stations = {
    "7-11 หลังหอ 8":[16.480184, 102.811889],
    "Complex":[16.477264, 102.823369],
    "Golden Living":[16.480341, 102.810397],
    "JK เครื่องเขียน":[16.463436, 102.827538],
    "KKBS":[16.474502, 102.825405],
    "YOUR SMILE":[16.458498, 102.828014],
    "กาแฟเด้อหล่า":[16.476954, 102.825863],
    "เกษียรสินธุ์ปาร์ค":[16.484311, 102.818122],
    "คณะเกษตรศาสตร์1":[16.476046, 102.822668],
    "คณะเกษตรศาสตร์2":[16.476057, 102.819856],
    "คณะเกษตรศาสตร์3":[16.477212, 102.821758],
    "คณะทันตแพทยศาสตร์":[16.466488, 102.827986],
    "คณะเทคนิคการแพทย์":[16.466713, 102.828181],
    "คณะเทคโนโลยี2":[16.473541, 102.821990],
    "คณะเทศโนโลยี1":[16.474319, 102.820673],
    "คณะนิติศาสตร์":[16.449944, 102.815529],
    "คณะพยาบาลศาสตร์":[16.470034, 102.824665],
    "คณะแพทย์ศาสตร์":[16.470477, 102.828068],
    "คณะเภสัชศาสตร์1":[16.470640, 102.827987],
    "คณะเภสัชศาสตร์2":[16.471072, 102.827325],
    "คณะมนุษยศาสตร์และสังคมศาสตร์":[16.476594, 102.826981],
    "คณะวิทยาศาสตร์":[16.475032, 102.825077],
    "คณะวิศวกรรมศาสตร์1":[16.471039, 102.824350],
    "คณะวิศวะกรรมศสตร์2":[16.471142, 102.822993],
    "คณะศิลปกรรมศาสตร์":[16.468990, 102.816923],
    "คณะศึกษาศาสตร์":[16.472805, 102.827961],
    "คณะสถาปัตยกรรมศาสตร์":[16.472300, 102.828045],
    "คณะสัตวแพทยศาสตร์":[16.478239, 102.831967],
    "ครัวโอมหมูกรอบ":[16.485139, 102.816266],
    "คอมเพล็กซ์":[16.477264, 102.823369],
    "คุ้มศรีฐาน":[16.445187, 102.812636],
    "เคี้ยงหลังมอ":[16.483321, 102.816261],
    "ตรงข้ามอาคารสิริคุณากร":[16.469869, 102.816477],
    "ที่พักญาติ":[16.476117, 102.812641],
    "บ้านพักสบาย":[16.485139, 102.816266],
    "บ้านสวนมอ":[16.480251, 102.805194],
    "บึงหนองแวงตราชู":[16.459100, 102.828139],
    "ปตท.":[16.478381, 102.814011],
    "ประตูกังสดาล":[16.465403, 102.827794],
    "ประตูเจ้าพ่อมอ":[16.476024, 102.831253],
    "ประตูศรีฐาน":[16.442518, 102.814827],
    "พิพิธภัณฑ์ธรรมชาติวิทยา":[16.445830, 102.811494],
    "พิมานคอนโด":[16.482990, 102.819185],
    "แฟลต14":[16.465868, 102.828321],
    "แฟลตป่าดู่1":[16.455548, 102.812846],
    "แฟลตป่าดู่2":[16.454991, 102.815182],
    "แฟลตศูนย์แพทย์":[16.467937, 102.823719],
    "ร้านชบา":[16.481730, 102.815997],
    "ร้านพรพระ":[16.460849, 102.827959],
    "ร้านพู่กันเครื่องเขียน":[16.479871, 102.814776],
    "โรงชาย":[16.477693, 102.819749],
    "โรงพยาบาลศรีนครินทร์":[16.467199, 102.830746],
    "โรงพิมพ์":[16.472255, 102.821634],
    "โรงยิมเก่า":[16.477634, 102.818686],
    "โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น":[16.449931, 102.815640],
    "โรงเรียนสาธิตมอดินแดง":[16.481205, 102.831749],
    "โรงแรมบายาสิตา":[16.477508, 102.831952],
    "โรงอาหาร U-center":[16.479864, 102.818881],
    "โรงอาหารคณะพยาบาล":[16.470127, 102.824592],
    "โรงอาหารหนองแวง":[16.465594, 102.825733],
    "ลานจอดรถหอพัก 8 หลัง":[16.479435, 102.808442],
    "ลานจอรถอุทยานการเกษตร":[16.468866, 102.815840],
    "วงเวียนศูนย์หัวใจสิริกิติ์":[16.465814, 102.829367],
    "วิทยาลัยปกครองท้องถิ่น":[16.473673, 102.831690],
    "วิมานดิน":[16.480739, 102.807144],
    "ศาลเจ้าพ่อมอ":[16.476920, 102.831977],
    "ศูนย์ประชุมกาญจนาภิเษก":[16.446665, 102.815143],
    "ศูนย์รถมอเตอร์ไซไฟฟ้า":[16.475403, 102.828167],
    "ศูนย์หัวใจสิริกิติ์":[16.466279, 102.830641],
    "สถาบันขงจื่อ":[16.474521, 102.830126],
    "สถาบันลุ่มน้ำโขง":[16.474368, 102.828210],
    "สนามยิงปืน":[16.477710, 102.818019],
    "สนามรักบี้":[16.475243, 102.815944],
    "สระพลาสติก":[16.475568, 102.817674],
    "หน้าอาคารสิริคุณากร":[16.469887, 102.816219],
    "หมู่บ้านศูนย์แพทย์":[16.467540, 102.821613],
    "หมู่บ้านศูนย์แพทย์1":[16.469421, 102.822382],
    "หมู่บ้านศูนย์แพทย์4":[16.468935, 102.821268],
    "หอในชาย 8":[16.477864, 102.818209],
    "หอในชาย 9":[16.479122, 102.818270],
    "หอพัก 8 หลัง":[16.478771, 102.810154],
    "หอพักนักศึกษาพยาบาล":[16.468423, 102.817477],
    "หอพักนักศึกษาแพทย์":[16.470929, 102.823482],
    "หอพักมอแดงเพลส":[16.480014, 102.815649],
    "หอศิลป์":[16.444504, 102.814721],
    "หอสมุดมหาวิทยาลัยขอนแก่น":[16.477075, 102.822994],
    "หออินเตอร์":[16.478637, 102.811939],
    "อาคารจอดรถสถานีชาร์จไฟฟ้า":[16.466036, 102.807785],
    "อาคารสิริคุณากร":[16.469552, 102.815702],
    "อุทยานการเกษตร1":[16.466404, 102.815469],
    "อุทยานการเกษตร2":[16.466749, 102.815335],
};
for (var key in stations) {
    L.marker(stations[key]).addTo(map).bindPopup(key);
}
    var green = ["คุ้มศรีฐาน","หอศิลป์","ศูนย์ประชุมกาญจนาภิเษก","คณะนิติศาสตร์","แฟลตป่าดู่2","อุทยานการเกษตร1","อาคารสิริคุณากร","หน้าอาคารสิริคุณากร","คณะเทคโนโลยี2","คณะเกษตรศาสตร์1","คณะเกษตรศาสตร์3","คณะเกษตรศาสตร์2","คณะเทคโนโลยี1","ตรงข้ามอาคารสิริคุณากร","ลานจอรถอุทยานการเกษตร","อุทยานการเกษตร2","โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น","ประตูศรีฐาน"];
    var red = ["หอพัก 8 หลัง","หออินเตอร์","ปตท.","หอในชาย 8","โรงชาย","Complex","กาแฟเด้อหล่า","โรงแรมบายาสิตา","คณะสัตวแพทยศาสตร์","โรงเรียนสาธิตมอดินแดง","ศาลเจ้าพ่อมอ","ประตูเจ้าพ่อมอ","สถาบันขงจื่อ","วิทยาลัยปกครองท้องถิ่น","โรงพยาบาลศรีนครินทร์","ศูนย์หัวใจสิริกิติ์","วงเวียนศูนย์หัวใจสิริกิติ์","แฟลต14","คณะทันตแพทยศาสตร์","คณะเทคนิคการแพทย์","โรงอาหารคณะพยาบาล","หอพักนักศึกษาแพทย์","โรงพิมพ์","คณะเทคโนโลยี2","คณะเกษตรศาสตร์1","คณะเกษตรศาสตร์3","โรงยิมเก่า","สนามรักบี้","สนามยิงปืน"];
    var yellow = ["หอพัก 8 หลัง","หออินเตอร์","ที่พักญาติ","สนามรักบี้","คณะเกษตรศาสตร์2","คณะเทคโนโลยี1","คณะวิศวกรรมศาสตร์1","โรงพิมพ์","คณะวิศวกรรมศาสตร์2","คณะพยาบาลศาสตร์","แฟลตศูนย์แพทย์","โรงอาหารหนองแวง","ประตูกังสดาล","วงเวียนศูนย์หัวใจสิริกิติ์","แฟลต14","JK เครื่องเขียน","ร้านพรพระ","บึงหนองแวงตราชู","YOUR SMILE","คณะทันตแพทยศาสตร์","คณะเภสัชศาสตร์1","คณะสถาปัตยกรรมศาสตร์","KKBS","คณะวิทยาศาสตร์","ศูนย์รถมอเตอร์ไซไฟฟ้า","โรงแรมบายาสิตา","คณะสัตวแพทยศาสตร์","โรงเรียนสาธิตมอดินแดง","ศาลเจ้าพ่อมอ","ประตูเจ้าพ่อมอ","คณะมนุษยศาสตร์และสังคมศาสตร์","หอสมุดมหาวิทยาลัยขอนแก่น","คณะเกษตรศาสตร์3","โรงยิมเก่า","สนามยิงปืน"];
    var blue =["บ้านสวนมอ","วิมานดิน","Golden Living","7-11 หลังหออินเตอร์","ร้านพู่กันเครื่องเขียน","หอพักมอแดงเพลส","ร้านชบา","เคี้ยงหลังมอ","ครัวโอมหมูกรอบ","บ้านพักสบาย","เกษียรสินธุ์ปาร์ค","พิมานคอนโด","โรงอาหาร U-center","หอในชาย 9","หอในชาย 8","โรงชาย","Complex","กาแฟเด้อหล่า","สถาบันลุ่มน้ำโขง","KKBS","คณะวิทยาศาสตร์","คณะสถาปัตยกรรมศาสตร์","คณะแพทย์ศาสตร์","คณะเทคนิคการแพทย์","แฟลตศูนย์แพทย์","หมู่บ้านศูนย์แพทย์1","หมู่บ้านศูนย์แพทย์4","หอพักนักศึกษาพยาบาล","อาคารสิริคุณากร","คณะศิลปกรรมศาสตร์","หมู่บ้านศูนย์แพทย์","โรงอาหารคณะพยาบาล","คณะเภสัชศาสตร์2","คณะศึกษาศาสตร์","ศูนย์รถมอเตอร์ไซไฟฟ้า","คณะมนุษยศาสตร์และสังคมศาสตร์","หอสมุดมหาวิทยาลัยขอนแก่น","คณะเกษตรศาสตร์3","โรงยิมเก่า","สนามยิงปืน"];
    var Wi = {
    "green": green,
    "red": red,
    "yellow": yellow,
    "blue": blue
};
        function showSubOptions() {
            var mainSelect = document.getElementById("mainSelect");
            var subOptions = document.getElementById("subOptions");
            var subSelect = document.getElementById("subSelect");
            subSelect.innerHTML = <option value=" "> </option>;
    if (mainSelect.value === "green") {
                subOptions.style.display = "block";
                subSelect.innerHTML += "<option value=" "> </option>";
                subSelect.innerHTML += "<option value="อาคารจอดรถสถานีชาร์จไฟฟ้า">อาคารจอดรถสถานีชาร์จไฟฟ้า</option>";
                subSelect.innerHTML += "<option value="แฟลตป่าดู่1">แฟลตป่าดู่1</option>";
                subSelect.innerHTML += "<option value="พิพิธภัณฑ์ธรรมชาติวิทยา">พิพิธภัณฑ์ธรรมชาติวิทยา</option>";
                subSelect.innerHTML += "<option value="คุ้มศรีฐาน">คุ้มศรีฐาน</option>";
                subSelect.innerHTML += "<option value="หอศิลป์">หอศิลป์</option>";
                subSelect.innerHTML += "<option value="ศูนย์ประชุมกาญจนาภิเษก">ศูนย์ประชุมกาญจนาภิเษก</option>";
                subSelect.innerHTML += "<option value="คณะนิติศาสตร์">คณะนิติศาสตร์</option";
                subSelect.innerHTML += "<option value="แฟลตป่าดู่2">แฟลตป่าดู่2</option>";
                subSelect.innerHTML += "<option value="อุทยานการเกษตร1">อุทยานการเกษตร1</option>";
                subSelect.innerHTML += "<option value="อาคารสิริคุณากร">อาคารสิริคุณากร</option>";
                subSelect.innerHTML += "<option value="หน้าอาคารสิริคุณากร">หน้าอาคารสิริคุณากร</option>";
                subSelect.innerHTML += "<option value="คณะเทคโนโลยี2">คณะเทคโนโลยี2</option>";
                subSelect.innerHTML += "<option value="คณะเกษตรศาสตร์1">คณะเกษตรศาสตร์1</option>";
                subSelect.innerHTML += "<option value="คณะเกษตรศาสตร์3">คณะเกษตรศาสตร์3</option>";
                subSelect.innerHTML += "<option value="หอสมุดมหาวิทยาลัยขอนแก่น">หอสมุดมหาวิทยาลัยขอนแก่น</option>";
                subSelect.innerHTML += "<option value="คณะเกษตรศาสตร์2">คณะเกษตรศาสตร์2</option>";
                subSelect.innerHTML += "<option value="คณะเทคโนโลยี1">คณะเทคโนโลยี1</option>";
                subSelect.innerHTML += "<option value="ตรงข้ามอาคารสิริคุณากร">ตรงข้ามอาคารสิริคุณากร</option>";
                subSelect.innerHTML += "<option value="ลานจอรถอุทยานการเกษตร">ลานจอรถอุทยานการเกษตร</option>";
                subSelect.innerHTML += "<option value="อุทยานการเกษตร2">อุทยานการเกษตร2</option>";
                subSelect.innerHTML += "<option value="โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น">โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น</option>";
            } 
            else if (mainSelect.value === "red") {
                subOptions.style.display = "block";
                subSelect.innerHTML += "<option value=" "> </option>";
                subSelect.innerHTML += "<option value="หอพัก 8 หลัง">หอพัก 8 หลัง</option>";
                subSelect.innerHTML += "<option value="หออินเตอร์">หออินเตอร์</option>";
                subSelect.innerHTML += "<option value="ปตท.">ปตท.</option>";
                subSelect.innerHTML += "<option value="หอในชาย 8">หอในชาย 8</option>";
                subSelect.innerHTML += "<option value="โรงชาย">โรงชาย</option>";
                subSelect.innerHTML += "<option value="Complex">Complex</option>";
                subSelect.innerHTML += "<option value="กาแฟเด้อหล่า">กาแฟเด้อหล่า</option>";
                subSelect.innerHTML += "<option value="โรงแรมบายาสิตา">โรงแรมบายาสิตา</option>";
                subSelect.innerHTML += "<option value="คณะสัตวแพทยศาสตร์">คณะสัตวแพทยศาสตร์</option>";
                subSelect.innerHTML += "<option value="โรงเรียนสาธิตมอดินแดง">โรงเรียนสาธิตมอดินแดง</option>";
                subSelect.innerHTML += "<option value="ศาลเจ้าพ่อมอ">ศาลเจ้าพ่อมอ</option>";
                subSelect.innerHTML += "<option value="ประตูเจ้าพ่อมอ">ประตูเจ้าพ่อมอ</option>";
                subSelect.innerHTML += "<option value="สถาบันขงจื่อ">สถาบันขงจื่อ</option>";
                subSelect.innerHTML += "<option value="วิทยาลัยปกครองท้องถิ่น">วิทยาลัยปกครองท้องถิ่น</option>";
                subSelect.innerHTML += "<option value="โรงพยาบาลศรีนครินทร์">โรงพยาบาลศรีนครินทร์</option>";
                subSelect.innerHTML += "<option value="ศูนย์หัวใจสิริกิติ์">ศูนย์หัวใจสิริกิติ์</option>";
                subSelect.innerHTML += "<option value="วงเวียนศูนย์หัวใจสิริกิติ์">วงเวียนศูนย์หัวใจสิริกิติ์</option>";
                subSelect.innerHTML += "<option value="แฟลต14">แฟลต14</option>";
                subSelect.innerHTML += "<option value="คณะทันตแพทยศาสตร์">คณะทันตแพทยศาสตร์</option>";
                subSelect.innerHTML += "<option value="คณะเทคนิคการแพทย์">คณะเทคนิคการแพทย์</option>";
                subSelect.innerHTML += "<option value="โรงอาหารคณะพยาบาล">โรงอาหารคณะพยาบาล</option>";
                subSelect.innerHTML += "<option value="หอพักนักศึกษาแพทย์">หอพักนักศึกษาแพทย์</option>";
                subSelect.innerHTML += "<option value="โรงพิมพ์">โรงพิมพ์</option>";
                subSelect.innerHTML += "<option value="คณะเทคโนโลยี2">คณะเทคโนโลยี2</option>";
                subSelect.innerHTML += "<option value="คณะเกษตรศาสตร์1">คณะเกษตรศาสตร์1</option>";
                subSelect.innerHTML += "<option value="คณะเกษตรศาสตร์3">คณะเกษตรศาสตร์3</option>";
                subSelect.innerHTML += "<option value="โรงยิมเก่า">โรงยิมเก่า</option>";
                subSelect.innerHTML += "<option value="สนามรักบี้">สนามรักบี้</option>";
                subSelect.innerHTML += "<option value="สนามยิงปืน">สนามยิงปืน</option>";
            }
            else if (mainSelect.value === "yellow") {
                subOptions.style.display = "block";
                subSelect.innerHTML += "<option value=" "> </option>";
                subSelect.innerHTML += "<option value="หอพัก 8 หลัง">หอพัก 8 หลัง</option>";
                subSelect.innerHTML += "<option value="หออินเตอร์">หออินเตอร์</option>";
                subSelect.innerHTML += "<option value="ที่พักญาติ">ที่พักญาติ</option>";
                subSelect.innerHTML += "<option value="สนามรักบี้">สนามรักบี้</option>";
                subSelect.innerHTML += "<option value="คณะเกษตรศาสตร์2">คณะเกษตรศาสตร์2</option>";
                subSelect.innerHTML += "<option value="คณะเทคโนโลยี1">คณะเทคโนโลยี1</option>";
                subSelect.innerHTML += "<option value="คณะวิศวกรรมศาสตร์1">คณะวิศวกรรมศาสตร์1</option>";
                subSelect.innerHTML += "<option value="โรงพิมพ์">โรงพิมพ์</option>";
                subSelect.innerHTML += "<option value="คณะวิศวกรรมศาสตร์2">คณะวิศวกรรมศาสตร์2</option>";
                subSelect.innerHTML += "<option value="คณะพยาบาลศาสตร์">คณะพยาบาลศาสตร์</option>";
                subSelect.innerHTML += "<option value="แฟลตศูนย์แพทย์">แฟลตศูนย์แพทย์</option>";
                subSelect.innerHTML += "<option value="โรงอาหารหนองแวง">โรงอาหารหนองแวง</option>";
                subSelect.innerHTML += "<option value="ประตูกังสดาล">ประตูกังสดาล</option>";
                subSelect.innerHTML += "<option value="วงเวียนศูนย์หัวใจสิริกิติ์">วงเวียนศูนย์หัวใจสิริกิติ์</option>";
                subSelect.innerHTML += "<option value="แฟลต14">แฟลต14</option>";
                subSelect.innerHTML += "<option value="JK เครื่องเขียน">JK เครื่องเขียน</option>";
                subSelect.innerHTML += "<option value="ร้านพรพระ">ร้านพรพระ</option>";
                subSelect.innerHTML += "<option value="บึงหนองแวงตราชู">บึงหนองแวงตราชู</option>";
                subSelect.innerHTML += "<option value="YOUR SMILE">YOUR SMILE</option>";
                subSelect.innerHTML += "<option value="คณะทันตแพทยศาสตร์">คณะทันตแพทยศาสตร์</option>";
                subSelect.innerHTML += "<option value="คณะเภสัชศาสตร์1">คณะเภสัชศาสตร์</option>";
                subSelect.innerHTML += "<option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>";
                subSelect.innerHTML += "<option value="KKBS">KKBS</option>";
                subSelect.innerHTML += "<option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>";
                subSelect.innerHTML += "<option value="ศูนย์รถมอเตอร์ไซไฟฟ้า">ศูนย์รถมอเตอร์ไซไฟฟ้า</option>";
                subSelect.innerHTML += "<option value="โรงแรมบายาสิตา">โรงแรมบายาสิตา</option>";
                subSelect.innerHTML += "<option value="คณะสัตวแพทยศาสตร์">คณะสัตวแพทยศาสตร์</option>";
                subSelect.innerHTML += "<option value="โรงเรียนสาธิตมอดินแดง">โรงเรียนสาธิตมอดินแดง</option>";
                subSelect.innerHTML += "<option value="ศาลเจ้าพ่อมอ">ศาลเจ้าพ่อมอ</option>";
                subSelect.innerHTML += "<option value="ประตูเจ้าพ่อมอ">ประตูเจ้าพ่อมอ</option>";
                subSelect.innerHTML += "<option value="คณะมนุษยศาสตร์และสังคมศาสตร์">คณะมนุษยศาสตร์และสังคมศาสตร์</option>";
                subSelect.innerHTML += "<option value="หอสมุดมหาวิทยาลัยขอนแก่น">หอสมุดมหาวิทยาลัยขอนแก่น</option>";
                subSelect.innerHTML += "<option value="คณะเกษตรศาสตร์3">คณะเกษตรศาสตร์3</option>";
                subSelect.innerHTML += "<option value="โรงยิมเก่า">โรงยิมเก่า</option>";
                subSelect.innerHTML += "<option value="สนามยิงปืน">สนามยิงปืน</option>";
            }
            else if (mainSelect.value === "blue") {
                subOptions.style.display = "block";
                subSelect.innerHTML += "<option value=" "> </option>";
                subSelect.innerHTML += "<option value="บ้านสวนมอ">บ้านสวนมอ</option>";
                subSelect.innerHTML += "<option value="วิมานดิน">วิมานดิน</option>";
                subSelect.innerHTML += "<option value="Golden Living">Golden Living</option>";
                subSelect.innerHTML += "<option value="7-11 หลังหออินเตอร์">7-11 หลังหอ 8</option>";
                subSelect.innerHTML += "<option value="ร้านพู่กันเครื่องเขียน">ร้านพู่กันเครื่องเขียน</option>";
                subSelect.innerHTML += "<option value="หอพักมอแดงเพลส">หอพักมอแดงเพลส</option>";
                subSelect.innerHTML += "<option value="ร้านชบา">ร้านชบา</option>";
                subSelect.innerHTML += "<option value="เคี้ยงหลังมอ">เคี้ยงหลังมอ</option>";
                subSelect.innerHTML += "<option value="ครัวโอมหมูกรอบ">ครัวโอมหมูกรอบ</option>";
                subSelect.innerHTML += "<option value="บ้านพักสบาย">บ้านพักสบาย</option>";
                subSelect.innerHTML += "<option value="เกษียรสินธุ์ปาร์ค">เกษียรสินธุ์ปาร์ค</option>";
                subSelect.innerHTML += "<option value="พิมานคอนโด">พิมานคอนโด</option>";
                subSelect.innerHTML += "<option value="โรงอาหาร U-center">โรงอาหาร U-center</option>";
                subSelect.innerHTML += "<option value="หอในชาย 9">หอในชาย 9</option>";
                subSelect.innerHTML += "<option value="หอในชาย 8">หอในชาย 8</option>";
                subSelect.innerHTML += "<option value="โรงชาย">โรงชาย</option>";
                subSelect.innerHTML += "<option value="Complex">Complex</option>";
                subSelect.innerHTML += "<option value="กาแฟเด้อหล่า">กาแฟเด้อหล่า</option>";
                subSelect.innerHTML += "<option value="สถาบันลุ่มน้ำโขง">สถาบันลุ่มน้ำโขง</option>";
                subSelect.innerHTML += "<option value="KKBS">KKBS</option>";
                subSelect.innerHTML += "<option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>";
                subSelect.innerHTML += "<option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>";
                subSelect.innerHTML += "<option value="คณะแพทย์ศาสตร์">คณะแพทย์ศาสตร์</option>";
                subSelect.innerHTML += "<option value="คณะเทคนิคการแพทย์">คณะเทคนิคการแพทย์</option>";
                subSelect.innerHTML += "<option value="แฟลตศูนย์แพทย์">แฟลตศูนย์แพทย์</option>";
                subSelect.innerHTML += "<option value="หมู่บ้านศูนย์แพทย์1">หมู่บ้านศูนย์แพทย์1</option>";
                subSelect.innerHTML += "<option value="หมู่บ้านศูนย์แพทย์4">หมู่บ้านศูนย์แพทย์4</option>";
                subSelect.innerHTML += "<option value="หอพักนักศึกษาพยาบาล">หอพักนศ.พยาบาล</option>";
                subSelect.innerHTML += "<option value="อาคารสิริคุณากร">อาคารสิริคุณากร</option>";
                subSelect.innerHTML += "<option value="คณะศิลปกรรมศาสตร์">คณะศิลปกรรมศาสตร์</option>";
                subSelect.innerHTML += "<option value="หมู่บ้านศูนย์แพทย์">หมู่บ้านศูนย์แพทย์</option>";
                subSelect.innerHTML += "<option value="โรงอาหารคณะพยาบาล">โรงอาหารคณะพยาบาล</option>";
                subSelect.innerHTML += "<option value="คณะเภสัชศาสตร์2">คณะเภสัชศาสตร์2</option>";
                subSelect.innerHTML += "<option value="คณะศึกษาศาสตร์">คณะศึกษาศาสตร์</option>";
                subSelect.innerHTML += "<option value="ศูนย์รถมอเตอร์ไซไฟฟ้า">ศูนย์รถมอเตอร์ไซไฟฟ้า</option>";
                subSelect.innerHTML += "<option value="คณะมนุษยศาสตร์และสังคมศาสตร์">คณะมนุษยศาสตร์และสังคมศาสตร์</option>";
                subSelect.innerHTML += "<option value="หอสมุดมหาวิทยาลัยขอนแก่น">หอสมุดมหาวิทยาลัยขอนแก่น</option>";
                subSelect.innerHTML += "<option value="คณะเกษตรศาสตร์3">คณะเกษตรศาสตร์3</option>";
                subSelect.innerHTML += "<option value="โรงยิมเก่า">โรงยิมเก่า</option>";
                subSelect.innerHTML += "<option value="สนามยิงปืน">สนามยิงปืน</option>";
            }else {
                subOptions.style.display = "none"; // ซ่อนถ้าไม่มีตัวเลือกหลัก
            }
        }
var routingControl;
function calculateRoute() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var was = document.getElementById("Color").value;
    var startCoords = stations[start];
    var endCoords = stations[end];
    var mandatoryStops = Wi[was];
    if (startCoords && endCoords && mandatoryStops) {
        var waypoints = [L.latLng(startCoords[0], startCoords[1])];
        for (var i = 0; i < mandatoryStops.length; i++) {
            var stopCoords = stations[mandatoryStops[i]];
            if (stopCoords) {
                waypoints.push(L.latLng(stopCoords[0], stopCoords[1]));
            }
        }
        waypoints.push(L.latLng(endCoords[0], endCoords[1]));

        if (routingControl) {
            map.removeControl(routingControl);
        }

        routingControl = L.Routing.control({
            waypoints: waypoints,
            routeWhileDragging: true,
            addWaypoints: false
        }).addTo(map);

        routingControl.on('routesfound', function(e) {
            var routes = e.routes;
            var summary = routes[0].summary;
        });
    }
}
