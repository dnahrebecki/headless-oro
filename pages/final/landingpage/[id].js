import Link from 'next/link'
import * as React from "react";
import ApiGateway from "../../../components/ApiGateway";
import {useRouter} from 'next/router'

export default function LandingPage() {
    const [page, setPage] = React.useState([])
    const apiGateway = new ApiGateway();
    const router = useRouter()

    React.useEffect(() => {
        fetchPage(router.query.id);
    }, [])

    async function fetchPage(id) {
        if (!id) {
            return;
        }

        await apiGateway.getToken('guest', 'guest');
        const loadedData = await apiGateway.get(`/api/landingpages/${id}`);

        if (loadedData && loadedData.data) {
            setPage(loadedData.data);
        }
    }

    return (
        <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
                    </svg>
                </div>
            </div>

            {/* PAGE CONTENT BELOW */}
            {page && page.attributes ? (
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span
                                className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                              {page.attributes.title}
                            </span>
                        </h1>
                    </div>

                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                        <div dangerouslySetInnerHTML={{__html: page.attributes.content}} ></div>
                    </div>

                    <Link href="/landingpage"><a>Back</a></Link>
                </div>
            ) : (
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <Link href="/landingpage"><a>Back</a></Link>
                </div>
            )}
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}