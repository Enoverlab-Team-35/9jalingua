import Image from 'next/image'
import React from 'react'

export default function DashboardNavbar() {
    return (
        <nav>
            <div className='flex gap-10 justify-between items-center'>
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
