"use client"

import { useAppContext } from '@/app/context'
import ProgressBar from '@ramonak/react-progress-bar'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
    const { lessonLanguage, lessonID, lessonName } = useParams()
    const { topics, setTopics, lessons } = useAppContext();
    const [topic, setTopic] = useState(topics.filter((item) => item.id === Number(lessonID)))
    const [sliceIndex, setSliceIndex] = useState(1)
    // console.log(lessons.slice((sliceIndex - 1), sliceIndex))
    console.log(topic)
    // console.log(lessonLanguage, lessonID, lessonName)
    // console.log(decodeURI(params.articleNAME))

    const onNext = () => {
        if (topic[0].progress < lessons.length) {
            // setSliceIndex(sliceIndex + 1)
            setTopics((prev) => prev.map((item) => item.id === Number(lessonID) ?
                {...item, progress: item.progress + 1}: item
            ))
            setTopic((prev) => prev.map((item) => item.id === Number(lessonID) ?
                {...item, progress: item.progress + 1}: item
            ))
        }
    }


    return (
        <>
            {/* Nav */}
            <nav className='px-5 py-4 shadow-md'>
                <div className="container mx-auto flex items-center justify-between gap-5">
                    <button className='py-3 px-6 rounded-lg border border-grays-500 shadow-sm font-bold text-grays-900 text-base font-arimo cursor-auto'>
                        {lessonLanguage}
                    </button>
                    <Link
                        href={'/interactive-lessons'}
                        className=''
                    >
                        <Image
                            src={'/svgs/multiply.svg'}
                            height={24}
                            width={24}
                            alt='close'
                        />
                    </Link>
                </div>
            </nav>

            {/* Progress Bar */}
            <div className='mt-12 container mx-auto px-5 sm:px-10'>
                <ProgressBar
                    className="rounded-full lessonBarContainer"
                    customLabel={" "}
                    completed={Math.floor((topic[0].progress / lessons.length) * 100)}
                />
            </div>

            {/* The Lesson */}
            <div className='mt-[52px] container mx-auto px-5 sm:px-10 pb-28 flex flex-col md:flex-row gap-8 md:gap-12 md:items-center'>
                <div className='w-full md:max-w-[350px] md:aspect-square rounded-lg overflow-hidden'>
                    <Image
                        src={'/unsplash.svg'}
                        width={2500}
                        height={1666}
                        alt='Image'
                        className='object-cover h-full'
                    />
                </div>
                <div className='flex-1 flex lg:flex-row flex-col lg:items-center gap-24 lg:gap-5 justify-between'>
                    {lessons.slice(topic[0].progress <= 0 ? 0 : (topic[0].progress - 1), topic[0].progress <= 0 ? 1 : topic[0].progress).map((item, index) => (
                        <div
                            key={index}
                            className='font-arimo'
                        >
                            <h5 className='text-base sm:text-xl text-grays-800'>
                                YORUBA
                            </h5>
                            <h1 className='mt-8 lg:mt-10 text-[44px] md:text-[52px] text-grays-1000'>
                                {item.from}
                            </h1>

                            <h5 className='mt-10 sm:mt-12 text-base sm:text-xl text-grays-800'>
                                ENGLISH
                            </h5>
                            <h1 className='mt-6 text-[32px] text-grays-1000'>
                                {item.to}
                            </h1>
                        </div>
                    ))}

                    <button
                        className='flex lg:flex-col-reverse items-center justify-center gap-3 bg-blues-1000 text-white rounded-lg px-8 py-4 font-bold text-xl font-arimo disabled:opacity-75'
                        disabled={topic[0].progress >= lessons.length}
                        onClick={onNext}
                    >
                        <span>Next</span>
                        <Image
                            src={'/svgs/arrow-r.svg'}
                            width={24}
                            height={24}
                            className='w-6 h-6'
                            alt='next'
                        />
                    </button>
                </div>
            </div>
        </>
    )
}
