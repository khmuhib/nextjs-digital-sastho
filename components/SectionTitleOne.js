import React from 'react'

export default function SectionTitleOne() {
  return (
      <>
          <div className="row py-10">
              <div className="container mx-auto">
                  <div className="text-center">
                      {/* <h1 className='text-[40px] text-center font-bold relative before:'>Download Your One</h1> */}
                      <h1 className={`text-center md:text-center relative py-12 text-[40px] md:text-[50px] lg:text-[60px] text-[#128041] font-bold before:content-[''] before:bg-[url('/assets/images/p2.png')] before:block before:w-[96px] before:h-[138px] before:bg-no-repeat before:top-[40px] before:left-[-50px] before:absolute inline-table`}>Download Your One</h1>
                  </div>
              </div>
        </div>
      </>
  )
}
