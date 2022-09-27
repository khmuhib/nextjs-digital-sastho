import React from 'react'

export default function SectionTitle(props) {
  return (
    <>
        <div className="row py-10">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className={`text-center md:text-center relative py-12 text-[40px] md:text-[50px] lg:text-[60px] text-[#128041] font-bold`}>{props.name}</h1>
                </div>
            </div>
      </div>
    </>
  )
}
