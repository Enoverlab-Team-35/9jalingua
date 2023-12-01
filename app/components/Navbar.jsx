"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
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
                    <button
                        onClick={() => setIsVisible(true)}
                        className='sm:hidden p-2'
                    >
                        <HiMenu color='black' size={32} />
                    </button>
                </div>
            </nav>

            <div className={`${isVisible ? "w-full px-5" : "w-0 px-0"} sm:hidden fixed top-0 right-0 h-screen bg-white transition-all py-5 overflow-hidden`}>
                <div className='flex justify-between items-center gap-10 font-arimo'>
                    <Link
                        href={'/'}
                        className="flex items-center gap-4 font-arimo"
                    >
                        <Image
                            src={'/9jalingua/green.svg'}
                            width={31}
                            height={35}
                            alt='9jaLingua'
                        />
                        <span className="text-[32px] font-bold text-blues-1100">9jaLingua</span>
                    </Link>
                    <button
                        onClick={() => setIsVisible(false)}
                        className='sm:hidden p-2'
                    >
                        <HiMenu color='black' size={32} />
                    </button>
                </div>

                <ul className='mt-20 flex flex-col justify-center items-center gap-16'>
                    <li><Link
                        href={'/cultural-resources'}
                        className='px-8 py-4 text-grays-600 text-xl font-inter font-medium'
                    >
                        Cultural Resources
                    </Link></li>
                    <li><Link
                        href={'/login'}
                        className='px-8 py-4 text-white text-xl font-inter rounded-lg bg-greens-300 font-bold'
                    >
                        Log In
                    </Link></li>
                </ul>
            </div>
        </>
    )
}
