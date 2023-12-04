import Image from 'next/image'
import React from 'react'

export default function Feature({ svg, title, description }) {
    return (
        <div className='max-w-[240px] w-full'>
            <div className='mx-auto w-[91px] h-[91px] rounded-full bg-greens-300 flex justify-center items-center'>
                <Image
                    src={svg}
                    width={32}
                    height={32}
                    alt={title}
                />
            </div>
            <h4 className="mt-6 font-arimo text-xl font-bold text-blues-1100">
                {title}
            </h4>
            <p className="mt-6 leading-relaxed text-xl text-grays-600 font-arimo">
                {description}
            </p>
        </div>
    )
}
