import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const insights = [
    {
        title: `The Transformative Power of Learning Nigerian Languages`,
        img: "/insights/Frame1.png",
        link: ""
    },
    {
        title: `How Learning Nigerian Languages Bridges the Gap`,
        img: "/insights/Frame2.png",
        link: ""
    },
    {
        title: `More Than Words – A Journey of Culture and Identity`,
        img: "/insights/Frame3.png",
        link: ""
    },
]

export default function Insights() {
    return (
        <section className="relative my-24 py-20">
            <div className='absolute z-[-1] top-0 left-0 w-full max-w-[720px] h-full bg-blues-200'></div>
            <div className="container mx-auto px-5">
                <h1
                    data-aos="fade-down"
                    className="font-bold text-[32px] sm:text-5xl text-blues-1100 text-center md:text-left"
                >
                    Explore Insights
                </h1>
                <div className="flex flex-wrap justify-around xl:justify-between gap-6">
                    {insights?.map((item, index) => (
                        <div
                            data-aos-delay={(index * 100) + 100}
                            key={index}
                            className="w-full max-w-[385px] mt-10 rounded-lg bg-white shadow-lg overflow-hidden"
                        >
                            <div className='w-full'>
                                <Image
                                    src={item.img}
                                    className='w-full'
                                    width={1880}
                                    height={1253}
                                    alt={item.title}
                                    data-aos="fade-down"
                                />
                            </div>
                            <div className='py-8 px-6'>
                                <h4 
                                    className='mb-10 text-xl font-bold text-grays-900 leading-normal'
                                    data-aos="zoom-in"
                                >
                                    {item.title}
                                </h4>
                                <Link
                                    href={`/articles/${index}/${item.title}`}
                                    className='text-base text-greens-300'
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
