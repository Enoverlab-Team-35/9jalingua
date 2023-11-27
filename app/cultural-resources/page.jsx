"use client"

import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Header from '../components/cultural-resources/Header'
import Articles from '../components/cultural-resources/Articles'
import VideoLibrary from '../components/cultural-resources/VideoLibrary'
import Linguistics from '../components/cultural-resources/Linguistics'
import Explore from '../components/cultural-resources/Explore'

export default function page() {
    return (
        <MainLayout>
            <Header />
            <Articles />
            <VideoLibrary />
            <Linguistics />
            <Explore />
        </MainLayout>
    )
}
