import React from 'react'; 
import LogoImg from '@/assets/book.ico';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
   <div className='bg-base-100 shadow-sm'> 
     <div className=" navbar  px-4 sm:px-8 container mx-auto rounded-xl my-4">
      
      {/* Navbar Start: Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-slate-100">
            <li><a href='/books' className="font-medium text-emerald-600 bg-emerald-50">Home</a></li>
            <li><a className="font-medium">Listed Books</a></li>
            <li><a className="font-medium">Pages to Read</a></li>
          </ul>
        </div>

        {/* Brand / Logo */}
        <div className='flex gap-3 items-center cursor-pointer'> 
          <div className="w-9 h-9 relative">
            <Image src={LogoImg} alt="Book Vibe Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-xl sm:text-2xl text-slate-800 tracking-wide">Book Vibe</span>
        </div>
      </div>

      {/* Navbar Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 items-center text-base">
          <li>
            <Link href='/books' className="border border-emerald-500 text-emerald-600 font-semibold px-4 py-2 rounded-lg hover:bg-emerald-50 transition-all">
              Books
            </Link>
          </li>
          <li>
            <a className="text-slate-600 font-medium px-4 py-2 rounded-lg hover:text-emerald-600 hover:bg-slate-50 transition-all">
              Listed Books
            </a>
          </li>
          <li>
            <a className="text-slate-600 font-medium px-4 py-2 rounded-lg hover:text-emerald-600 hover:bg-slate-50 transition-all">
              Pages to Read
            </a>
          </li>
        </ul>
      </div>

      {/* Navbar End: Action Buttons */}
      <div className="navbar-end gap-3">
        <a className="btn bg-emerald-600 hover:bg-emerald-700 text-white font-medium border-none px-5 shadow-md shadow-emerald-500/20 transition-all">
          Sign In
        </a>
        <a className="btn bg-cyan-400 hover:bg-cyan-500 text-white font-medium border-none px-5 shadow-md shadow-cyan-400/20 transition-all">
          Sign Up
        </a>
      </div>

    </div>
   </div>
  );
};

export default Nav;