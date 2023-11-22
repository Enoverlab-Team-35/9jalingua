import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'

export default function DashboardLayout({ children }) {
    return (
        <div className='font-arimo flex'>
            <Sidebar />
            <div className='w-full px-10 py-5'>
                <DashboardNavbar />
                <div className='mt-14'>
                    {children}
                </div>
            </div>
        </div>
    )
}
