import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { TopHeader } from '../components/TopHeader/TopHeader'

export const MainLayout = () => {
  return (
    <>
    <TopHeader />
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
