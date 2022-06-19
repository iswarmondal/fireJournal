import React from 'react'
import NavBar from '../components/NavBar'
import Auth from './Auth'

function Home() {
  return (
    <>
        <NavBar />
        <main className='min-h-[95vh] bg-gray-300'>
          <Auth />
        </main>
    </>
  )
}

export default Home