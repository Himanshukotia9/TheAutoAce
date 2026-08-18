import React from 'react'
import LogoHeader from './components/LogoHeader'
import NavbarWithSimpleLinks from './components/Navbar'
import { Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-black min-h-screen'>
      <LogoHeader />
      <NavbarWithSimpleLinks />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
