import Link from 'next/link'

export default function LandingPage() {
    return (
        <>
            <h1>Profile with stats</h1>
            <p>
                <Link href="/"><a>Back to home</a></Link>
            </p>
        </>
    )
}