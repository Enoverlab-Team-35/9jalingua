import Image from 'next/image'
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
        <section className='mt-24 px-5'>
            <div className='container mx-auto font-arimo p-[10px]'>
                <div className='text-center'>
                    <h1 className='text-greens-200 text-5xl leading-normal font-bold'>
                        Explore Our Articles
                    </h1>
                    <p className='mt-3 text-grays-800 text-xl'>
                        Delve into a world of knowledge and insights with our collection of articles
                    </p>
                </div>

                <div className='mt-12 flex flex-wrap justify-evenly gap-x-6 gap-y-10'>
                    {article?.map((item, index) => (
                        <div
                            key={index}
                            className='w-full max-w-[384px] rounded-lg shadow-lg overflow-hidden'
                        >
                            <div>
                                <Image
                                    src={item.img}
                                    width={1880}
                                    height={1253}
                                />
                            </div>
                            <div className='mt-8 mb-12 mx-auto w-full max-w-[330px]'>
                                <h3 className='text-xl font-bold text-[#5C5C5C]'>
                                    {item.title}
                                </h3>
                                <button className='mt-10 text-blues-1100'>
                                    Read more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
