import Link from 'next/link'
import * as React from "react";

export default function Profile() {
    const [profile, setProfile] = React.useState({});

    return (
        <>
            <h1>Profile</h1>
            {(profile && profile.attributes) ? (
                <div>
                    <span>{profile.attributes.firstName}</span>
                </div>
            ) : ''}
        </>
    )
}