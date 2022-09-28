import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {

  return (
    <>

      <div className="row bg-[#128041] py-2 z-50">
        <div className="container grid md:grid-cols-2 grid-cols-1 mx-auto">
          <div className=""><p className='md:text-left text-center text-[12px] text-white'>Contact:+8801304-350205</p></div>
          <div className=""><p className='md:text-right text-center text-[12px] text-white'>E-mail:parasol@gmail.com</p></div>
        </div>
      </div>


      <div className="navbar bg-[#F6F6F6] shadow-md">
        <div className="container mx-auto">

          {/* Mobile display */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                  <Link href="/career">
                    <a>Career</a>
                  </Link>

                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Donation
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                  </a>
                  <ul className="p-2 bg-white shadow-md">
                    <li><Link href="/donor">Blood Donor</Link></li>
                    <li><Link href="/money_donor">Money Donor</Link></li>
                  </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <Link href="/">
              <div className="h-16 w-[190px] relative -mt-[25px] hidden lg:block hover:cursor-pointer">
                <Image src="/assets/images/logo.png" alt="logo" layout="fill" />
              </div>
            </Link>
          </div>
          {/* Mobile Display */}



          {/* Desktop Display */}
          <div className="navbar-end hidden lg:flex z-50">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career">
                  Career
                </Link>
              </li>
              <li tabIndex={0}>
                <a>
                  Donation
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2 bg-white">
                  <li><Link href="/donor">Blood Donor</Link></li>
                  <li><Link href="/money_donor">Money Donor </Link></li>
                </ul>
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Desktop Display */}

        <Link href="/">
          <div className="h-16 w-[300px] relative  block lg:hidden hover:cursor-pointer">
            <Image src="/assets/images/logo.png" alt="logo" layout="fill" />
          </div>

        </Link>
      </div>




    </>
  )
}
