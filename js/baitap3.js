// input

// Cho người dùng nhập số tiền muốn quy đổi

/**
 * Bước 1 : Tạo biến usd và i
 * Bước 2 : Thông báo người dùng nhập usd
 * Bước 3 : Cho người dùng nhập usd
 * Bước 4 : Cho i = 23.500
 * Bước 5 : Tính kết quả dùng usd*i
 */

// output

// Xuất kết quả ra màn hình

var usdEl = document.getElementById("usd");
var thongbao3El = document.getElementById("thongbao3");

function ketqua() {
  var usd = usdEl.value * 1;
  var result = usd * 23500;
  thongbao3El.innerText = "Số tiền quy đổi sang VND là : " + result;
}
