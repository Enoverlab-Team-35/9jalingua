import Image from 'next/image'
import React from 'react'
import Feature from './Feature'

const feature = [
    {
        svg: "/svgs/book-open.svg",
        title: "Interactive Lessons",
        description: "Embrace an effective, hands-on approach to master"
    },
    {
        svg: "/svgs/users.svg",
        title: "Community Engagement",
        description: "Foster a language community and connect with native speakers"
    },
    {
        svg: "/svgs/tracking.svg",
        title: "Progress Tracking",
        description: "Monitor your language progress with ease and stay on track"
    },
    {
        svg: "/svgs/presentation.svg",
        title: "Cultural Resources",
        description: "Dive into a world of Nigerian heritage for a deeper understanding"
    },
    {
        svg: "/svgs/community.svg",
        title: "Online Community",
        description: "Grow your language skills through shared practice in our community"
    }
]

export default function Features() {
    return (
        <section className="bg-greens-1100 py-20 px-5">
            <div className="mx-auto container text-center">
                <h1
                    className="font-arimo text-[32px] sm:text-5xl text-blues-1100 font-bold"
                    data-aos="zoom-in"
                >
                    Unleash Our Features
                </h1>
                {/* Features */}
                <div className="mt-14 flex items-center flex-wrap justify-evenly gap-y-14 gap-x-10 lg:gap-x-20">
                    {feature?.slice(0, 3).map((item, index) => (
                        <Feature
                            key={index}
                            svg={item.svg}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
                <div className="mt-14 flex items-center flex-wrap justify-evenly gap-y-14 gap-x-10 lg:gap-x-20">
                    {feature?.slice(3, 6).map((item, index) => (
                        <Feature
                            key={index}
                            svg={item.svg}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
