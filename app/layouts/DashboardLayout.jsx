import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'

export default function DashboardLayout({ children }) {
    return (
        <div className='relative font-arimo flex h-screen overflow-hidden m-0 p-0'>
            <Sidebar />
            <div className='relative w-full h-screen overflow-hidden m-0 p-0'>
                <DashboardNavbar />
                <div className="mt-0 pb-20 px-5 lg:px-10 h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto">
                    {children}
                    <div className='w-full h-120'></div>
                </div>
            </div>
        </div>
    )
}
