import Link from 'next/link'
import * as React from "react";
import ApiGateway from "../components/ApiGateway";
import ProfileView from "../components/pages/ProfileView";

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
            setProfile(loadedData.data[0].meta);
        }
    }

    return (
        <>
            {(profile) ? (
                <ProfileView
                    profileData={{firstName: profile.userFirstName, lastName: profile.userLastName}}
                    profileAttr={[
                        {label: 'First Name', value: profile.userFirstName},
                        {label: 'Last Name', value: profile.userLastName},
                        {label: 'Email', value: profile.userEmail},
                        {label: 'Customer', value: profile.userCustomerName},
                        {label: 'Orders number', value: profile.ordersNumber},
                        {label: 'Orders total', value: `$${profile.ordersRevenue}`}
                    ]}
                />
            ) : ''}
        </>
    )
}