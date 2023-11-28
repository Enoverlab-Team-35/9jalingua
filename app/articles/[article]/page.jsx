"use client"

import MainLayout from '@/app/layouts/MainLayout'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const params = useParams()

    return (
        <MainLayout>
            Article
        </MainLayout>
    )
}
