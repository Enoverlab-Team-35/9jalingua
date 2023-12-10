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
import { useAppContext } from '../context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
    const { topics, selectedLanguage } = useAppContext();
    const [user, loading] = useAuthState(auth);
    const router = useRouter()

    function onSearch(e) {
        e.preventDefault()
    }
    return (
        <DashboardLayout>
            {/* Name and Forms */}
            <div className="flex items-center justify-between w-full gap-5 mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10 font-arimo">
                <h1 className=" text-[16px] sm:text-xl font-bold leading-10 capitalize text-stone-950 text-opacity-90">
                    Hello, {user?.displayName || "John Doe"}
                </h1>
                <div className='md:max-w-[320px] w-full ms-auto rounded-lg border border-grays-300 overflow-hidden font-arimo'>
                    <form className='flex items-center gap-2 p-0' onSubmit={onSearch}>
                        <input
                            type="search"
                            placeholder='Search Lession'
                            className='flex-auto py-[10px] ps-[14px] bg-white text-grays-600 w-full focus-within:outline-none'
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
                    {topics?.map((data, index) => (
                        <div
                            key={index}
                            className="flex items-center sm:gap-5 mx-[8px] border rounded-lg shadow border-grays-200"
                        >
                            <div className="max-w-[213px] rounded-s-lg w-full h-full">
                                <Image
                                    alt="Image"
                                    width={1880}
                                    height={1253}
                                    src={data.img}
                                    className="object-cover w-full rounded-s-lg h-full"
                                />
                            </div>
                            <div className="w-full px-4 py-6 sm:px-6 my-auto ">
                                <h4 className='text-xl font-bold text-black'>
                                    {data.heading}
                                </h4>
                                <p className='mt-2 text-grays-800'>
                                    {data.title}
                                </p>
                                {data.progress > 0 && (
                                    <div className='mt-4 w-full max-w-[396px] flex items-center justify-between gap-3'>
                                        <ProgressBar
                                            className="w-full rounded-full progressiveBarContainer"
                                            customLabel={" "}
                                            completed={Math.floor((data.progress / data.total_lesson) * 100)}
                                        />
                                        <h5 className='text-sm font-medium text-grays-900 font-inter'>
                                            {Math.floor((data.progress / data.total_lesson) * 100)}%
                                        </h5>
                                    </div>
                                )}

                                <div className='mt-6 flex lg:justify-end'>
                                    <Link
                                        href={`/lesson/${selectedLanguage}/${data.id}/${data.heading}`}
                                        className={`px-4 py-3 font-bold rounded-lg border border-blues-1000 text-blues-1000 ${data.progress > 0 && 'px-7 bg-blues-1000 text-white'}`}
                                    >
                                        {data.progress > 0 ? "Continue" : "Take Lesson"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full xl:max-w-[354px]">
                    <div className="px-6 py-8 border rounded-lg border-grays-200">
                        <div className='w-full max-w-[245px] sm:max-w-[80%] xl:max-w-[245px]'>
                            <h3 className='text-lg font-bold text-grays-900'>
                                Friday Freak
                            </h3>
                            <p className='mt-4 text-grays-800'>
                                Complete a lesson on a Friday to add 2 days to streak count
                            </p>
                        </div>
                        <div className='flex justify-end mt-6'>
                            <button
                                className='flex items-center gap-1'
                            >
                                <span className='font-bold text-blues-1100'>Take Lesson</span>
                                <Image
                                    src={'/svgs/arrow-right-blue.svg'}
                                    width={24}
                                    height={24}
                                    alt='Take Lesson'
                                />
                            </button>
                        </div>
                    </div>
                    <div className="px-6 py-8 mt-10 border rounded-lg bg-blues-200">
                        <div className='w-full max-w-[245px] sm:max-w-[80%] xl:max-w-[245px]'>
                            <h3 className='text-lg font-bold text-grays-900'>
                                Trailblazer
                            </h3>
                            <p className='mt-4 text-grays-800'>
                                See all completed lessons here and track your progress so far
                            </p>
                        </div>
                        <div className='flex justify-end mt-6'>
                            <button className='flex items-center gap-1'>
                                <span className='font-bold text-blues-1100'>See All</span>
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
                        <h3 className='mb-2 text-lg font-bold text-grays-900'>
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






