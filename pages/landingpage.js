import Link from 'next/link'
import * as React from "react";
import _ from 'underscore'
import ApiGateway from "../components/ApiGateway";

export default function LandingPages() {
    const [pages, setPages] = React.useState([])
    const apiGateway = new ApiGateway();
    const pageImagesUrl = [
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
    ];

    React.useEffect(() => {
        fetchPages();
    }, [])

    async function fetchPages() {
        await apiGateway.getToken('guest', 'guest');

        const loadedData = await apiGateway.get('/api/landingpages');

        if (loadedData && loadedData.data) {
            setPages(loadedData.data);
        }
    }

    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Landing Pages</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Build your custom blog using Oro Landing Page API
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {pages.map((page) => (
                        <div key={page.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={_.sample(pageImagesUrl)} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <Link href={`/landingpage/${page.id}`}>
                                        <a className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">{page.attributes.title}</p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}