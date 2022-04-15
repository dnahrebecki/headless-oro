import Link from 'next/link'
import * as React from "react";
import ApiGateway from "../../components/ApiGateway";
import ProfileView from "../../components/pages/ProfileView";

export default function Profile() {
    const [profile, setProfile] = React.useState({});
    const apiGateway = new ApiGateway();

    React.useEffect(() => {
        fetchProfile();
    }, [])

    async function fetchProfile() {
        await apiGateway.getToken('AmandaRCole@example.org', 'AmandaRCole@example.org');

        const loadedData = await apiGateway.get('/api/customerusers/mine');

        if (loadedData && loadedData.data) {
            setProfile(loadedData.data);
        }
    }

    return (
        <>
            {(profile && profile.attributes) ? (
                <ProfileView
                    profileData={profile.attributes}
                    profileAttr={[
                        {label: 'First Name', value: profile.attributes.firstName},
                        {label: 'Last Name', value: profile.attributes.lastName},
                        {label: 'Email', value: profile.attributes.email},
                        {label: 'Birthday', value: profile.attributes.birthday ?? 'n/a'},
                    ]}
                />
            ) : ''}
        </>
    )
}