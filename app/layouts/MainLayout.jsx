import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            {/* <ToastContainer /> */}
            {children}
            <Footer />
        </>
    )
}
