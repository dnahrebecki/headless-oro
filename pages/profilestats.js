import Link from 'next/link'
import * as React from "react";

export default function ProfileStats() {
    const [profile, setProfile] = React.useState({});

    return (
        <>
            <h1>Profile stats</h1>
            {(profile) ? (
                <div>
                    <span>{profile.userFirstName}</span>
                </div>
            ) : ''}
        </>
    )
}