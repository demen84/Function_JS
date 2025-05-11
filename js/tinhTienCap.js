/*
* Đầu vào:
    - Mã khách hàng; Loại khách hàng; Số kết nối, Số kênh cao cấp
* Xử lý:
    - Nếu loại khách hàng là Nhà dân thì ô Số kết nối sẽ disable; Else là Doanh nghiệp thì sẽ Enable để người dùng nhập vào
    - Nếu loại khách hàng là Nhà dân:
    Tổng hóa đơn = Phí xử lý hóa đơn 4.5$ + Phí dịch vụ cơ bản 20.5$ + Thuê bao kênh cao cấp 7.5$/kênh.
    - Nếu loại khách hàng là Doanh nghiệp:
    Tổng hóa đơn = Phí xử lý hóa đơn 15$ + Phí dịch vụ cơ bản (75$ với 10 kết nối đầu, từ kết nối thứ 11 là 5$/kết nối) + Thuê bao kênh cao cấp 50$/kênh.
* Đầu ra:
    - Số tiền hóa đơn của khách hàng
*/
//KHAI BÁO BIẾN HẰNG SỐ - CÁC LOẠI PHÍ NHÀ DÂN (ND)
const ND_PHI_XU_LY_HOA_DON = 4.5; //4.5$
const ND_PHI_DICH_VU_CO_BAN = 20.5; //20.5$
const ND_PHI_THUE_BAO_KENH_CAO_CAP = 7.5; //7.5$/kênh

//KHAI BÁO BIẾN HẰNG SỐ - CÁC LOẠI PHÍ DOANH NGHIỆP (DN)
const DN_PHI_XU_LY_HOA_DON = 15; //15$
const DN_PHI_DICH_VU_CO_BAN_10 = 75; //75$ VỚI 10 KẾT NỐI ĐẦU
const DN_PHI_DICH_VU_CO_BAN_11 = 5; //5$ VỚI MỖI KẾT NỐI TIEP THEO SAU
const DN_PHI_THUE_BAO_KENH_CAO_CAP = 50; //50$/kênh

const DN_MUC_KET_NOI_1 = 10; //10 kết nối đầu tiên

//HÀM TÍNH TIỀN CÁP KHÁCH HÀNG 'NHÀ DÂN'
function tinhTienCapNhaDan(soKenhCaoCap) {
    let tongTien = 0;
    if (soKenhCaoCap > 0) {
        //Tính tiền cáp cho khách hàng nhà dân
        tongTien = ND_PHI_XU_LY_HOA_DON + ND_PHI_DICH_VU_CO_BAN + (ND_PHI_THUE_BAO_KENH_CAO_CAP * soKenhCaoCap);
    } else {
        alert("Số kênh cao cấp không hợp lệ!");
        return 0;
    }
    return tongTien;
}

//HÀM TÍNH TIỀN CÁP KHÁCH HÀNG 'DOANH NGHIỆP'
function tinhTienCapDoanhNghiep(soKetNoi, soKenhCaoCap) {
    let tongTien = 0;
    //Tính tiền cáp cho khách hàng doanh nghiệp
    if (soKetNoi <= 0 || soKenhCaoCap <= 0) {
        alert("Số kết nối/Số kênh cao cấp không hợp lệ!");
        return 0;
    } else {
        if (soKetNoi <= DN_MUC_KET_NOI_1) {
            tongTien = DN_PHI_XU_LY_HOA_DON + DN_PHI_DICH_VU_CO_BAN_10 + (DN_PHI_THUE_BAO_KENH_CAO_CAP * soKenhCaoCap);
        } else {
            tongTien = DN_PHI_XU_LY_HOA_DON + (DN_PHI_DICH_VU_CO_BAN_10 + (DN_PHI_DICH_VU_CO_BAN_11 * (soKetNoi - DN_MUC_KET_NOI_1))) + (DN_PHI_THUE_BAO_KENH_CAO_CAP * soKenhCaoCap);
        }
    }
    return tongTien;
}


//Hàm tính tiền cáp
function tinhTienCap(custId, custType, soKetnoi, soKenh) {
    let tongTien = 0;
    switch (custType) {
        case '01': {
            // tongTien = 4.5 + 20.5 + 7.5 * soKenh;
            tongTien = tinhTienCapNhaDan(soKenh);
        }; break;
        case '02': {
            // if (soKetnoi <= 10) {
            //     tongTien = 15 + 75 + 50 * soKenh;
            // } else {
            //     tongTien = 15 + (75 + 5 * (soKetnoi - 10)) + 50 * soKenh;
            // }
            tongTien = tinhTienCapDoanhNghiep(soKetnoi, soKenh);
        }; break;
    }

    return tongTien;
}


//Xử lý sự kiện thay đổi loại khách hàng (sự kiện onchange tại ô select)
document.getElementById('custType').onchange = function () {
    let custType = document.getElementById('custType').value;
    let soKetnoi = document.getElementById('soKetNoi');
    let lblSoKetnoi = document.getElementById('lblSoKetNoi');
    if (custType === '01') {
        // soKetnoi.disabled=true;
        soKetnoi.style.display = 'none'; //Ẩn ô nhập số kết nối
        lblSoKetnoi.style.display = 'none'; //Ẩn nhãn số kết nối
    } else {
        // soKetnoi.disabled=false;
        soKetnoi.style.display = "inline"; //Hiện ô nhập số kết nối
        lblSoKetnoi.style.display = "inline"; //Hiện nhãn số kết nối
    }
}

//DOM toi nut tinh tien cap
document.getElementById('btnTinhTienCap').onclick = function (e) {
    e.preventDefault();
    // alert('OK nha');
    let maKH = document.getElementById('custID').value;
    let loaiKH = document.getElementById('custType').value;
    let soKetnoi = document.getElementById('soKetNoi').value * 1;
    let soKenh = document.getElementById('soKenhCaoCap').value * 1;

    let tienCap = tinhTienCap(maKH, loaiKH, soKetnoi, soKenh);

    let pTienCap = document.getElementById('pTienCap');
    pTienCap.innerHTML = `Tổng cước phí là: ${tienCap}$`;
    pTienCap.classList.add('styleKQ');
}