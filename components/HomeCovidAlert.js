import React from 'react'

export default function HomeCovidAlert() {
  return (
    <>
        <div className="row py-16">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-14 px-10">
                    <div className="bg-red-200 bg-[url('/assets/images/why-sastho.png')] bg-no-repeat bg-center bg-cover md:px-10 py-10 rounded-md px-10">
                        <h2 className='text-[22px] font-semibold text-white mb-5'>Why digital shastho</h2>
                        <p className='text-[16px] font-normal text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="bg-[#2BB673] lg:col-span-2 flex flex-col justify-center md:px-16 lg:px-20 py-10 px-10 rounded-md">
                        <input type="text" placeholder='Search..' className='w-full bg-[#3DD78C] rounded-md py-2 px-3 placeholder:text-white'/>
                        <h2 className='text-[22px] font-bold text-white mt-3'>Covid-19 Alert</h2>
                        <p className='text-[16px] font-semibold text-white my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <a href="" className='text-[#CFC151] text-[16px]'>Know more</a>
                    </div>
                    <div className="flex flex-col">
                        <h3 className='text-[28px] font-semibold text-[#128041]'>Resource</h3>
                        <a href="#" className='text-[16px] underline text-[#128041]'>Web link</a>
                        <a href="#" className='text-[16px] underline text-[#128041]'>App video link</a>
                        <a href="#" className='text-[16px] underline text-[#128041]'>Play store</a>
                        <a href="#" className='text-[16px] underline text-[#128041]'>Doctor app</a>
                        <a href="#" className='text-[16px] underline text-[#128041]'>Nurse app</a>
                        <a href="#" className='text-[16px] underline text-[#128041]'>Medicine</a>
                        <a href="#" className='text-[16px] underline text-[#128041]'>Vaccine</a>
                        <a href="#" className='text-[16px] underline text-[#128041]'>Medicine rider</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
