import React from 'react'
import LogoHeader from './components/LogoHeader'
import NavbarWithSimpleLinks from './components/Navbar'
import { Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div>
      <LogoHeader />
      <NavbarWithSimpleLinks />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
