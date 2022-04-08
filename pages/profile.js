import Link from 'next/link'
import * as React from "react";
import ApiGateway from "../components/ApiGateway";

export default function Profile() {
    const [profile, setProfile] = React.useState({});
    const apiGateway = new ApiGateway();
    const profileImageUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80';
    const coverImageUrl = 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

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
        <div className="h-full flex">
            {(profile && profile.attributes) ? (
                <div className="flex-1 relative z-0 flex overflow-hidden">
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                        <article>
                            {/* Profile header */}
                            <div>
                                <div>
                                    <img className="h-32 w-full object-cover lg:h-48" src={coverImageUrl} alt=""/>
                                </div>
                                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                        <div className="flex">
                                            <img
                                                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                src={profileImageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                            <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                <h1 className="text-2xl font-bold text-gray-900 truncate">
                                                    {`${profile.attributes.firstName} ${profile.attributes.lastName}`}
                                                </h1>
                                            </div>
                                            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                        <h1 className="text-2xl font-bold text-gray-900 truncate">{`${profile.attributes.firstName} ${profile.attributes.lastName}`}</h1>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="mt-6 sm:mt-2 2xl:mt-5">
                                <div className="border-b border-gray-200">
                                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                            <a
                                                href='#'
                                                className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                                                aria-current='page'
                                            >
                                                Profile
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            {/* Description list */}
                            <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">First Name</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{profile.attributes.firstName}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Last Name</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{profile.attributes.lastName}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{profile.attributes.email}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Birthday</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{profile.attributes.birthday ?? 'n/a'}</dd>
                                    </div>
                                </dl>
                            </div>
                        </article>
                    </main>
                </div>
            ) : ''}
        </div>
    )
}