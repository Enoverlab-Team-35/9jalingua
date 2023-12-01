"use client"

import React from 'react'
import Image from 'next/image'
import DashboardLayout from '../layouts/DashboardLayout';
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
    return (
        <DashboardLayout>
            <div>
                <div className="w-full flex justify-between items-center mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="text-stone-950 text-opacity-90 text-4xl font-bold leading-10">
                        Hello, John Doe
                    </div>
                    <div className="shadow-sm bg-white flex justify-between gap-5 border px-4 border-[color:var(--gray-400,rgba(13,13,13,0.30))] rounded-lg">
                        <input type="search" className="text-stone-950 relative text-opacity-50 text-base leading-6 items-stretch shadow-sm bg-white flex justify-between gap-5 px-3.5 py-2.5 rounded-lg border-solid" placeholder="Search Lessons" />
                        <img
                            loading="lazy"
                            src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e6776dba-d38d-483b-84c7-a942a37e906c?"}
                            className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start gap-9 w-full">
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
                                                    <div className="text-stone-950 text-opacity-90 text-xl font-bold leading-5 self-stretch whitespace-nowrap max-md:max-w-full">
                                                        {data.heading}
                                                    </div>
                                                    <div className="justify-center text-stone-950 text-opacity-70 text-base leading-5 self-stretch mt-2 max-md:max-w-full">
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
                    <div className="flex flex-col justify-center items-center">
                        <div className="border items-end mt-[40px] pl-8 pr-3 mb-[60px] pt-8 pb-2 rounded-lg border-solid max-md:mt-9 max-md:pl-5">
                            <div className="text-stone-950 text-opacity-80 text-lg font-bold leading-7 self-stretch whitespace-nowrap">
                                Friday Freak
                            </div>
                            <div className="justify-center text-stone-950 text-opacity-70 text-base leading-5 self-stretch mt-4">
                                Complete a lesson on a Friday to add 2 days to streak count{" "}
                            </div>
                            <div className="flex justify-end">
                                <div className="flex cursor-pointer justify-end items-end w-[125px] max-w-full gap-1 mt-2 pr-px">
                                    <div className="text-sky-900 text-base font-bold leading-5 my-auto">
                                        Take Lesson
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2422a57e-f677-4f3e-b89c-91f9cd3c92eb?"
                                        className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border mt-6 bg-blue-100 pl-8 pr-3 mb-[60px] pt-8 pb-2 rounded-lg border-solid max-md:mt-9 max-md:pl-5">
                            <div className="text-stone-950 text-opacity-80 text-lg font-bold leading-7 self-stretch whitespace-nowrap">
                                Trailblazer
                            </div>
                            <div className="justify-center text-stone-950 text-opacity-70 text-base leading-5 self-stretch mt-4">
                                See all completed lessons here and track your progress so far
                            </div>
                            <div className="flex justify-end">
                                <div className="flex cursor-pointer items-end justify-end w-[125px] max-w-full gap-1 mt-2 pr-px">
                                    <div className="text-sky-900 text-base font-bold leading-5 my-auto font-arimo">
                                        See All
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2422a57e-f677-4f3e-b89c-91f9cd3c92eb?"
                                        className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
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
