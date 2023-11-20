import React from 'react'
import Language from '../components/homepage/Language'
import Image from 'next/image'

const language = ["Yoruba", "Efik", "Isan", "Urhobo", "Gwari", "Egun", "Igbo", "Ibibio", "Nupe", "Igala", "Idoma", "Ogoni", "Hausa", "Bini", "Itsekiri", "Berom", "Ibira", "Isoko", "Birom", "Tangale", "Margi", "Owerri", "Kilba", "Kanufi", "Izon", "Mubi", "Owo", "Ijebu", "Egba", "Fulani"]

export default function page() {
    return (
        <section className='min-h-screen h-full p-5'>
            <div className="container mx-auto mt-12">
                <h1 className='text-center text-[40px] font-bold text-grays-900 mb-10'>
                    What Nigerian Language will you Like to learn?
                </h1>
                <div className="flex flex-wrap justify-between gap-x-12 gap-y-2">
                    {language?.map((item, index) => (
                        <Language
                            key={index}
                            title={item}
                            bg={'bg-blues-900'}
                        />
                    ))}
                </div>
                <button className='mt-28 ms-auto px-8 py-4 rounded-lg text-white bg-greens-300 flex place-items-center gap-2'>
                    <span className='text-xl font-bold'>Continue</span>
                    <Image
                        src={'/svgs/arrow-narrow-right.svg'}
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </section>
    )
}
