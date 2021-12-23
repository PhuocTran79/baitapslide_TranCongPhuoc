// input

// người dùng nhập số ngày làm

/**
 * Bước 1 : Tạo biến daywork , price1day
 * Bước 2 : In thông báo nhập daywork
 * Bước 3 : Cho người dùng nhập daywork
 * Bước 4 : Cho price1day = 100.000
 * Bước 5 : Dùng dayowrk*price1day ra ngày lương nhân viên
 */

// output

// Xuất ra màn hình tiền lương nhân viên

var dayworkEl = document.getElementById("daywork");
var thongbao1El = document.getElementById("thongbao1");

function result() {
  var dayWork = dayworkEl.value * 1;
  var tienluong = dayWork * 100000;
  console.log(tienluong);
  thongbao1El.innerText = "Tiền lương của bạn là " + tienluong +  "  VND";
}
