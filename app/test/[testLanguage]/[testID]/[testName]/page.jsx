"use client"

import { Loading } from '@/app/components/SvgsComponent'
import { useAppContext } from '@/app/context'
import ProgressBar from '@ramonak/react-progress-bar'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const label = ['A', 'B', 'C', 'D']

export default function Page() {
    const [currentTest, setCurrenttest] = useState(0)
    const [progress, setProgress] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [load, setLoad] = useState(false)

    const { testLanguage, testID, testName } = useParams()
    const { test, setTest } = useAppContext()

    function onNext() {
        if (!correctAnswer) {
            toast.error("Choose one option")
            return
        }
        setLoad(true)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setTimeout(() => {
            if (currentTest < (test.length - 1)) {
                setCorrectAnswer(null)
                setCurrenttest(prev => prev + 1)
            }
            setLoad(false)
        }, 1000)
    }
    return (
        <>
            {/* Nav */}
            <nav className='fixed top-0 left-0 w-full bg-white px-5 py-4 shadow-md z-10'>
                <div className="container mx-auto flex items-center justify-between gap-5">
                    <button className='py-3 px-6 rounded-lg border border-grays-500 shadow-sm font-bold text-grays-900 text-base font-arimo cursor-auto'>
                        {testLanguage}
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

            {/* Break the Margin */}
            <div className='mt-32'></div>

            {/* Progress Bar */}
            <div className='container mx-auto px-5 sm:px-10'>
                <ProgressBar
                    className="rounded-full lessonBarContainer"
                    customLabel={" "}
                    completed={Math.floor((progress / test.length) * 100)}
                />
            </div>

            {/* Test */}
            <div className='mt-8 container mx-auto px-5 sm:px-10 pb-28 flex flex-col md:flex-row gap-8 md:gap-12 md:items-center justify-between'>
                <div className='flex-1 grid gap-[44px] sm:gap-20'>
                    <p className='text-grays-800 text-[20px] sm:text-[32px]'>Choose the correct word</p>
                    <h1 className='sm:text-center text-grays-1000 text-[32px] sm:text-[52px]'>{test[currentTest].question}</h1>
                    <div className='grid sm:grid-cols-2 gap-5 sm:gap-10 max-w-[824px] w-full'>
                        {test[currentTest].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCorrectAnswer(option)
                                    setProgress(prev => prev + 1)
                                }}
                                className={`sm:max-w-[392px] w-full h-[84px] flex items-center justify-center gap-2 border text-[20px] text-grays-1000 border-grays-600 rounded-lg hover:bg-grays-100 ${correctAnswer
                                    ? test[currentTest].answer === option
                                        ? 'bg-greens-900 border-greens-200'
                                        : 'bg-[#FECDCA] border-[#912018] '
                                    : ''
                                    }}`}
                            >
                                <span className='font-semibold'>{label[index]}.</span>
                                <span>{option}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    className='flex md:flex-col-reverse items-center justify-center gap-3 bg-blues-1000 text-white rounded-lg px-8 py-4 font-bold text-xl font-arimo disabled:opacity-75'
                    disabled={currentTest >= (test.length - 1)}
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

            {/* Loading State */}
            {load && (
                <div className='fixed top-0 left-0 z-20 w-screen h-screen flex justify-center items-center bg-[#ffffff75]'>
                    <Loading color={"#004080"} size={"56px"} />
                </div>
            )}
        </>
    )
}
