import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const article = [
    {
        img: "/cultural-resources/article1.svg",
        title: `The Transformative Power of Learning Nigerian Languages`,
        link: ""
    },
    {
        img: "/cultural-resources/article2.svg",
        title: `How Learning Nigerian Languages Bridges the Gap`,
        link: ""
    },
    {
        img: "/cultural-resources/article3.svg",
        title: `More Than Words – A Journey of Culture and Identity`,
        link: ""
    }
]

export default function Articles() {
    return (
        <section className='mt-24'>
            <div className='container mx-auto font-arimo px-5'>
                <div
                    className='w-full text-center'
                >
                    <h1 className='text-greens-200 text-[32px] sm:text-5xl font-bold leading-relaxed' data-aos="fade-up">
                        Explore Our Articles
                    </h1>
                    <p className='mt-3 text-grays-800 text-xl leading-relaxed' data-aos="fade-up">
                        Delve into a world of knowledge and insights with our collection of articles
                    </p>
                </div>

                <div className='mt-12 flex flex-wrap justify-evenly gap-x-6 gap-y-10'>
                    {article?.map((item, index) => (
                        <div
                            key={index}
                            className='w-full sm:max-w-[384px] rounded-lg shadow-lg overflow-hidden'
                            data-aos-delay={(index * 100) + 100}
                        >
                            <div data-aos="zoom-in">
                                <Image
                                    src={item.img}
                                    width={1880}
                                    height={1253}
                                    alt={item.title}
                                />
                            </div>
                            <div className='mt-8 mb-12 px-6 sm:px-0 mx-auto w-full sm:max-w-[330px]'>
                                <h3 className='text-xl font-bold text-[#5C5C5C]' data-aos="fade-right">
                                    {item.title}
                                </h3>
                                <div className='mt-10' data-aos="fade-right">
                                    <Link
                                        href={`/articles/${index}/${item.title}`}
                                        className='text-green-500'
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
