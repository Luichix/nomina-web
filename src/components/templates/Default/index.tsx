import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export const DefaultLayout = ({children}: {children: ReactNode}) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default DefaultLayout
