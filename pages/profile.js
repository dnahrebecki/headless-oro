import Link from 'next/link'
import * as React from "react";
import ApiGateway from "../components/ApiGateway";

export default function LandingPage() {
    const [profile, setProfile] = React.useState({});
    const apiGateway = new ApiGateway();

    React.useEffect(() => {
        fetchProfile();
    }, [])

    async function fetchProfile() {
        await apiGateway.getToken('AmandaRCole@example.org', 'AmandaRCole@example.org');

        const loadedData = await apiGateway.get('/api/customerusers/mine');

        if (loadedData && loadedData.data) {
            console.log(loadedData.data)
            setProfile(loadedData.data);
        }
    }

    return (
        <>
            <h1>Profile (mine)</h1>
            {(profile && profile.attributes) ? (
                <div>
                    <div><span>First name: </span>{ profile.attributes.firstName }</div>
                    <div><span>Last name: </span>{ profile.attributes.lastName }</div>
                    <div><span>Email: </span>{ profile.attributes.email }</div>
                </div>
            ): ''}
            <p>
                <Link href="/"><a>Back to home</a></Link>
            </p>
        </>
    )
}