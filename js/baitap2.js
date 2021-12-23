// input

// Cho người dùng nhập 5 số thực

/**
 * Bước 1 : Tạo biến a , b , c , d , e  , average
 * Bước 2 : In thông báo nhập a , b , c , d , e là số thực
 * Bước 3 : Cho người dùng nhập a , b , c , d , e là số thực
 * Bước 4 : Dùng thuật toán trung bình cộng ( a + b + c + d + e ) chia cho 5
 */

// output

// Xuất két quả ra màn hình

var so1El = document.getElementById("inn1");
var so2El = document.getElementById("inn2");
var so3El = document.getElementById("inn3");
var so4El = document.getElementById("inn4");
var so5El = document.getElementById("inn5");

var thongbao2El = document.getElementById("thongbao2");

function trungbinh() {
  var so1 = so1El.value * 1;
  var so2 = so2El.value * 1;
  var so3 = so3El.value * 1;
  var so4 = so4El.value * 1;
  var so5 = so5El.value * 1;

  var trungbinh = (so1 + so2 + so3 + so4 + so5) / 5;
  thongbao2El.innerText = "Trung bình 5 số thực là :" + trungbinh;
}
