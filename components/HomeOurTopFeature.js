import React from 'react'
import Image from 'next/image'

export default function HomeOurTopFeature() {
    return (
        <>
            <div className="row py-[100px]">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-16 gap-10">
                        <div className="relative before:content-[''] before:absolute before:block md:before:h-[300px] md:before:w-[600px] before:border-2 before:border-[#2BB673] before:rounded-tr-[150px] before:rounded-br-[150px] md:before:top-[-30px] md:before:left-[150px] z-[-10] before:top-[-30px] before:left-[100px] before:h-[300px] before:w-[320px] px-3 md:col-span-2 lg:col-span-1">
                            <div className="bg-[#128041] md:h-full md:w-full w-[300px] h-[405px] flex flex-col justify-center items-center rounded-md z-10 relative ml-5">
                                <div className="">
                                    <h2 className='table text-[38px] font-bold text-white before:block before:h-[5px] before:w-[50px] before:bg-white before:absolute before:left-[80px] before:top-[32px]'>Our</h2>
                                    <h2 className='text-[38px] font-bold text-white'>Top Features</h2>
                                    <a href="#" className='text-[16px] text-white underline'>View all features</a>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-2 lg:col-span-3">
                            <div className="bg-[#F9F9F9] w-[85%] py-10 md:px-10 rounded-md shadow m-auto md:m-0">
                                <div className="flex flex-col gap-10">
                                    <div className="flex gap-5 items-center px-5">
                                        <div className="">
                                            <div className="relative h-[50px] w-[50px]">
                                                <Image src="/assets/images/f1.png" alt="logo" layout="fill" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className='text-[#128041] text-[22px]'>Emergency Online/Offline Doctor</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center px-5">
                                        <div className="">
                                            <div className="relative h-[50px] w-[50px]">
                                                <Image src="/assets/images/f2.png" alt="logo" layout="fill" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className='text-[#128041] text-[22px]'>Emergency Online/Offline Doctor</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 items-center px-5">
                                        <div className="">
                                            <div className="relative h-[50px] w-[50px]">
                                                <Image src="/assets/images/f3.png" alt="logo" layout="fill" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className='text-[#128041] text-[22px]'>Emergency Online/Offline Doctor</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
