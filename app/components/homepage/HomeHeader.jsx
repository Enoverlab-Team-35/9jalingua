import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeHeader() {
    return (
        <header className="bg-blues-1000 px-5 py-10">
            <div className="mx-auto container flex flex-col lg:flex-row items-center justify-between gap-24">
                {/* Text */}
                <div
                    className='lg:max-w-[615px] w-full'
                    data-aos="fade-right"
                >
                    <h1 className='font-bold font-arimo text-white text-[44px] sm:text-[56px]'>
                        Embrace and Discover Your Language Roots
                    </h1>
                    <p className="mt-5 text-[#ECECEC] leading-relaxed font-normal text-xl">
                        Celebrate the richness of culture and connect with people from diverse backgrounds through language learning
                    </p>
                    <div className='mt-12'>
                        <Link
                            href={"/login"}
                            className="px-8 py-4 rounded-lg bg-greens-300 text-white text-xl font-bold"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                {/* Image */}
                <div
                    className='w-full lg:w-auto flex-auto'
                    data-aos="fade-left"
                    data-aos-delay="100"
                >
                    <Image
                        src={'/william.png'}
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
