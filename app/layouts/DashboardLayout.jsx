import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'

export default function DashboardLayout({ children }) {
    return (
        <div className='relative font-arimo flex'>
            <Sidebar />
            <div className='w-full max-w[] h-screen overflow-y-auto px-5 lg:px-10 py-5'>
                <DashboardNavbar />
                <div className='mt-14'>
                    {children}
                </div>
            </div>
        </div>
    )
}
