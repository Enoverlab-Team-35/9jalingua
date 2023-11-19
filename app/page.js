import Image from 'next/image'
import MainLayout from './layouts/MainLayout'
import HomeHeader from './components/homepage/HomeHeader'
import Features from './components/homepage/Features'
import Languages from './components/homepage/Languages'
import AboutUs from './components/homepage/AboutUs'
import Testimonial from './components/homepage/Testimonial'
import Insights from './components/homepage/Insights'

export default function Home() {
  return (
    <MainLayout>
      <HomeHeader />
      <Features />
      <Languages />
      <AboutUs />
      <Testimonial />
      <Insights />
    </MainLayout>
  )
}
