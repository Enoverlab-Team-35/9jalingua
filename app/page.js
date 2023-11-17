import Image from 'next/image'
import MainLayout from './layouts/MainLayout'
import HomeHeader from './components/HomeHeader'

export default function Home() {
  return (
    <MainLayout>
      <HomeHeader />
    </MainLayout>
  )
}
