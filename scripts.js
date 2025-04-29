const inputValue = document.querySelector("#inputValue");
const btnValue = document.querySelector("#btnValue");
const imgQrCode = document.querySelector("#imgQrCode");
const wrapper = document.querySelector(".wrapper");
let valueDefault;

// https://goqr.me/api/ ---> Link do site da API para gerar QR Code
// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example ---> URL da API para gerar QR Code

btnValue.addEventListener("click", () => {
    let qrcodeValue = inputValue.value.trim(); // Pegar o valor digitado e remover os espaços em branco
    if (!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = "Gerando QR Code...";
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;
    imgQrCode.addEventListener("load", () => {
        wrapper.classList.add("active");
        btnValue.innerText = "Gerar QR Code";
    });
});