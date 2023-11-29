import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className="bg-blues-100 px-5 py-10">
            <div className="mx-auto container flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-32">
                {/* Text */}
                <div className='lg:max-w-[554px] w-full text-center lg:text-left'>
                    <h1 className='font-bold font-arimo text-blues-1100 text-[56px]'>
                        Discover the Rich Tapestry of Nigeria
                    </h1>
                    <p className="mt-5 text-grays-800 text-xl">
                        Explore the heart of this diverse nation, one resource at a time, and let the journey into Nigerian culture and language begin
                    </p>
                    <div className='mt-10'>
                        <Link
                            href={"/login"}
                            className="px-8 py-4 rounded-lg bg-greens-300 text-white text-xl font-bold"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                {/* Image */}
                <div className='w-full lg:w-auto flex-auto'>
                    <Image
                        src={'/cultural-resources/cottonbro.svg'}
                        width={1880}
                        height={1253}
                        alt='William'
                        className='w-full rounded-lg object-center'
                    />
                </div>
            </div>
        </header>
    )
}
