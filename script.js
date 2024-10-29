let imgBox = document.getElementById("imgBox");
let qrimg = document.getElementById("qrimg");
let qrText = document.getElementById("qrText");
let codeType = "qr";

function toggleCodeType() {
  codeType = codeType === "qr" ? "barcode" : "qr";
  document.querySelector("button[onclick='toggleCodeType()']").innerText =
    codeType === "qr" ? "Switch to Barcode" : "Switch to QR Code";
  qrmake();
}

function qrmake() {
  const text = qrText.value;
  if (codeType === "qr") {
    //  QR Code
    qrimg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(text);
  } else {
    // Barcode
    qrimg.src =
      "https://quickchart.io/barcode?type=upca&text=12345678900&includeText=true&rotate=R" +
      encodeURIComponent(text) +
      "&size=150";
  }
}
