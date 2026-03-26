import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'

export const MainLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
