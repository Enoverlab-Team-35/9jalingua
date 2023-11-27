"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const language = ["Yoruba", "Efik", "Isan", "Urhobo", "Gwari", "Egun", "Igbo", "Ibibio", "Nupe", "Igala", "Idoma", "Ogoni", "Hausa", "Bini", "Itsekiri", "Berom", "Ibira", "Isoko", "Birom", "Tangale", "Margi", "Owerri", "Kilba", "Kanufi", "Izon", "Mubi", "Owo", "Ijebu", "Egba", "Fulani"]

export default function Page() {
    const [selected, setSelected] = useState('')
    const router = useRouter()

    return (
        <section className='min-h-screen h-full p-5'>
            <div className="container mx-auto mt-12">
                <h1 className='text-center text-[40px] font-bold text-grays-900 mb-10'>
                    What Nigerian Language will you Like to learn?
                </h1>
                <div className="flex flex-wrap justify-between gap-x-12 gap-y-2">
                    {language?.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelected(item)
                                toast(item, "Langauge Selected")
                                router.push("/dashboard")
                            }}
                            className={`${selected === item ? 'bg-greens-300' : 'bg-blues-900'} text-white py-5 px-3 w-[151px] text-center rounded-lg font-arimo text-xl font-bold`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button
                    className='mt-28 ms-auto px-8 py-4 rounded-lg text-white bg-greens-300 flex place-items-center gap-2'
                    onClick={() => {
                        if (selected) {
                            router.push('/dashboard')
                        } else {
                            toast("Select language to learn")
                        }
                    }}
                >
                    <span className='text-xl font-bold'>Continue</span>
                    <Image
                        src={'/svgs/arrow-narrow-right.svg'}
                        width={20}
                        height={20}
                        alt='Next'
                    />
                </button>
            </div>
        </section>
    )
}
