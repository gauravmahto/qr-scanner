// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner } from "html5-qrcode";

// To use Html5Qrcode (more info below)
import { Html5Qrcode } from "html5-qrcode";

addEventListener('load', function () {

    console.log('scan.js loaded');

    const html5QrCode = new Html5Qrcode(/* element id */ "reader");

    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
        console.log(`Scan result: ${decodedText}`, decodedResult);

        document.querySelector('#result').innerHTML = decodedText;
    }

    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: { width: 400, height: 350 } }, false);
    html5QrcodeScanner.render(onScanSuccess);

}, false);
