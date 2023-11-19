import Image from 'next/image'
import React from 'react'
import Feature from './Feature'

export default function Features() {
    return (
        <section className="mt-24 bg-greens-1100 py-10 px-5">
            <div className="mx-auto container text-center">
                <h1 className="font-arimo text-5xl text-blues-1100 font-bold">
                    Unleash Our Features
                </h1>
                {/* Features */}
                <div className="mt-14 flex items-center flex-wrap justify-evenly gap-y-14 gap-x-10 lg:gap-x-20">
                    {/* Interactive Lessons */}
                    <Feature
                        svg={"/svgs/book-open.svg"}
                        title={"Interactive Lessons"}
                        description={"Embrace an effective, hands-on approach to master"}
                    />
                    {/* Community Engagement */}
                    <Feature
                        svg={"/svgs/users.svg"}
                        title={"Community Engagement"}
                        description={"Foster a language community and connect with native speakers"}
                    />
                    {/* Progress Tracking */}
                    <Feature
                        svg={"/svgs/tracking.svg"}
                        title={"Progress Tracking"}
                        description={"Monitor your language progress with ease and stay on track"}
                    />
                    {/* Cultural Resources */}
                    <Feature
                        svg={"/svgs/presentation.svg"}
                        title={"Cultural Resources"}
                        description={"Dive into a world of Nigerian heritage for a deeper understanding"}
                    />
                    {/* Online Community */}
                    <Feature
                        svg={"/svgs/community.svg"}
                        title={"Online Community"}
                        description={"Grow your language skills through shared practice in our community"}
                    />
                </div>
            </div>
        </section>
    )
}
