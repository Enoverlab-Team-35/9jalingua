"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <nav className='fixed top-0 left-0 w-full bg-white z-30 shadow-md'>
                <div className="container mx-auto flex items-center justify-between py-5 px-2 gap-10">
                    {/* logo */}
                    <Link
                        href={'/'}
                        className="flex items-center gap-4 font-arimo"
                        data-aos="fade-right"
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
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            Cultural Resources
                        </Link>
                        <Link
                            href={'/login'}
                            className="rounded-lg px-8 py-4 bg-greens-300 text-white text-xl font-arimo"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            Log In
                        </Link>
                    </div>

                    {/* Hamburger BTN */}
                    <button
                        onClick={() => setIsVisible(!isVisible)}
                        className='sm:hidden p-2' 
                        data-aos="fade-left"
                    >
                        {isVisible ? (
                            <IoClose color='black' size={32} />
                        ) : (
                            <HiMenu color='black' size={32} />
                        )}
                    </button>
                </div>
            </nav>

            <div className={`${isVisible ? "w-full px-5" : "w-0 px-0"} sm:hidden fixed top-0 right-0 h-screen bg-white transition-all py-5 z-[29] overflow-hidden`}>
                <ul className='mt-[168px] flex flex-col justify-center items-center gap-16' data-aos="fade-down">
                    <li data-aos="fade-left" data-aos-delay="100">
                        <Link
                        href={'/cultural-resources'}
                        className='px-8 py-4 text-grays-600 text-xl font-inter font-medium'
                        >
                            Cultural Resources
                        </Link>
                    </li>
                    <li data-aos="fade-left" data-aos-delay="200">
                        <Link
                        href={'/login'}
                        className='px-8 py-4 text-white text-xl font-inter rounded-lg bg-greens-300 font-bold'
                        >
                            Log In
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
