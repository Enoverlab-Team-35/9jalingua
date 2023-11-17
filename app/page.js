import Image from 'next/image'
import MainLayout from './layouts/MainLayout'
import HomeHeader from './components/HomeHeader'
import Features from './components/Features'
import Languages from './components/Languages'
import AboutUs from './components/AboutUs'

export default function Home() {
  return (
    <MainLayout>
      <HomeHeader />
      <Features />
      <Languages />
      <AboutUs />
    </MainLayout>
  )
}
