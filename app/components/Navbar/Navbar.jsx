'use client'

import Link from 'next/link';
import Search from "../Search/Search"
import { useState } from 'react';

const pages = ['Home', 'Products', 'Stores', 'About', 'Login'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-white">
          FourteenMart
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          {pages.map((page) => (
            <Link
              key={page}
              href={page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {page}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Search/>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          {pages.map((page) => (
            <Link
              key={page}
              href={page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`}
              className="block px-4 py-2 text-white hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              {page}
            </Link>
          ))}
          <div className="px-4 py-2">
            <Search/>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;