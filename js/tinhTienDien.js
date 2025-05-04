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

//Hàm tính tiền điện
function tinhTienDien(customerName, soKwh) {
    let tongTienDien = 0;
    if (soKwh <= 50) {
        tongTienDien = soKwh * 500;
    } else if (soKwh > 50 && soKwh <= 100) {
        tongTienDien = 50 * 500 + (soKwh - 50) * 650;
    } else if (soKwh > 100 && soKwh <= 200) {
        tongTienDien = 50 * 500 + 50 * 650 + (soKwh - 100) * 850;
    } else if (soKwh > 200 && soKwh <= 350) {
        tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKwh - 200) * 1100;
    } else if (soKwh > 350) {
        tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwh - 350) * 1300;
    }

    return tongTienDien;
}

document.getElementById('btnTinhTienDien').onclick = function () {
    //DOM tới tên khách hàng & số kwh tiêu thụ
    let custName = document.getElementById('custName').value;
    let soDien = document.getElementById('soDien').value * 1;

    let tienDien = tinhTienDien(custName, soDien);

    //DOM tới thẻ kết quả:
    let pTienDien = document.getElementById('pTienDien');
    pTienDien.innerHTML = `Tổng tiền điện của khách hàng ${custName} là: ${tienDien.toLocaleString()} VNĐ`;

    pTienDien.classList.add('styleKQ');
}