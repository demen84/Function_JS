/*
* Đầu vào:
    - Tên khách hàng/Tên người dùng sử dụng điện
    - Số Kw tiêu thụ điện
    - Khu vực ưu tiên: nhập X nếu không thuộc khu vực ưu tiên. Khu vực A +2đ, B +1đ, C +0.5đ.
    - Đối tượng ưu tiên: nhập 0 nếu không thuộc đối tượng ưu tiên. Đối tượng 1 +2.5đ, 2 +1.5đ, 3 +1đ.
* Xử lý:
    - 50kw đầu = 500VND/kw
    - 50kw kế (từ 51kw --> 100kw) = 650VND/kw
    - 100kw kế (từ 101kw --> 200kw) = 850VND/kw
    - 150kw kế (từ 201kw --> 350kw) = 1100VND/kw
    - Còn lại (từ 351kw trở đi) = 1300VND/kw
* Đầu ra:
    - Tổng tiền điện XXX VND của khách hàng ABC
*/
//Khai báo cáo biến
const GIA_50KW_DAU = 500; //500 VNĐ
const GIA_50KW_KE = 650;
const GIA_100KW_KE = 850;
const GIA_150KW_KE = 1100;
const GIA_KW_CONLAI = 1300;

const MUC_1 = 50;
const MUC_2 = 100;
const MUC_3 = 200;
const MUC_4 = 350;
// const MUC_5 = 350;

//Hàm tính tiền điện theo từng mức
function tienDienMuc1(soKwh, giaMuc1) {
    return soKwh * giaMuc1; //50Kw đầu tiên
}

function tienDienMuc2(soKwh, giaMuc2) {
    return (soKwh - MUC_1) * giaMuc2; //50Kw kế tiếp
}

function tienDienMuc3(soKwh, giaMuc3) {
    return (soKwh - MUC_2) * giaMuc3; //100Kw kế tiếp
}

function tienDienMuc4(soKwh, giaMuc4) {
    return (soKwh - MUC_3) * giaMuc4; //150Kw kế tiếp
}

function tienDienMuc5(soKwh, giaMuc5) {
    return (soKwh - MUC_4) * giaMuc5; //150Kw kế tiếp
}

//Hàm tính tiền điện
function tinhTienDien(customerName, soKwh) {
    let tongTienDien = 0;
    // let flag = true;

    // if (soKwh < 0){
    //     flag = false;
    //     return "Số Kwh không hợp lệ!";
    // }
    // Cách 1: Dùng if else
    if (soKwh <= MUC_1 && soKwh > 0) {
        //tongTienDien = soKwh * GIA_50KW_DAU; //OR: tongTienDien=tienDienMuc1(soKwh, GIA_50KW_DAU);
        tongTienDien = tienDienMuc1(soKwh, GIA_50KW_DAU);
    } else if (soKwh > MUC_1 && soKwh <= MUC_2) {
        tongTienDien = tienDienMuc1(MUC_1, GIA_50KW_DAU) + tienDienMuc2(soKwh, GIA_50KW_KE);
    } else if (soKwh > MUC_2 && soKwh <= MUC_3) {
        tongTienDien = tienDienMuc1(MUC_1, GIA_50KW_DAU) + tienDienMuc2(MUC_2, GIA_50KW_KE) + tienDienMuc3(soKwh, GIA_100KW_KE);
    } else if (soKwh > MUC_3 && soKwh <= MUC_4) {
        tongTienDien = tienDienMuc1(MUC_1, GIA_50KW_DAU) + tienDienMuc2(MUC_2, GIA_50KW_KE) + tienDienMuc3(MUC_3, GIA_100KW_KE) + tienDienMuc4(soKwh, GIA_150KW_KE);
    } else if (soKwh > 350) {
        tongTienDien = tienDienMuc1(MUC_1, GIA_50KW_DAU) + tienDienMuc2(MUC_2, GIA_50KW_KE) + tienDienMuc3(MUC_3, GIA_100KW_KE) + tienDienMuc4(MUC_4, GIA_150KW_KE) + tienDienMuc5(soKwh, GIA_KW_CONLAI);
    } else {
        tongTienDien = 0;
    }

    // Cách 2: ngắn gọn hơn, dễ bảo trì hơn - nhưng chưa học
    // let bacGia = [500, 650, 850, 1100, 1300];
    // let bacKwh = [50, 50, 100, 150, Infinity]; // Infinity để xử lý trường hợp vượt quá 350 kWh
    // // let tongTienDien = 0;
    // let i = 0;
    // while (soKwh > 0) {
    //     let dungLuong = Math.min(soKwh, bacKwh[i]);
    //     tongTienDien += dungLuong * bacGia[i];
    //     soKwh -= dungLuong;
    //     i++;
    // }

    return tongTienDien;
}

//DOM tới nút tính tiền điện => gọi hàm tính tiền điện; => In kết quả ra màn hình
document.getElementById('btnTinhTienDien').onclick = function () {
    //DOM tới tên khách hàng & số kwh tiêu thụ
    let tenKhachHang = document.getElementById('custName').value;
    let soDien = document.getElementById('soDien').value * 1;

    let pTienDien = document.getElementById('pTienDien');

    if (soDien > 0) {
        let tienDien = tinhTienDien(tenKhachHang, soDien);
        pTienDien.innerHTML = `Tổng tiền điện của khách hàng ${tenKhachHang} là: ${tienDien.toLocaleString()} VNĐ`;
    } else {
        pTienDien.innerHTML = "Số Kwh không hợp lệ!";
    }
    //add class vào thẻ p kết quả:
    pTienDien.classList.add('styleKQ');
}