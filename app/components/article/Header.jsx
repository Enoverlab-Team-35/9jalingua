import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <header className="bg-blues-100 px-5 py-20 lg:py-28">
            <div className="mx-auto container flex flex-col lg:flex-row lg:items-center justify-between gap-20 lg:gap-32">
                {/* Text */}
                <div className='max-w-[537px] w-full'>
                    <h1 className='font-bold font-arimo text-blues-1100 text-[40px] sm:text-[56px]'>
                        The Transformative Power of Learning Nigerian Languages
                    </h1>
                </div>
                {/* Image */}
                <div className='w-full lg:w-auto flex-auto'>
                    <Image
                        src={'/article/image10.svg'}
                        width={826}
                        height={551}
                        alt='William'
                        className='w-full rounded-lg object-center'
                    />
                </div>
            </div>
        </header>
    )
}
