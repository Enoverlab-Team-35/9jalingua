import React from 'react'

export default function AuthLayout({ text, children }) {
    return (
        <section className='min-h-screen h-full px-5 py flex flex-col justify-center'>
            <div>
                <h1 className='text-[#272727] text-5xl font-bold font-arimo text-center'>
                    {text} to Learn and Connet
                </h1>
                <div className='w-full max-w-[490] mx-auto px-8 mt-16'>
                    {children}
                </div>
            </div>
        </section>
    )
}
