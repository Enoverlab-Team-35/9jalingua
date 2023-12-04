"use client"

import React from 'react'
import Image from 'next/image'
import DashboardLayout from '../layouts/DashboardLayout';
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import BarChartComponent from '../components/BarChartComponent';
import { twMerge } from 'tailwind-merge';
import { toast } from 'react-toastify';
import ProgressBar from '@ramonak/react-progress-bar';

const initialData = [
    {
        heading: "Greetings",
        title: "Learn how to introduce yourself, greet friends and the elderly",
        img: "/interactivePage/mask-group@2x.png",
        progress: 3,
        total_lesson: 5
    },
    {
        heading: "Part of the Body",
        title: "Learn how to identify every part of the body",
        img: "/interactivePage/mask-group1@2x.png",
        progress: 0,
        total_lesson: 5
    },
    {
        heading: "Singular and plural",
        title: "Know how to call one and know how to call two or more",
        img: "/interactivePage/mask-group2@2x.png",
        progress: 0,
        total_lesson: 5
    },
    {
        heading: "Know your Objects",
        title: "Identify any object and learn the correct pronunciation.",
        img: "/interactivePage/mask-group3@2x.png",
        progress: 0,
        total_lesson: 5
    },
    // Add more images here
];

export default function Page() {
    function onSearch(e) {
        e.preventDefault()
    }
    const [user, loading] = useAuthState(auth);
    return (
        <DashboardLayout>
            {/* Name and Forms */}
            <div className="flex items-center justify-between w-full mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10 font-arimo">
                <h1 className="text-4xl font-bold leading-10 text-stone-950 text-opacity-90 capitalize">
                    Hello, {user?.displayName || "John Doe"}
                </h1>
                <div className='md:max-w-[320px] w-full ms-auto rounded-lg border border-grays-300 overflow-hidden font-arimo'>
                    <form className='flex items-center gap-2 p-0' onSubmit={onSearch}>
                        <input
                            type="search"
                            placeholder='Search Lession'
                            className='flex-auto py-[10px] ps-[14px] text-grays-600 w-full'
                        />
                        <button
                            className='py-[10px] pe-[14px]'
                            type='submit'
                        >
                            <Image
                                src={'/community/search-sm.svg'}
                                height={20}
                                width={20}
                                alt='Search'
                            />
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-[40px] flex flex-col items-start justify-between w-full xl:flex-row gap-10 xl:gap-8 2xl:gap-20">
                <div className="w-full xl:max-w-[699px] 2xl:max-w-full grid gap-6">
                    {initialData?.map((data, index) => (
                        <div
                            key={index}
                            className="border gap-5 flex itemscenter shadow pr-6 rounded-lg overflow-hidden border-grays-200"
                        >
                            <div className="max-w-[213px] w-full h-full">
                                <Image
                                    alt="Image"
                                    width={1880}
                                    height={1253}
                                    src={data.img}
                                    className="w-full h-full  object-cover"
                                />
                            </div>
                            <div className=" w-full my-auto py-6">
                                <h4 className='text-xl font-bold text-grays-900'>
                                    {data.heading}
                                </h4>
                                <p className='mt-2 text-grays-800'>
                                    {data.title}
                                </p>
                                {data.progress > 0 && (
                                    <div className='mt-4 w-full max-w-[396px] flex items-center justify-between gap-3'>
                                        <ProgressBar
                                            className="progressiveBarContainer w-full rounded-full"
                                            customLabel={" "}
                                            completed={(data.progress / data.total_lesson) * 100}
                                        />
                                        <h5 className='text-grays-900 font-medium text-sm font-inter'>
                                            {(data.progress / data.total_lesson) * 100}%
                                        </h5>
                                    </div>
                                )}
                                <div className='mt-4 flex justify-end'>
                                    <button className='px-4 py-3 bg-blues-1000 text-white font-bold rounded-lg' onClick={() => toast("123")}>
                                        Take Lesson
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full xl:max-w-[354px]">
                    <div className="border border-grays-200 rounded-lg px-6 py-8">
                        <div className='w-full max-w-[245px] sm:max-w-[80%] xl:max-w-[245px]'>
                            <h3 className='text-grays-900 text-lg font-bold'>
                                Friday Freak
                            </h3>
                            <p className='mt-4 text-grays-800'>
                                Complete a lesson on a Friday to add 2 days to streak count
                            </p>
                        </div>
                        <div className='mt-6 flex justify-end'>
                            <button className='flex items-center gap-1'>
                                <span className='text-blues-1100 font-bold'>Take Lesson</span>
                                <Image
                                    src={'/svgs/arrow-right-blue.svg'}
                                    width={24}
                                    height={24}
                                    alt='Take Lesson'
                                />
                            </button>
                        </div>
                    </div>
                    <div className="border mt-10 bg-blues-200 rounded-lg px-6 py-8">
                        <div className='w-full max-w-[245px] sm:max-w-[80%] xl:max-w-[245px]'>
                            <h3 className='text-grays-900 text-lg font-bold'>
                                Trailblazer
                            </h3>
                            <p className='mt-4 text-grays-800'>
                                See all completed lessons here and track your progress so far
                            </p>
                        </div>
                        <div className='mt-6 flex justify-end'>
                            <button className='flex items-center gap-1'>
                                <span className='text-blues-1100 font-bold'>See All</span>
                                <Image
                                    src={'/svgs/arrow-right-blue.svg'}
                                    width={24}
                                    height={24}
                                    alt='Take Lesson'
                                />
                            </button>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h3 className='mb-2 text-grays-900 text-lg font-bold'>
                            Lesson Taken
                        </h3>
                        <div className='relative'>
                            <h3 className='absolute -left-2 top-[40%] -translate-y-1/2 vertical-mode text-blues-900'>
                                Lessons
                            </h3>
                            <BarChartComponent />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}






