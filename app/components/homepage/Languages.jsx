import React from 'react'
import Language from './Language'
import Image from 'next/image'

export default function Languages() {
    return (
        <section className="mt-24 px-5">
            <div className="container mx-auto text-center">
                <h1 className="font-arimo text-5xl font-bold text-blues-1100">
                    Explore the Variety of languages you can learn
                </h1>
                <div className="mt-10 flex flex-wrap items-center justify-evenly gap-6">
                    <Language title={'Yoruba'} />
                    <Language title={'Igbo'} />
                    <Language title={'Hausa'} />
                    <Language title={'Efik'} />
                    <Language title={'Ibibio'} />
                    <Language title={'Bini'} />
                    <Language title={'Bini'} />
                    <button className="bg-greens-300 text-white py-5 px-3 w-[151px] text-center rounded-lg font-arimo text-xl font-bold flex justify-center items-center gap-2">
                        <span>Others</span>
                        <Image
                            src={'/svgs/chevron-down.svg'}
                            width={20}
                            alt='Dropdown Icon'
                            height={20}
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}
