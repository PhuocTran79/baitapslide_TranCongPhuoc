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

var a , unit , ten , sum ;

a = 47 ;

unit = 47 % 10 ;

console.log({ unit });

ten = 47 / 10 ;

ten = Math.floor(ten) ;

console.log({ ten });

sum = unit + ten ;

console.log({ sum });