let qrText=document.querySelector('#qr-text');
let sizes=document.querySelector('#sizes');
let generateBtn=document.querySelector('#generateBtn');
let downloadBtn=document.querySelector('#downloadBtn');
let qrContainer=document.querySelector('.qr-body');
let sizeValue=sizes.value;
 


generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    qrContainer.innerHTML='';
    generateQRCode();
});

let generateQRCode=(e)=>{
    new QRCode(qrContainer,{
        text:qrText.value,
        height:sizeValue,
        width:sizeValue,
        colorLight:'white',
        colorDark:'black',
    });
};