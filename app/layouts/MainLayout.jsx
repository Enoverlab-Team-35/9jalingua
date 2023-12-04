import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className='mt-[88px]'></div>
            {children}
            <Footer />
        </>
    )
}
