"use client"
import React, { useState } from 'react'
import { useAppContext } from '../context';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

const language = [
    {
        name: "Yoruba",
        icon: '/yoruba.png'
    },
    {
        name: "Igbo",
        icon: '/igbo.png'
    },
    {
        name: "Hausa",
        icon: '/hausa.png'
    },
];

export default function Page() {
    const [data, setData] = useState(language)
    const [value, setValue] = useState()
    const { selectedLanguage, setSelectedLanguage } = useAppContext();
    const router = useRouter();

    const toggleLanguage = language => {
        setSelectedLanguage(language)
        sessionStorage.setItem("language", language)
        toast.success(`You have selected ${language.toUpperCase()}`);
        router.push("/dashboard");
    }

    const onContine = () => {
        if (!selectedLanguage) {
            toast.success(`Select the language that you want to learn`);
            return
        }
        toast.success(`You have selected ${selectedLanguage.toUpperCase()}`);
        router.push("/dashboard");
    }

    return (
        <>
            {/* Nav Bar */}
            <nav className='fixed top-0 left-0 w-full bg-white z-10 px-5 pt-10 pb-6'>
                <div className="container mx-auto">
                    {/* logo */}
                    <Link
                        href={'/'}
                        className="flex items-center gap-4 font-arimo"
                    >
                        <Image
                            src={'/9jalingua/green.svg'}
                            width={38}
                            height={43}
                            alt='9jaLingua'
                        />
                        <span className="text-4xl font-bold text-blues-1100">9jaLingua</span>
                    </Link>
                </div>
            </nav>

            <section className="p-5 mt-36 pb-20">
                <div className='max-w-[900px] w-full mx-auto'>
                    <h1 className='font-arimo font-bold text-[32px] md:text-[40px] leading-[43px] text-center'>
                        What Nigerian Language will you like to learn?
                    </h1>
                    {/* Language Buttons */}
                    <div className='mt-[65px] grid gap-5'>
                        {language.map((item, index) => (
                            <button
                                key={index}
                                className={`px-6 py-5 md:py-6 rounded-lg flex items-center gap-8 ${selectedLanguage === item.name ? "bg-greens-300 text-white" : "bg-[#E7EDE8] text-blues-1000"}`}
                                onClick={() => toggleLanguage(item.name)}
                            >
                                <Image
                                    src={item.icon}
                                    width={73}
                                    height={73}
                                    alt={`${item.name} Image`}
                                    className='w-[57px] md:w-[73px] aspect-square'
                                    priority
                                />
                                <span className='text-xl font-bold'>{item.name}</span>
                            </button>
                        ))}
                    </div>
                    {/* Continue Button */}
                    <div className='hidden sm:block w-max ms-auto mt-44'>
                        <button
                            className='rounded-lg bg-greens-300 text-white py-4 px-8 flex items-center gap-2'
                            onClick={onContine}
                        >
                            <span className='text-xl font-bold'>Continue</span>

                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
