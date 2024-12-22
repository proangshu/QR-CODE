// script.js
function generateQRCode() {
    const qrText = document.getElementById('qrText').value;
    const qrcodeContainer = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    if (!qrText.trim()) {
        alert('Please enter a valid text or URL');
        return;
    }

    // Generate QR code
    const qrCode = new QRCode(qrcodeContainer, {
        text: qrText,
        width: 200,
        height: 200,
    });

    // Show the download button after generating QR code
    downloadBtn.style.display = 'block';
}

function downloadQRCode() {
    const qrCodeElement = document.querySelector('#qrcode img');
    if (!qrCodeElement) {
        alert('Please generate a QR code first');
        return;
    }

    // Create an anchor element to download the QR code
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeElement.src;
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
}
