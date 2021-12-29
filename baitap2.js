var Thongbao2El = document.getElementById("thongBao2");

function chonLua() {
  var char = document.getElementById("w3-select").value;

  switch (char) {
    case "1":
      Thongbao2El.innerText = " Xin chào Bố";
      break;
    case "2":
      Thongbao2El.innerText = " Xin chào Mẹ";
      break;
    case "3":
      Thongbao2El.innerText = " Xin chào Anh Trai";
      break;
    default:
      Thongbao2El.innerText = " Xin chào Em Gái";
  }
}
