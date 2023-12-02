"use client"

import Image from 'next/image'
import { HiMenu } from "react-icons/hi";
import React from 'react'
import { useAppContext } from '../context';

export default function DashboardNavbar() {
    const { sidebarVisible, setSidebarVisible } = useAppContext()

    return (
        <nav>
            <div className='flex gap-10 justify-between items-center'>
                <div className='flex items-center gap-4'>
                    {/* Hamburger BTN */}
                    <button
                        onClick={() => setSidebarVisible(true)}
                        className='lg:hidden'
                    >
                        <HiMenu color='black' size={32} />
                    </button>

                    <button
                        className='flex items-center border gap-2 rounded-lg border-grays-500 py-3 px-6 font-bold'
                    >
                        Yoruba
                        <Image
                            src={'/svgs/chevron-down-black.svg'}
                            width={20}
                            height={20}
                            alt='drop down'
                        />
                    </button>
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
