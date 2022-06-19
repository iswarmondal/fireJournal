import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='w-full h-[5vh] flex items-center justify-around bg-violet-800 text-gray-100'>
      <h2>fireJournal</h2>
      <ul className='w-2/3 flex justify-evenly'>
        <NavLink to="/dashboard"><li>Profile</li></NavLink>
        <NavLink to="/authentication"><li>Auth</li></NavLink>
      </ul>
    </nav>
  )
}

export default NavBar