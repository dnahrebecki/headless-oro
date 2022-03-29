import Link from 'next/link'
import * as React from "react";
import ApiGateway from "../components/ApiGateway";

export default function LandingPages() {
    const [pages, setPages] = React.useState([])
    const apiGateway = new ApiGateway();

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
        <>
            <h1>Landing pages</h1>
            {pages.map((item, key) => (
                <div key={key}>
                    <p>{item.attributes.title} <Link href={`/landingpage/${item.id}`}><a>view</a></Link>  </p>
                </div>
            ))}
            <p>
                <Link href="/"><a>Back to home</a></Link>
            </p>
        </>
    )
}