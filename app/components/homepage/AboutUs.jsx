import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <section className='mt-24'>
            <div className="container mx-auto px-5 flex flex-col lg:flex-row justify-between gap-20 items-center">
                {/* Image */}
                <div className='w-full lg:w-auto flex-auto'>
                    <Image
                        src={'/Frame25.png'}
                        width={1880}
                        height={1254}
                        alt='About Us'
                        className='w-full rounded-lg object-center'
                    />
                </div>
                {/* Text */}
                <div className='lg:max-w-[657px] w-full'>
                    <h1 className="font-arimo text-blues-1100 font-bold text-[32px] sm:text-5xl">
                        About Us
                    </h1>
                    <p className="mt-8 font-arimo text-xl text-grays-600 leading-relaxed">
                        Our mission is to celebrate and promote Nigerian languages and culture. We&apos;re a team of language enthusiasts, educators, and cultural advocates who are dedicated to preserving and sharing the beauty of Nigerian languages. We believe that language is a bridge that connects generations, communities, and cultures. We offer high-quality language courses, cultural resources, and a vibrant online community to support your language learning journey. Whether you&apos;re starting from scratch or reconnecting with your roots, we&apos;re here to empower you.
                    </p>
                </div>
            </div>
        </section>
    )
}
