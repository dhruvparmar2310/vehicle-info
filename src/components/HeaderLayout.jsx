import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HeaderLayout () {
  return (
    <>
        <header className='header'>
            <nav className='navbar justify-content-center'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#'>About</Link></li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </>
  )
}
