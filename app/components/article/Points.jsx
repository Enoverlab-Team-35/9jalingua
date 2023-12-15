import React from 'react'

const list = [
    {
        bold: `Cultural Unveiling:`,
        text: `Uncover the depth of Nigerian culture woven into its languages.`
    },
    {
        bold: `Connection Building:`,
        text: `Explore how language learning strengthens connections within communities.`
    },
    {
        bold: `Personal Empowerment:`,
        text: `Learn how acquiring Nigerian languages empowers individuals on a personal and cultural level.`
    },
    {
        bold: `Beyond Words:`,
        text: `Delve into the idea that language learning is more than just words; it&apos;s a transformative experience.`
    },
]

export default function Points() {
    return (
        <section className='mt-20 sm:mt-36 px-5 font-arimo'>
            <div className='mx-auto max-w-[832px] w-full '>
                <p
                    className='text-xl text-grays-800 leading-loose font-normal'
                    data-aos="fade-up"
                >
                    We delve into the profound impact that learning Nigerian languages can have on individuals and communities. Beyond the surface of linguistic proficiency, we explore the cultural richness embedded in each word, the historical narratives woven into expressions, and the
                    sense of identity that language imparts.
                </p>

                <h4
                    className='mt-[52px] sm:mt-16 text-2xl text-grays-1000 font-bold'
                    data-aos="fade-right"
                >
                    Key Points:
                </h4>

                <ul className='mt-3 sm:mt-5 grid gap-2 sm:gap-3 list-disc ps-8 text-xl text-grays-800 leading-loose'>
                    {list?.map((data, index) => (
                        <li
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={(index * 100) + 100}
                        >
                            <span className='font-bold text-grays-900'>{data.bold}</span> {data.text}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
