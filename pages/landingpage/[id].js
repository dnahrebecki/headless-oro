import Link from 'next/link'
import * as React from "react";
import {useRouter} from 'next/router'

export default function LandingPage() {
    const [page, setPage] = React.useState([])
    const router = useRouter() // router.query.id

    return (
        <div>
            {page && page.attributes ? (
                <div>
                    <div>
                        <h1>
                            <span>
                              {page.attributes.title}
                            </span>
                        </h1>

                        <div dangerouslySetInnerHTML={{__html: page.attributes.content}} ></div>
                    </div>

                    <Link href="/landingpage"><a>Back</a></Link>
                </div>
            ) : (
                <div>
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