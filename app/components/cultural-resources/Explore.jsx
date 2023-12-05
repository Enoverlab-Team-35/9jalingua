import Image from 'next/image'
import React from 'react'

const events = [
    {
        img: "/cultural-resources/event1.svg",
        name: "Cultural Fusion Night",
        text: `Dive into an immersive experience where traditions come alive in a celebration of Nigerian culture.`
    },
    {
        img: "/cultural-resources/event2.svg",
        name: "Language Symposium: Voices of Nigeria",
        text: `This unique event brings together linguists, cultural experts, and language enthusiasts to explore and celebrate the linguistic diversity of Nigeria.`
    },
    {
        img: "/cultural-resources/event3.svg",
        name: "Taste of Nigeria: Culinary Extravaganza",
        text: `Indulge in a gastronomic journey where traditional recipes and modern influences harmonize to create a culinary celebration.`
    },
]

export default function Explore() {
    return (
        <section className='px-5 bg-greens-1100 mt-24 pt-16 pb-[86px] font-arimo'>
            <div className="container mx-auto">
                <h1 className='text-greens-200 font-bold text-[32px] sm:text-5xl text-center sm:text-left'>
                    Explore Events
                </h1>

                <div className='mt-10 sm:mt-12 flex flex-wrap justify-evenly gap-x-6 gap-y-10 sm:gap-y-14'>
                    {events?.map((item, index) => (
                        <div
                            key={index}
                            className='w-full max-w-[385px]'
                        >
                            <div>
                                <Image
                                    src={item.img}
                                    width={996}
                                    height={560}
                                    alt={item.name}
                                />
                            </div>
                            <h3 className='mt-6 text-greens-200 text-xl font-bold'>
                                {item.name}
                            </h3>
                            <p className='mt-6 text-grays-800 text-xl leading-relaxed'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
