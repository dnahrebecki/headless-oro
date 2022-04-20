import Head from 'next/head'
import Link from 'next/link'
import Configuration from "./../components/Configuration";
import * as React from "react";

export default function Home() {
    const final = Configuration().FINAL;

    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                        Welcome to <a className="text-indigo-600" href="https://oroinc.com/">Oro Tech Talks #2!</a>
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        See the examples of the headless use cases below.
                    </p>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Code repository can be found <a className="text-indigo-600"
                                                        href="https://github.com/dnahrebecki/headless-oro">here</a>
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover"
                                 src="https://images.unsplash.com/photo-1584824486516-0555a07fc511?w=305&fit=crop" alt="" />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link href={final ? '/final/landingpage' : '/landingpage'}>
                                    <a className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">Landing Page</p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Content Editors use external tool for synchronizing pages to ORO and data is
                                            available via LandingPage API for buyers.
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover"
                                 src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=305&fit=crop" alt="" />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link href={final ? '/final/scanner' : '/scanner'}>
                                    <a className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">Barcode Scan</p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Grocery shops use barcode scanning app to scan products and automatically
                                            purchase them in recurring orders.
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover"
                                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=focalpoint&fit=crop&fp-y=.25&w=305&h=305" alt="" />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link href={final ? '/final/profile' : '/profile'}>
                                    <a className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">Profile</p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Buyers are able to view and edit their profiles. We'll learn here how to customer user context in API.
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover"
                                 src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=305&fit=crop" alt="" />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link href={final ? '/final/profilestats' : '/profilestats'}>
                                    <a className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">PageModel API</p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Learn how to facilitate custom API models to build endpoints exposing all the needed information for a page.
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
