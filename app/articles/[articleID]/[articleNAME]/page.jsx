"use client"

import Header from '@/app/components/article/Header'
import JoinUs from '@/app/components/article/JoinUs'
import Points from '@/app/components/article/Points'
import Unlocking from '@/app/components/article/Unlocking'
import MainLayout from '@/app/layouts/MainLayout'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {
    const params = useParams()
    // console.log(decodeURI(params.articleNAME))

    return (
        <MainLayout>
            <Header />
            <Points />
            <JoinUs />
            <Unlocking />
        </MainLayout>
    )
}
