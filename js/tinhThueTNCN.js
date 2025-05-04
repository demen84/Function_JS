/*
* Đầu vào:
    - Tên người đóng thuế
    - Tổng thu nhập năm
    - Số người phụ thuộc
* Xử lý:
    Thu nhập chịu thuế = Tổng thu nhập năm - 4.000.000 - Số người phụ thuộc * 1.600.000
    - <= 60 triệu = Thu nhập chịu thuế * 5%
    - trên 60 triệu --> 120 triệu = Thu nhập chịu thuế * 10%
    - trên 120 triệu --> 210 triệu = Thu nhập chịu thuế * 15%
    - trên 210 triệu --> 384 triệu = Thu nhập chịu thuế * 20%
    - trên 384 triệu --> 624 triệu = Thu nhập chịu thuế * 25%
    - trên 624 triệu --> 960 triệu = Thu nhập chịu thuế * 30%
    - trên 960 triệu = Thu nhập chịu thuế * 35%
* Đầu ra:
    - Tổng tiền thuế thu nhập cá nhân
*/

//HÀM TÍNH THUẾ THU NHẬP CÁ NHÂN

function tinhThueTNCN(hoTen, thuNhapNam, soNguoiPhuThuoc){
    let tienThue = 0;
    let chiuThueMuc1 = 60000000 - 4000000 - soNguoiPhuThuoc * 1600000;
    let thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

    if (thuNhapNam <= 60000000) {
        tienThue = thuNhapChiuThue * 0.05;
    } else if (thuNhapNam > 60000000 && thuNhapNam <= 120000000) {
        tienThue = chiuThueMuc1 * 0.05 + (thuNhapNam - 60000000) * 0.1;
    } else if (thuNhapNam > 120000000 && thuNhapChiuThue <= 210000000) {
        tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + (thuNhapNam - 120000000) * 0.15;
    } else if (thuNhapNam > 210000000 && thuNhapChiuThue <= 384000000) {
        tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapNam - 210000000) * 0.2;
    } else if (thuNhapNam > 384000000 && thuNhapChiuThue <= 624000000) {
        tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapNam - 384000000) * 0.25;
    } else if (thuNhapNam > 624000000 && thuNhapChiuThue <= 960000000) {
        tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapNam - 624000000) * 0.3;
    } else {
        tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapNam - 624000000) * 0.5;
    }

    return tienThue;
}

//DOM tới nút tính thuế TNCN
document.getElementById('btnTinhThue').onclick = function(){
    let hoTen = document.getElementById('fullName').value;
    let tongThuNhapNam = document.getElementById('tongThuNhap').value * 1;
    let soNguoiPT = document.getElementById('soNguoiPhuThuoc').value * 1;
    
    let tienThueTNCN = tinhThueTNCN(hoTen, tongThuNhapNam, soNguoiPT);

    let pTienThue = document.getElementById('pTienThue');
    pTienThue.innerHTML = `Tiền thuế thu nhập cá nhân của ${hoTen} là: ${tienThueTNCN.toLocaleString()} VNĐ`;
    pTienThue.classList.add('styleKQ');
}
