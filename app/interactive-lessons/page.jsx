"use client"

import React from 'react'
import Image from 'next/image'
import DashboardLayout from '../layouts/DashboardLayout';
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import BarChartComponent from '../components/BarChartComponent';

const initialData = [
    {
        heading: "Greetings",
        title: "Learn how to introduce yourself, greet friends and the elderly",
        img: "/interactivePage/mask-group@2x.png"
    },
    {
        heading: "Part of the Body",
        title: "Learn how to identify every part of the body",
        img: "/interactivePage/mask-group1@2x.png"
    },
    {
        heading: "Singular and plural",
        title: "Know how to call one and know how to call two or more",
        img: "/interactivePage/mask-group2@2x.png"
    },
    {
        heading: "Know your Objects",
        title: "Identify any object and learn the correct pronunciation.",
        img: "/interactivePage/mask-group3@2x.png"
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
            <div>
                <div className="flex items-center justify-between w-full mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="text-4xl font-bold leading-10 text-stone-950 text-opacity-90">
                        Hello, {user?.displayName || "John Doe"}
                    </div>
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
                <div className="flex flex-col items-start justify-between w-full lg:flex-row gap-9">
                    <div className="w-full">
                        <ul
                            className='grid'
                        >
                            {initialData.map((data, index) => {
                                return (
                                    <li className="mt-[40px]" key={index}>
                                        <div className="border gap-5 flex flex-row border-[color:var(--gray-200,rgba(13,13,13,0.10))] shadow pr-4 rounded-lg border-solid max-md:max-w-full">
                                            <div className="items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                                <Image
                                                    alt="Image"
                                                    width={1880}
                                                    height={1253}
                                                    src={data.img}
                                                    className="aspect-[1.25] w-[306px] h-full "
                                                />
                                            </div>
                                            <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="flex flex-col mt-9 max-md:max-w-full max-md:mt-10">
                                                    <div className="self-stretch text-xl font-bold leading-5 text-stone-950 text-opacity-90 whitespace-nowrap max-md:max-w-full">
                                                        {data.heading}
                                                    </div>
                                                    <div className="self-stretch justify-center mt-2 text-base leading-5 text-stone-950 text-opacity-70 max-md:max-w-full">
                                                        {data.title}
                                                    </div>
                                                    <div className="flex justify-end pt-5 pb-4">
                                                        <div className="rounded-lg items-end shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[150px] h-12 overflow-hidden py-3 px-4 gap-[8px] text-blue-1100 border-[1px] border-solid border-blue-500">
                                                            <button className="relative text-blues-1100 font-arimo text-[16px] font-bold leading-5">
                                                                {`Take Lesson`}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full mx-auto">
                        <div className="border items-end mt-[40px] pl-8 pr-3 mb-[60px] pt-8 pb-2 rounded-lg border-solid max-md:mt-9 max-md:pl-5">
                            <div className="self-stretch text-lg font-bold leading-7 text-stone-950 text-opacity-80 whitespace-nowrap">
                                Friday Freak
                            </div>
                            <div className="self-stretch justify-center mt-4 text-base leading-5 text-stone-950 text-opacity-70">
                                Complete a lesson on a Friday to add 2 days to streak count{" "}
                            </div>
                            <div className="flex justify-end">
                                <div className="flex cursor-pointer justify-end items-end w-[125px] max-w-full gap-1 mt-2 pr-px">
                                    <div className="my-auto text-base font-bold leading-5 text-sky-900">
                                        Take Lesson
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2422a57e-f677-4f3e-b89c-91f9cd3c92eb?"
                                        className="self-stretch object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border mt-6 bg-blue-100 pl-8 pr-3 mb-[60px] pt-8 pb-2 rounded-lg border-solid max-md:mt-9 max-md:pl-5">
                            <div className="self-stretch text-lg font-bold leading-7 text-stone-950 text-opacity-80 whitespace-nowrap">
                                Trailblazer
                            </div>
                            <div className="self-stretch justify-center mt-4 text-base leading-5 text-stone-950 text-opacity-70">
                                See all completed lessons here and track your progress so far
                            </div>
                            <div className="flex justify-end">
                                <div className="flex cursor-pointer items-end justify-end w-[125px] max-w-full gap-1 mt-2 pr-px">
                                    <div className="my-auto text-base font-bold leading-5 text-sky-900 font-arimo">
                                        See All
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2422a57e-f677-4f3e-b89c-91f9cd3c92eb?"
                                        className="self-stretch object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <BarChartComponent />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}




     

