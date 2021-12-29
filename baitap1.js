var max;
var min;
var mid;
var thongbaoEl = document.getElementById("thongBao1");
function tinhSo() {
  var So1 = document.getElementById("nhapSo1").value * 1;
  var So2 = document.getElementById("nhapSo2").value * 1;
  var So3 = document.getElementById("nhapSo3").value * 1;
  
  if (So1 > So2) {
    max = So1;
    min = So2;
  } else {
    max = So2;
    min = So1;
  }
  mid = So3;
  if (min > So3) {
    mid = min;
    min = So3;
  }
  if (max < So3) {
    mid = max;
    max = So3;
  }
  thongbaoEl.innerText =
    "Dãy số theo thứ tự tăng dần là :" + min + "-->" + mid + "-->" + max;
}
