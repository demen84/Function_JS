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

//Hàm tính tiền cáp
function tinhTienCap(custId, custType, soKetnoi, soKenh){
    let tongTien = 0;
    switch (custType){
        case '01': {
            tongTien = 4.5 + 20.5 + 7.5 * soKenh;
        }; break;
        case '02': {
            if (soKetnoi <= 10) {
                tongTien = 15 + 75 + 50 * soKenh;
            } else {
                tongTien = 15 + (75 + 5 * (soKetnoi - 10)) + 50 * soKenh;
            }
        }; break;
    }

    return tongTien;
}

//DOM toi nut tinh tien cap
document.getElementById('btnTinhTienCap').onclick = function(e){
    e.preventDefault();
    // alert('OK nha');
    let maKH=document.getElementById('custID').value;
    let loaiKH=document.getElementById('custType').value;
    let soKetnoi=document.getElementById('soKetNoi').value * 1;
    let soKenh=document.getElementById('soKenhCaoCap').value * 1;

    //Gọi hàm tinh tiền cáp
    let tienCap = tinhTienCap(maKH, loaiKH, soKetnoi, soKenh);

    //Xử lý hiển thị kết quả
    let pTienCap = document.getElementById('pTienCap');
    pTienCap.innerHTML = `Tổng cước phí thuê bao cáp quang là: ${tienCap}$`;
    pTienCap.classList.add('styleKQ');
}

//Xử lý sự kiện onchange cho ô loại khách hàng
//Khi người dùng chọn loại khách hàng là Doanh nghiệp thì ô Số kết nối sẽ Enable để người dùng nhập vào
//Ngược lại nếu chọn là Nhà dân thì ô Số kết nối sẽ disable
document.getElementById('custType').onchange = function(){
    let custType=document.getElementById('custType').value;
    let soKetnoi=document.getElementById('soKetNoi');
    if (custType==1){
        soKetnoi.disabled=true;
    } else {
        soKetnoi.disabled=false;
    }
}
