import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";

const Video = [
    {
        img: "/cultural-resources/video1.svg",
        name: "Cultural Insights Unveiled",
        text: `Our Cultural Insights videos offer an immersive journey into the vibrant stories, and customs that define Nigerian culture`
    },
    {
        img: "/cultural-resources/video2.svg",
        name: "Taste of Nigeria: Culinary Delights",
        text: `Feast your eyes on delectable dishes, and learn the art of preparing Nigerian delicacies`
    },
    {
        img: "/cultural-resources/video3.svg",
        name: "Celebrate the Diversity of Culture",
        text: `Discover the colors, dances, and traditions that mark these joyous occasions`
    },
]

export default function VideoLibrary() {
  const router = useRouter()

    return (
        <section className='mt-[86px] font-arimo'>
            <div className='container mx-auto bg-greens-1100 px-5 pt-16 pb-[118px]'>
                <h1 className='text-center text-greens-200 font-bold text-[32px] sm:text-5xl leading-normal'>
                    Video Library
                </h1>
                <div className='mt-12 flex flex-wrap justify-evenly gap-x-6 gap-y-14'>
                    {Video?.map((item, index) => (
                        <div
                            key={index}
                            className='w-full max-w-[382px]'
                        >
                            <div>
                                <Image
                                    src={item.img}
                                    width={1880}
                                    height={1254}
                                    alt={item.name}
                                />
                            </div>
                            <h4 
                                onClick={() => router.push(`/articles/${index}/${item.title}`)}
                                className='mt-8 font-bold text-xl text-grays-1000 cursor-pointer'
                            >
                                {item.name}
                            </h4>
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
