import React from 'react'

export default function NavBar() {
  return (
    <>

      <div className="row bg-slate-500">
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
      </div>


    </>
  )
}
