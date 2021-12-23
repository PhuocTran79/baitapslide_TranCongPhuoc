// input

// Chiều dài , chiều rộng

/**
 * Bước 1 : Tạo biến dai , rong , chuvi , dientich
 * Bước 2 : Thông báo người dùng nhập dai , rong
 * Bước 3 : Cho người dùng nhập dai , rong
 * Bước 4 : Tính chu vi bằng chuvi = (dai + rong)*2
 * Bước 5 : Tính diện tích bằng dientich = dai * rong
 */

// output

// Xuất kết quả ra màn hình

var daiEl = document.getElementById("dai");
var rongEl = document.getElementById("rong");

var thongbao4El = document.getElementById("thongbao4");

function ketQua() {
  var dai = daiEl.value * 1;
  var rong = rongEl.value * 1;
  var chuvi = (dai + rong) * 2;
  var dientich = dai * rong;
  thongbao4El.innerText =
    "Chu vi hình chữ nhật là : " +
    chuvi +
    "   Diện tích hình chữ nhật là : " +
    dientich;
}
