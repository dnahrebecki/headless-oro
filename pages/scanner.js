import Link from 'next/link'
import {Html5QrcodeScanner} from "html5-qrcode"
import * as React from "react";
import Image from 'next/image'
import ApiGateway from "../components/ApiGateway";
import config from '../config/configuration.json'

export default function LandingPage() {
    const [barcodes, setBarcodes] = React.useState([])
    const [products, setProducts] = React.useState([])
    const apiGateway = new ApiGateway();

    function onScanSuccess(decodedText, decodedResult) {
        fetchProducts(decodedText);
        setBarcodes((prevBarcodes) => {
            if (!prevBarcodes.includes(decodedText)) {
                return [...prevBarcodes, decodedText];
            }

            return prevBarcodes;
        })
    }

    async function fetchProducts(searchTerm = '') {
        await apiGateway.getToken('guest', 'guest');

        const loadedData = await apiGateway.get(`/api/productsearch?filter[searchQuery]=allText+~+"${searchTerm}"&page[number]=1&page[size]=10&sort=relevance`);

        if (loadedData && loadedData.data) {
            console.log(loadedData.data);
            setProducts(loadedData.data);
        }
    }

    React.useEffect(() => {
        const html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            {fps: 10, qrbox: {width: 250, height: 200}},
            /* verbose= */ false);
        html5QrcodeScanner.render(onScanSuccess);

        fetchProducts();
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

            {products.map((product, key) => (
                <div key={key}>
                    <div>
                        {product.attributes.images[0] ? (
                            <Image
                                src={`${config.BASE_API_URL}${product.attributes.images[0].url}`}
                                width={100}
                                height={100}
                            ></Image>
                        ) : ''}
                        <span>{product.attributes.name} ({product.attributes.sku})</span>
                        <a href="#">Add to list</a>
                    </div>
                </div>
            ))}
            <p>
                <Link href="/"><a>Back to home</a></Link>
            </p>
        </>
    )
}