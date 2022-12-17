import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => (
  <>
    <Navbar />
    <Outlet></Outlet>
    <Footer />
  </>
)

export default DefaultLayout
