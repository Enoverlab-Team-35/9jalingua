"use client"

import Image from 'next/image'
import { HiMenu } from "react-icons/hi";
import React, { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../context';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardNavbar() {
    const pathname = usePathname();
    const { setSidebarVisible, selectedLanguage } = useAppContext()
    const [currentLanguage, setCurrentLanguage] = useState(selectedLanguage[0] || "Yoruba")
    const [isLanguageVisible, setIsLanguageVisible] = useState(false)
    const languageRef = useRef()

    const handleClickOutside = (event) => {
        if (languageRef.current && !languageRef.current.contains(event.target)) {
            setIsLanguageVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [])

    return (
        <nav>
            <div className='flex gap-10 justify-between items-center font-arimo'>
                <div className='flex items-center gap-4'>
                    {/* Hamburger BTN */}
                    <button
                        onClick={() => setSidebarVisible(true)}
                        className='lg:hidden'
                    >
                        <HiMenu color='black' size={32} />
                    </button>

                    <div className='relative'>
                        {pathname.toLowerCase() === '/community-forum' ? (
                            <button
                                className='flex items-center border gap-2 rounded-lg border-grays-500 py-3 px-6 font-bold'
                            >
                                Categories
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsLanguageVisible(!isLanguageVisible)}
                                className='flex items-center border gap-2 rounded-lg border-grays-500 py-3 px-6 font-bold'
                            >
                                {currentLanguage}
                                <Image
                                    src={'/svgs/chevron-down-black.svg'}
                                    width={20}
                                    height={20}
                                    alt='drop down'
                                />
                            </button>
                        )}

                        {/* Language Dropdown */}
                        <div
                            ref={languageRef}
                            className={`${isLanguageVisible ? 'h-auto py-4 shadow-lg border border-grays-200' : 'h-0'} absolute mt-2 bg-white rounded-lg w-[195px] transition-all overflow-hidden`}
                        >
                            <div className='grid gap-2 px-2'>
                                {selectedLanguage?.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentLanguage(item)}
                                        className={`px-3 py-2 rounded font-bold text-grays-900 text-left font-arimo hover:bg-blues-900 hover:text-white ${item === currentLanguage && 'bg-blues-1100 hover:bg-blues-1100 text-white'}`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                            <div className='h-[1.25px] w-[150px] bg-[#0D0D0D4D] mt-4 mx-2 rounded-full'></div>
                            <div className='my-4 px-5'>
                                <Link
                                    href={'/select-language'}
                                    className='text-grays-700 font-bold flex items-center gap-4'
                                >
                                    <span>Add Language</span>
                                    <Image
                                        src={'/svgs/plus.svg'}
                                        width={18}
                                        height={18}
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex gap-2 items-center'>
                    <Image
                        src={'/svgs/Flame.svg'}
                        width={24}
                        height={24}
                        alt='drop down'
                    />
                    <span className='font-bold'>
                        0
                    </span>
                </div>
            </div>
        </nav>
    )
}
