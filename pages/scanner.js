import Link from 'next/link'
import {Html5QrcodeScanner} from "html5-qrcode"
import * as React from "react";

export default function LandingPage() {
    const [barcodes, setBarcodes] = React.useState([])

    function onScanSuccess(decodedText, decodedResult) {
        setBarcodes((prevBarcodes) => {
            if (!prevBarcodes.includes(decodedText)) {
                return [...prevBarcodes, decodedText];
            }

            return prevBarcodes;
        })
    }

    React.useEffect(() => {
        const html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            {fps: 10, qrbox: {width: 250, height: 200}},
            /* verbose= */ false);
        html5QrcodeScanner.render(onScanSuccess);
    }, [])

    return (
        <>
            <h1>Barcode Scanner</h1>
            {barcodes.map((barcode, key) => (
                <div key={key}>
                    <p>{barcode}</p>
                </div>
            ))}
            <div id="reader" width="600px"></div>
            <p>
                <Link href="/"><a>Back to home</a></Link>
            </p>
        </>
    )
}