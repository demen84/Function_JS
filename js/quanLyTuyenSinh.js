/*
* Đầu vào:
    - Điểm chuẩn
    - Điểm môn 1, môn 2, môn 3
    - Khu vực ưu tiên: nhập X nếu không thuộc khu vực ưu tiên. Khu vực A +2đ, B +1đ, C +0.5đ.
    - Đối tượng ưu tiên: nhập 0 nếu không thuộc đối tượng ưu tiên. Đối tượng 1 +2.5đ, 2 +1.5đ, 3 +1đ.
* Xử lý:
    - Nếu điểm tổng 3 môn >= điểm chuẩn & không có môn nào bị 0đ thì thí sinh đậu. Else rớt.
    - Tính tổng điểm của thí sinh = (Điểm môn 1 + Điểm môn 2 + Điểm môn 3) + (Điểm ưu tiên khu vực + Điểm ưu tiên đối tượng).
* Đầu ra:
    - Tổng số điểm của thí sinh.
    - Kết quả Đậu/Rớt của thí sinh.
*/

//Hàm tính tổng điểm của thí sinh
function tinhTongDiem(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong) {
    let tongDiem = diemMon1 + diemMon2 + diemMon3;

    // if (khuVuc === 'A') {
    //     tongDiem += 2;
    // } else if (khuVuc === 'B') {
    //     tongDiem += 1;
    // } else if (khuVuc === 'C') {
    //     tongDiem += 0.5;
    // };

    //Dùng switch case:
    switch (khuVuc) {
        case 'A': tongDiem += 2; break;
        case 'B': tongDiem += 1; break;
        case 'C': tongDiem += 0.5; break;
        // case 'X': tongDiem += 0; break;
        default: tongDiem += 0;
    }

    if (doiTuong == 1) {
        tongDiem += 2.5;
    } else if (doiTuong == 2) {
        tongDiem += 1.5;
    } else if (doiTuong == 3) {
        tongDiem += 1;
    };

    return tongDiem;
}

//DOM tới nút Tính điểm
document.getElementById('btnTinhDiem').onclick = function () {
    let diemChuan = document.getElementById('diemChuan').value * 1;
    let diemMon1 = document.getElementById('diemMon1').value * 1;
    let diemMon2 = document.getElementById('diemMon2').value * 1;
    let diemMon3 = document.getElementById('diemMon3').value * 1;
    let khuVuc = document.getElementById('khuVuc').value;
    let doiTuong = document.getElementById('doiTuong').value;

    let tongDiem3Mon = tinhTongDiem(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong);
    let thongBao = "";
    if ((tongDiem3Mon >= diemChuan) && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        thongBao = "Đậu";
    }
    else {
        thongBao = "Rớt";
    }

    //Xuất ra thông tin kết quả:
    let ketQua = document.getElementById('pKetQua');
    ketQua.innerHTML = `Tổng điểm: ${tongDiem3Mon}; Kết quả: ${thongBao}`;

    ketQua.classList.add('styleKQ');
}