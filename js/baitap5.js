// input

// Số a có 2 chữ số ( VD : 23 , 55 , ...)
// 23 -> 2 + 3 = 5
// 55 -> 5 + 5 = 10

/**
 * Bước 1 : Tạo biến a , unit , ten , sum
 * Bước 2 : In thông báo nhập a
 * Bước 3 : Cho người dùng nhập vào a
 * Bước 4 : Tách số hàng đơn vị theo công thức unit=(n%10)
 * Bước 5 : Tách số hàng chục theo công thức unit=(n%100/10)
 * Bước 6 : Tính sum = unit + ten
 */

// output

// Xuất kêt quả ra màn hình

var nhapEl = document.getElementById("nhap");

var thongbao6El = document.getElementById("thongbao6");

function result() {
  var nhap = nhapEl.value * 1;
  var unit = nhap % 10;
  var ten = nhap / 10;
  ten = Math.floor(ten);
  var sum = unit + ten;
  thongbao6El.innerText = "Tổng 2 ký số vừa nhập là :" + sum;
}
