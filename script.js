let imgBox = document.getElementById("imgBox");
let qrimg = document.getElementById("qrimg");
let qrText = document.getElementById("qrText");

function qrmake() {
  qrimg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
}
