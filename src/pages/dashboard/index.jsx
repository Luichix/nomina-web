import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div>Hello World</div>
      <Outlet />
    </>
  )
}

export default Dashboard
