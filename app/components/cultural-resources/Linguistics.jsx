import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const linguistic = [
    {
        img: "/cultural-resources/waves.svg",
        name: "Melodies of Nigeria",
        description: `Immerse yourself in the soul-stirring sounds of Nigeria. From traditional beats to contemporary rhythms, our audio collection captures the diverse`
    },
    {
        img: "/cultural-resources/waves.svg",
        name: "Language Tunes",
        description: `Explore the beauty of Nigerian languages through our curated audio snippets. Hear the cadence, and pronunciation.`
    },
    {
        img: "/cultural-resources/waves.svg",
        name: "Festival Vibes",
        description: `Experience the lively atmosphere of Nigerian festivals with our audio captures. From the beats of drums to the cheers of the crowd.`
    },
]

export default function Linguistics() {
    const router = useRouter()
    return (
        <section className='mt-24 font-arimo px-5'>
            <div className="container mx-auto">
                <div
                    className='w-full max-w-[710px] mx-auto sm:text-center'
                >
                    <h1 className='text-blues-1100 font-bold text-[32px] sm:text-5xl leading-normal' data-aos='fade-up' data-aos-delay='100'>
                        Linguistics Beats
                    </h1>
                    <p className='mt-6 text-grays-800 text-xl leading-normal'data-aos='fade-up' data-aos-delay='200'>
                        Explore Nigeria&apos;s vibrant soundscape, a cultural journey through language, rhythm, and heritage in each curated track
                    </p>
                </div>

                <div className='mt-12 flex flex-wrap justify-evenly gap-x-6 gap-y-14'>
                    {linguistic?.map((item, index) => (
                        <div
                            key={index}
                            data-aos-delay={(index * 100) + 100}
                            className='flex-auto md:max-w-[318px] w-full'
                        >
                            <button
                                onClick={() => router.push(`/articles/${index}/${item.title}`)}
                                className='p-[13px] rounded-full bg-greens-900 w-[76px] sm:w-[105px] aspect-square'
                                data-aos='fade-right'
                            >
                                <Image
                                    src={item.img}
                                    width={80}
                                    height={80}
                                    alt='Waves'
                                />
                            </button>
                            <h4
                                onClick={() => router.push(`/articles/${index}/${item.title}`)}
                                className='mt-8 text-blues-1100 font-bold text-xl cursor-pointer'
                                data-aos='fade-right'
                            >
                                {item.name}
                            </h4>
                            <p className='mt-6 text-grays-800 text-xl leading-relaxed' data-aos='fade-right'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
