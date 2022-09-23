import React from 'react'
import Image from 'next/image'

export default function NavBar() {

  return (
    <>

      {/*       <div className="row bg-slate-500">
        <div className="container mx-auto bg-black">
          <ul className='flex'>
            <li className='bg-yellow-50 hover:bg-red-200 px-3 py-3'><a href="#">Home</a></li>
            <li className='bg-yellow-50 hover:bg-red-200 px-3 py-3'><a href="#">About</a></li>
            <li className='bg-yellow-50 hover:bg-red-200 px-3 py-3 relative group'><a href="#">Service</a>
              <ul className='bg-yellow-400 absolute top-full left-0 hidden group-hover:block'>
                <li><a href="#">Sub 01</a></li>
                <li><a href="#">Sub 01</a></li>
                <li><a href="#">Sub 01</a></li>
                <li><a href="#">Sub 01</a></li>
              </ul>

            </li>
            <li className='bg-yellow-50 hover:bg-red-200 px-3 py-3'><a href="">Home</a></li>
          </ul>
        </div>
      </div> */}

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
                <li><a>Item 1</a></li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                  </a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <div className="h-16 w-40 relative -mt-[25px] hidden lg:block">
              <Image src="/../public/assets/images/logo.png" alt="logo" layout="fill"/>
            </div>
          </div>
          {/* Mobile Display */}



          {/* Desktop Display */}
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a>
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop Display */}


        <div className="h-16 w-36 relative  block lg:hidden">
          <Image src="/../public/assets/images/logo.png" alt="logo" layout="fill"/>
        </div>
      </div>




    </>
  )
}
