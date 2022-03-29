import Link from 'next/link'
import * as React from "react";
import ApiGateway from "../../components/ApiGateway";
import { useRouter } from 'next/router'

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
        <>
            {page && page.attributes ? (
                <div>
                    <h1>{page.attributes.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: page.attributes.content}} ></div>
                </div>
            ) : ''}
            <p>
                <Link href="/landingpage"><a>Back</a></Link>
            </p>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}