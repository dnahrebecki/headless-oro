import Link from 'next/link'
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}