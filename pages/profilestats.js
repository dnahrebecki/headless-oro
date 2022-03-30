import Link from 'next/link'
import * as React from "react";
import ApiGateway from "../components/ApiGateway";

export default function ProfileStats() {
    const [profile, setProfile] = React.useState({});
    const apiGateway = new ApiGateway();

    React.useEffect(() => {
        fetchProfile();
    }, [])

    async function fetchProfile() {
        await apiGateway.getToken('AmandaRCole@example.org', 'AmandaRCole@example.org');

        const loadedData = await apiGateway.get('/api/profile');

        if (loadedData && loadedData.data) {
            console.log(loadedData.data[0].meta)
            setProfile(loadedData.data[0].meta);
        }
    }

    return (
        <>
            <h1>Profile with stats</h1>
            {(profile) ? (
                <div>
                    <div><span>ID: </span>{ profile.userId }</div>
                    <div><span>First name: </span>{ profile.userFirstName }</div>
                    <div><span>Last name: </span>{ profile.userLastName }</div>
                    <div><span>Email: </span>{ profile.userEmail }</div>
                    <div><span>Customer: </span>{ profile.userCustomerName }</div>
                    <div><span>Orders number: </span>{ profile.ordersNumber }</div>
                    <div><span>Orders total: </span>{ profile.ordersRevenue }</div>
                </div>
            ): ''}
            <p>
                <Link href="/"><a>Back to home</a></Link>
            </p>
        </>
    )
}