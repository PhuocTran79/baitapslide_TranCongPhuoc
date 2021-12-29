var thongbao3El = document.getElementById("thongBao3");

var so1El = document.getElementById("nhap1");
var so2El = document.getElementById("nhap2");
var so3El = document.getElementById("nhap3");

function xuatSo() {
  var So1 = so1El.value * 1;
  var So2 = so2El.value * 1;
  var So3 = so3El.value * 1;
  var soChan = 0;
  var soLe = 0;
  

  if (So1 % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }

  if (So2 % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }
  if (So3 % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }
  thongbao3El.innerText =
    "Có   " + soChan + " số chẵn" + "----" + "Có   " + soLe + " số lẻ";
}
