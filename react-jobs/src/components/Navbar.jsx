import React from 'react'
import logo from '../assets/image/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center md:items-stretch md:justify-start">
          <a href="/"><img src={logo} alt="React Jobs" className="h-10 w-auto" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
          </a>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <a href="#">Home</a>
              <a href="#">Jobs</a>
              <a href="#">Add Job</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar