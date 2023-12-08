"use client"

import DashboardLayout from '@/app/layouts/DashboardLayout'
import Image from 'next/image'
import React from 'react'

const topics = [
    {
        tip: "Language Learning Tips",
        no: 10,
        bg: 'bg-greens-400'
    },
    {
        tip: "Cultural Exchange",
        no: 8,
        bg: 'bg-blues-700'
    },
    {
        tip: "Language Challenges",
        no: 7,
        bg: 'bg-greens-600'
    },
    {
        tip: "General Discussion",
        no: 10,
        bg: 'bg-grays-800'
    },
    {
        tip: "Language-Specific Subforums",
        no: 5,
        bg: 'bg-blues-1100'
    },
    {
        tip: "Resources and Recommendations",
        no: 12,
        bg: 'bg-blues-500'
    },
    {
        tip: "Community Announcement",
        no: 9,
        bg: 'bg-grays-500'
    },
    {
        tip: "Virtual Learning Groups",
        no: 10,
        bg: 'bg-greens-800'
    },
    {
        tip: "Media Corner",
        no: 11,
        bg: 'bg-blues-900'
    },
]

const latest = [
    {
        img: '/community/img1.svg',
        title: 'Language Practice Sessions',
        no: 3,
        text: "Language Learning Tips",
        hours: "1h"
    },
    {
        img: '/community/img2.svg',
        title: 'Study Group Coordination',
        no: 5,
        text: "Virtual Learning Groups",
        hours: "2h"
    },
    {
        img: '/community/img3.svg',
        title: 'Language Challenges Updates',
        no: 4,
        text: "Language Challenges",
        hours: "3h"
    },
    {
        img: '/community/img4.svg',
        title: 'Quick Polls and Surveys',
        no: 2,
        text: "Community Announcement",
        hours: "5h"
    },
]

export default function Page() {

    function onSearch(e) {
        e.preventDefault()
    }

    return (
        <DashboardLayout>
            <div className='mt-6 sm:mt-14 md:max-w-[320px] w-full ms-auto rounded-lg border border-grays-300 overflow-hidden font-arimo pb-20'>
                <form className='flex gap-2 items-center p-0' onSubmit={onSearch}>
                    <input
                        type="search"
                        placeholder='Search Lession'
                        className='flex-auto py-[10px] ps-[14px] bg-white text-grays-600 w-full'
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

            <div className='mt-11 md:mt-8 grid md:grid-cols-2 gap-10 md:gap-16 font-arimo'>
                <div>
                    <div className='flex items-center justify-between gap-10 text-grays-900 text-base'>
                        <p>Category</p>
                        <p>Topics</p>
                    </div>
                    <div className='mt-8'>
                        {topics?.map((item, index) => (
                            <div
                                key={index}
                                className='flex items-center justify-between gap-8 outline outline-1 outline-grays-200 pe-[18px]'
                            >
                                <div className='flex items-center gap-6'>
                                    <div className={`${item.bg} h-[55px] w-[9px]`}></div>
                                    <p className='text-grays-900 font-bold md:font-normal text-base md:text-xl'>{item.tip}</p>
                                </div>
                                <p className='text-grays-800'>{item.no}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className='text-grays-900 text-base'>Latest</p>
                    <div className='mt-8'>
                        {/* Map */}
                        {latest?.map((item, index) => (
                            <div
                                key={index}
                                className='flex items-center gap-6 outline outline-1 outline-grays-200 ps-6 pe-[15px] py-4'
                            >
                                <div className='w-[69px] aspect-square'>
                                    <Image
                                        src={item.img}
                                        width={1999}
                                        height={2500}
                                        className='rounded-full'
                                        alt='author'
                                    />
                                </div>
                                <div className='w-full flex-1'>
                                    <div className='flex items-center gap-8 justify-between'>
                                        <p className='text-grays-900 font-normal text-base md:text-xl'>{item.title}</p>
                                        <p className='text-grays-800 font-bold text-base'>{item.no}</p>
                                    </div>
                                    <div className='mt-3 flex items-center gap-8 justify-between text-grays-800 text-sm md:text-base font-normal'>
                                        <p>{item.text}</p>
                                        <p>{item.hours}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
