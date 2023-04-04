let qrText=document.querySelector('#qr-text');
let sizes=document.querySelector('#sizes');
let generateBtn=document.querySelector('#generateBtn');
let downloadBtn=document.querySelector('#downloadBtn');
let qrContainer=document.querySelector('.qr-body');
let sizeValue=sizes.value;
 
let generateQRCode=(e)=>{
    qrContainer.innerHTML='';
    new QRCode(qrContainer,{
        text:qrText.value,
        height:sizeValue,
        width:sizeValue,
        colorLight:'white',
        colorDark:'black',
    });
};

let checkEmptyQRText=()=>{
    qrText.value.length>0 ? generateQRCode() :alert('Enter the Text or URL to generate the QR Code');
}

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    checkEmptyQRText();
});

sizes.addEventListener('change',(e)=>{
    sizeValue=e.target.value;
    checkEmptyQRText();
});

downloadBtn.addEventListener('click',(e)=>{
    let img=document.querySelector('.qr-body img');
    if(img!==null){
        downloadBtn.setAttribute('download','QR Code.png')
        let imgAttr=img.getAttribute('src');
        downloadBtn.setAttribute('href',imgAttr);
    }
    else{
        downloadBtn.removeAttribute('download')
        alert('Before Download, Please Generate the QR Code');
    }
        
});
