import React from 'react'
import { Outlet } from 'react-router-dom'
import { Component } from './Component'
import Footer from './Footer'


export default function Layout() {
  return (
      <>
      <Component></Component>
    <div className=''>
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
      </>
  )
}
