"use client"

import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useAppContext } from '../context';

export default function DashboardLayout({ children }) {
    const [user, loading] = useAuthState(auth);
    const { selectedLanguage } = useAppContext();
    const router = useRouter()

    useEffect(() => {
        if (!user && !loading) {
            router.push('/login')
            toast.warning("Please Login");
        }
        if (!selectedLanguage && !loading) {
            router.push('/select-language')
            toast.warning("Please Select Language to learn");
        }
    }, [user, loading, selectedLanguage])
    return (
        <div className='relative font-arimo flex h-screen overflow-hidden m-0 p-0'>
            <Sidebar />
            <div className='relative w-full h-screen overflow-hidden m-0 p-0'>
                <DashboardNavbar />
                <div className="mt-0 pb-20 px-5 lg:px-10 h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto">
                    {children}
                    <div className='w-full h-20'></div>
                </div>
            </div>
        </div>
    )
}
