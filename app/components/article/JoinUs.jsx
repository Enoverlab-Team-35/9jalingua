import Link from 'next/link'
import React from 'react'

export default function JoinUs() {
    return (
        <section className='mt-10 bg-greens-1000 px-5 py-16 md:py-28 font-arimo'>
            <div className='container mx-auto flex flex-col md:flex-row md:items-center md:gap-8 gap-12 justify-between'>
                <div>
                    <h4 className='text-greens-200 text-2xl font-bold'>Join us on this transformative exploration</h4>
                    <p className='mt-3 text-xl text-grays-700'>where words become more than expressions</p>
                </div>
                <div>
                    <Link
                        href={'/login'}
                        className='bg-greens-300 rounded-lg px-8 py-4 text-xl font-bold text-white font-arimo'
                    >
                        Get Started
                    </Link>
                </div>
            </div>

        </section>
    )
}
