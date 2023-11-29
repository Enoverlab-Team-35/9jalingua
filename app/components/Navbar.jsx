import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
    return (
        <nav>
            <div className="container mx-auto flex items-center justify-between p-5 gap-10">
                {/* logo */}
                <Link
                    href={'/'}
                    className="flex items-center gap-4 font-arimo"
                >
                    <Image
                        src={'/9jalingua/green.svg'}
                        width={38}
                        height={43}
                        alt='9jaLingua'
                    />
                    <span className="text-4xl font-bold text-blues-1100">9jaLingua</span>
                </Link>
                {/* Buttons */}
                <div className="hidden sm:flex items-center gap-10">
                    <Link
                        href={'/cultural-resources'}
                        className="text-grays-600 text-xl font-inter"
                    >
                        Cultural Resources
                    </Link>
                    <Link
                        href={'/login'}
                        className="rounded-lg px-8 py-4 bg-greens-300 text-white text-xl font-arimo"
                    >
                        Log In
                    </Link>
                </div>

                {/* Hamburger BTN */}
                <button className='sm:hidden bg-greens-300 rounded-lg p-2'>
                    <HiMenu color='white' size={32} />
                </button>
            </div>
        </nav>
    )
}
