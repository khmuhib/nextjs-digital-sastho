import React from 'react'
import Image from 'next/image'

export default function HomeScreenShot() {
  return (
    <>
      <div className="row">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 sm:gap-0">
            <div className="relative h-[626px] w-[293px] m-auto">
              <Image src="/assets/images/ss1.png" alt="logo" layout="fill"/>
            </div>
            <div className="relative h-[666px] w-[372px] m-auto">
              <Image src="/assets/images/ss2.png" alt="logo" layout="fill" />
            </div>
            <div className="relative h-[626px] w-[293px] m-auto">
              <Image src="/assets/images/ss3.png" alt="logo" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
