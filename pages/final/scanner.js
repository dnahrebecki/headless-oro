import {Html5QrcodeScanner} from "html5-qrcode"
import * as React from "react";
import ApiGateway from "../../components/ApiGateway";
import Configuration from '../../components/Configuration';

export default function Scanner() {
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
        <div className="bg-white">
            <div>
                <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
                    <div className="border-b border-gray-200 pt-24 pb-10">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">New Arrivals</h1>
                        <p className="mt-4 text-base text-gray-500">
                            Looking for a comfortable designer medical uniform? Look no further!
                        </p>
                    </div>

                    <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                        <aside>
                            <div className="lg:block">
                                <div>
                                    <div className="block text-sm font-medium text-gray-900">Barcodes</div>
                                </div>
                                {barcodes.map((barcode, key) => (
                                    <div key={key} className="pt-6 space-y-3">
                                        <p className="ml-3 text-sm text-gray-600">{barcode}</p>
                                    </div>
                                ))}
                                <div id="reader" className="mt-6 w-full rounded-md shadow-sm"></div>
                            </div>
                        </aside>

                        <section aria-labelledby="product-heading" className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
                            <h2 id="product-heading" className="sr-only">
                                Products
                            </h2>

                            <div
                                className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                                    >
                                        <div
                                            className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                                            {product.attributes.images[0] ? (
                                                <img
                                                    src={`${Configuration().BASE_API_URL}${product.attributes.images[0].url}`}
                                                    alt={product.attributes.name}
                                                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                                                />
                                            ) : ''}
                                        </div>
                                        <div className="flex-1 p-4 space-y-2 flex flex-col">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                <span aria-hidden="true" className="absolute inset-0"/>
                                                {product.attributes.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">{product.attributes.shortDescription.substring(0, 150)}...</p>
                                            <div className="flex-1 flex flex-col justify-end">
                                                <p className="text-sm italic text-gray-500">{product.options}</p>
                                                {product.attributes.minimalPrices[0] ? (
                                                    <p className="text-base font-medium text-gray-900">
                                                        ${parseFloat(product.attributes.minimalPrices[0]['price']).toFixed(2)}
                                                    </p>
                                                ) : ''}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}