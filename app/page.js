import Image from 'next/image'
import MainLayout from './layouts/MainLayout'
import HomeHeader from './components/HomeHeader'
import Features from './components/Features'
import Languages from './components/Languages'

export default function Home() {
  return (
    <MainLayout>
      <HomeHeader />
      <Features />
      <Languages />
    </MainLayout>
  )
}
