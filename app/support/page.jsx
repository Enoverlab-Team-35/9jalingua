import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import Link from 'next/link'

export default function Page() {
    return (
        <DashboardLayout>
            <div className='h-full grid items-center justify-center'>
                <div className='text-center'>
                    <h2 className='text-5xl font-medium text-black/75'>Page Not Found</h2>

                    <p className='mt-14 mb-5 text-xl'>Could not find requested resource</p>
                    <Link
                        className=''
                        href="/dashoard"
                    >
                        Return to Dashboard
                    </Link>

                </div>
            </div>
        </DashboardLayout>
    )
}
