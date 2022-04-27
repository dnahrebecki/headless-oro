import Link from 'next/link'
import * as React from "react";

export default function LandingPages() {
    const [pages, setPages] = React.useState([])

    return (
        <div>
            <h1>Landing pages</h1>
            <div>
                {pages.map((page) => (
                    <div key={page.id}>
                        <span>{page.attributes.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}