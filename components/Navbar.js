import Link from 'next/link'
import {Toggle} from "react-toggle-component";
import styled from "styled-components";
import {useSolution} from "../contexts/solution";

export default function Navbar() {
    const {toggle} = useSolution();

    return (
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div>
                <Link href="/">
                    <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                    />
                </Link>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <div className="flex space-x-10">
                    <Link href="/">
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </a>
                    </Link>
                </div>

                <div className="flex space-x-10">
                    <span className="text-gray-500 ">Show solution</span>
                    <Toggle name="final-switch" onToggle={(e) => {toggle(e.target.checked)}}/>
                </div>
            </div>
        </div>
    )
}