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
//Khai báo biến
const MUC_TN_1 = 60000000;
const MUC_TN_2 = 120000000;
const MUC_TN_3 = 210000000;
const MUC_TN_4 = 384000000;
const MUC_TN_5 = 624000000;
const MUC_TN_6 = 960000000;

const TIEN_MIEN_THUE = 4000000;
const TIEN_MIEN_THUE_NGUOI_PT = 1600000;

const THUE_MUC_1 = 0.05;
const THUE_MUC_2 = 0.1;
const THUE_MUC_3 = 0.15;
const THUE_MUC_4 = 0.2;
const THUE_MUC_5 = 0.25;
const THUE_MUC_6 = 0.3;
const THUE_MUC_7 = 0.35;

//Hàm tính thuế thu nhập mức 1
function tienThueMuc1(thuNhapNam, soNguoiPhuThuoc, thueMuc1) {
    // let thuNhapChiuThue = thuNhapNam - TIEN_MIEN_THUE - soNguoiPhuThuoc * TIEN_MIEN_THUE_NGUOI_PT;
    // let tienThue = thuNhapChiuThue * thueMuc1;
    // return tienThue;
    let mien_thue=soNguoiPhuThuoc * TIEN_MIEN_THUE_NGUOI_PT + TIEN_MIEN_THUE;
    if (soNguoiPhuThuoc < 0) {
        alert("Số người phụ thuộc không hợp lệ!");
        return 0;
    } else if (thuNhapNam <= mien_thue) {
        alert("Tổng thu nhập năm của bạn không cần đóng thuế!");
        return 0;
    } else {
        let thuNhapChiuThue = thuNhapNam - mien_thue;
        let tienThue = thuNhapChiuThue * thueMuc1;
        return tienThue;

        // let thuNhapChiuThue = thuNhapNam - TIEN_MIEN_THUE - soNguoiPhuThuoc * TIEN_MIEN_THUE_NGUOI_PT;
        // let tienThue = thuNhapChiuThue * thueMuc1;
        // return tienThue;
    }
}
//Hàm tính thuế thu nhập mức 2
function tienThueMuc2(thuNhapNam, soNguoiPhuThuoc, thueMuc2) {
    let tienThue = tienThueMuc1(MUC_TN_1, soNguoiPhuThuoc, THUE_MUC_1) + (thuNhapNam - MUC_TN_1) * thueMuc2;
    return tienThue;
}
//Hàm tính thuế thu nhập mức 3
function tienThueMuc3(thuNhapNam, soNguoiPhuThuoc, thueMuc3) {
    let tienThue = tienThueMuc2(MUC_TN_2, soNguoiPhuThuoc, THUE_MUC_2) + (thuNhapNam - MUC_TN_2) * thueMuc3;
    return tienThue;
}
//Hàm tính thuế thu nhập mức 4
function tienThueMuc4(thuNhapNam, soNguoiPhuThuoc, thueMuc4) {
    let tienThue = tienThueMuc3(MUC_TN_3, soNguoiPhuThuoc, THUE_MUC_3) + (thuNhapNam - MUC_TN_3) * thueMuc4;
    return tienThue;
}
//Hàm tính thuế thu nhập mức 5
function tienThueMuc5(thuNhapNam, soNguoiPhuThuoc, thueMuc5) {
    let tienThue = tienThueMuc4(MUC_TN_4, soNguoiPhuThuoc, THUE_MUC_4) + (thuNhapNam - MUC_TN_4) * thueMuc5;
    return tienThue;
}
//Hàm tính thuế thu nhập mức 6
function tienThueMuc6(thuNhapNam, soNguoiPhuThuoc, thueMuc6) {
    let tienThue = tienThueMuc5(MUC_TN_5, soNguoiPhuThuoc, THUE_MUC_5) + (thuNhapNam - MUC_TN_5) * thueMuc6;
    return tienThue;
}
//Hàm tính thuế thu nhập mức 7 - mức cuối
function tienThueMuc7(thuNhapNam, soNguoiPhuThuoc, thueMuc7) {
    let tienThue = tienThueMuc6(MUC_TN_6, soNguoiPhuThuoc, THUE_MUC_6) + (thuNhapNam - MUC_TN_6) * thueMuc7;
    return tienThue;
}

//HÀM TÍNH THUẾ THU NHẬP CÁ NHÂN
function tinhThueTNCN(hoTen, thuNhapNam, soNguoiPhuThuoc) {
    let tienThue = 0;

    // let chiuThueMuc1 = 60000000 - 4000000 - soNguoiPhuThuoc * 1600000;
    // let thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

    // if (thuNhapNam <= 60000000 && thuNhapNam > 0) {
    //     tienThue = thuNhapChiuThue * 0.05;
    // } else if (thuNhapNam > 60000000 && thuNhapNam <= 120000000) {
    //     tienThue = chiuThueMuc1 * 0.05 + (thuNhapNam - 60000000) * 0.1;
    // } else if (thuNhapNam > 120000000 && thuNhapChiuThue <= 210000000) {
    //     tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + (thuNhapNam - 120000000) * 0.15;
    // } else if (thuNhapNam > 210000000 && thuNhapChiuThue <= 384000000) {
    //     tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapNam - 210000000) * 0.2;
    // } else if (thuNhapNam > 384000000 && thuNhapChiuThue <= 624000000) {
    //     tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapNam - 384000000) * 0.25;
    // } else if (thuNhapNam > 624000000 && thuNhapChiuThue <= 960000000) {
    //     tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapNam - 624000000) * 0.3;
    // } else if (thuNhapNam > 960000000) {
    //     tienThue = chiuThueMuc1 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapNam - 624000000) * 0.5;
    // } else {
    //     tienThue = 0;
    // }
    //Cách 2: gọi các hàm tính thuế theo từng mức
    if (thuNhapNam <= MUC_TN_1 && thuNhapNam > 0) {
        tienThue = tienThueMuc1(thuNhapNam, soNguoiPhuThuoc, THUE_MUC_1);
    } else if (thuNhapNam > MUC_TN_1 && thuNhapNam <= MUC_TN_2) {
        tienThue = tienThueMuc2(thuNhapNam, soNguoiPhuThuoc, THUE_MUC_2);
    } else if (thuNhapNam > MUC_TN_2 && thuNhapNam <= MUC_TN_3) {
        tienThue = tienThueMuc3(thuNhapNam, soNguoiPhuThuoc, THUE_MUC_3);
    } else if (thuNhapNam > MUC_TN_3 && thuNhapNam <= MUC_TN_4) {
        tienThue = tienThueMuc4(thuNhapNam, soNguoiPhuThuoc, THUE_MUC_4);
    } else if (thuNhapNam > MUC_TN_4 && thuNhapNam <= MUC_TN_5) {
        tienThue = tienThueMuc5(thuNhapNam, soNguoiPhuThuoc, THUE_MUC_5);
    } else if (thuNhapNam > MUC_TN_5 && thuNhapNam <= MUC_TN_6) {
        tienThue = tienThueMuc6(thuNhapNam, soNguoiPhuThuoc, THUE_MUC_6);
    } else if (thuNhapNam > MUC_TN_6) {
        tienThue = tienThueMuc7(thuNhapNam, soNguoiPhuThuoc, THUE_MUC_7);
    } else {
        tienThue = 0;
    }

    return tienThue;
}

//DOM tới nút tính thuế TNCN
document.getElementById('btnTinhThue').onclick = function () {
    let hoTen = document.getElementById('fullName').value;
    let tongThuNhapNam = document.getElementById('tongThuNhap').value * 1;
    let soNguoiPT = document.getElementById('soNguoiPhuThuoc').value * 1;

    let tienThueTNCN = tinhThueTNCN(hoTen, tongThuNhapNam, soNguoiPT);

    let pTienThue = document.getElementById('pTienThue');
    pTienThue.innerHTML = `Tiền thuế thu nhập cá nhân của ${hoTen} là: ${tienThueTNCN.toLocaleString()} VNĐ`;
    pTienThue.classList.add('styleKQ');
}
