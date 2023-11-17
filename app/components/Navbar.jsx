import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
                    />
                    <span className="text-4xl font-bold text-blues-1100">9jaLingua</span>
                </Link>
                {/* Buttons */}
                <div className="flex items-center gap-10">
                    <button className="text-grays-600 text-xl font-inter">
                        Cultural Resources
                    </button>
                    <Link
                        href={'/login'}
                        className="rounded-lg px-8 py-4 bg-greens-300 text-white text-xl font-arimo"
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </nav>
    )
}
