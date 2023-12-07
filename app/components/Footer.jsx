import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footerLinks = {
    Product: [
        {
            name: "Overview",
            href: '/'
        },
        {
            name: "Features",
            href: '/'
        },
        {
            name: "Tutorials",
            href: '/'
        },
        {
            name: "Pricing",
            href: '/'
        },
        {
            name: "Releases",
            href: '/'
        },
    ],
    Company: [
        {
            name: "About us",
            href: '/'
        },
        {
            name: "Careers",
            href: '/'
        },
        {
            name: "Press",
            href: '/'
        },
        {
            name: "News",
            href: '/'
        },
        {
            name: "Contact",
            href: '/'
        },
    ],
    Resources: [
        {
            name: "Blog",
            href: '/'
        },
        {
            name: "Newsletter",
            href: '/'
        },
        {
            name: "Events",
            href: '/'
        },
        {
            name: "Help centre",
            href: '/'
        },
        {
            name: "Tutorials",
            href: '/'
        },
    ],
    Social: [
        {
            name: "Twitter",
            href: '/'
        },
        {
            name: "LinkedIn",
            href: '/'
        },
        {
            name: "Facebook",
            href: '/'
        },
        {
            name: "GitHub",
            href: '/'
        },
        {
            name: "Dribble",
            href: '/'
        },
    ],
    Legal: [
        {
            name: "Terms",
            href: '/'
        },
        {
            name: "Privacy",
            href: '/'
        },
        {
            name: "Cookies",
            href: '/'
        },
        {
            name: "Settings",
            href: '/'
        },
        {
            name: "Contact",
            href: '/'
        },
    ],
}

const socialMedia = [
    {
        img: "/social/twitter.svg",
        href: "#"
    },
    {
        img: "/social/linkedin.svg",
        href: "#"
    },
    {
        img: "/social/facebook.svg",
        href: "#"
    },
    {
        img: "/social/github.svg",
        href: "#"
    },
    {
        img: "/social/icon4.svg",
        href: "#"
    },
    {
        img: "/social/icon5.svg",
        href: "#"
    },
]

export default function Footer() {
    return (
        <footer className='bg-greens-300 sm:px-5 py-16'>
            <div className="container mx-auto text-white font-arimo">

                <div className="flex flex-col sm:flex-row justify-between sm:items-start sm:gap-6 gap-11 px-5 sm:px-0">
                    <div className='sm:text-left'>
                        <h1 className="text-3xl font-bold leading-normal">
                            Start your 30-days free trial
                        </h1>
                        <p className="mt-10 sm:mt-4 text-xl leading-relaxed">
                            Join over 50+ people already learnig with 9jaLingua
                        </p>
                    </div>
                    <Link
                        href={'/login'}
                        className="w-max sm:w-auto px-8 py-4 bg-blues-1100 shadow-md text-xl font-bold rounded-lg text-center"
                    >
                        Get Started
                    </Link>
                </div>

                <hr className='my-16 w-full h-[1px] bg-[#EAECF0]' />

                <div className='flex flex-col lg:flex-row justify-between gap-16 px-5 sm:px-0'>
                    <div className='w-full lg:max-w-[320px]'>
                        <h1 className='text-4xl font-bold flex items-center gap-4'>
                            <Image
                                src={'/9jalingua/white.svg'}
                                width={38}
                                height={43}
                                alt='9jaLingua'
                            />
                            <span>9jaLingua</span>
                        </h1>
                        <p className='mt-10 sm:mt-8 text-base leading-relaxed'>
                            Design amazing digital experiences that create more happiness in the world
                        </p>
                    </div>
                    <div className='w-full max-w-[805px] flex flex-wrap justify-between gap-x-8 gap-y-12'>
                        {Object.entries(footerLinks).map(([category, items], index) => (
                            <div key={index}>
                                <h2 className='mb-4 text-base'>
                                    {category}
                                </h2>

                                {items?.map((item, itemIndex) => (
                                    <ul key={itemIndex} className='text-base font-bold'>
                                        <li className='mt-3'>
                                            <Link href={item.href}>{item.name}</Link>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <hr className='my-16 w-full h-[1px] bg-[#EAECF0]' />

                <div className='flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-8 sm:gap-10 px-5 sm:px-0'>
                    <p className=''>
                        © 2023 9jaLingua. All rights reserved.
                    </p>
                    <ul className='flex items-center gap-6'>
                        {socialMedia?.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>
                                    <Image
                                        src={item.img}
                                        alt={item.img}
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
