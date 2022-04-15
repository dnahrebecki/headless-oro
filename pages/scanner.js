import {Html5QrcodeScanner} from "html5-qrcode"
import * as React from "react";

export default function Scanner() {
    const [barcodes, setBarcodes] = React.useState([])
    const [products, setProducts] = React.useState([])

    return (
        <div>
            <h1>Scanner</h1>
            {barcodes.map((barcode, key) => (
                <div key={key} >
                    <p>{barcode}</p>
                </div>
            ))}

            {products.map((product) => (
                <div key={product.id}>
                    <span>{product.attributes.name}</span>
                </div>
            ))}
        </div>
    )
}