"use client"

import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aos from "aos";

export default function MainLayout({ children }) {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <Navbar />
            <div className='mt-[88px]'></div>
            {children}
            <Footer />
        </>
    )
}