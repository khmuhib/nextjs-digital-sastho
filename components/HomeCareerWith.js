import React from 'react'
import Image from 'next/image'

export default function HomeCareerWith() {
    return (
        <>
            <div className="row py-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                        <div className="ml-10">
                            <div className="h-44">
                                <div className="relative top-0 left-0 z-10">
                                    <h1 className={`inline-table md:text-left text-center lg:text-[60px] text-[40px] text-[#128041] font-bold before:content-[''] before:block before:w-[96px] before:h-[136px] before:bg-no-repeat before:top-[40px] lg:before:right-[0px] before:right-[0px] md:before:right-[0px] before:absolute before:bg-[url('/assets/images/p1.png')]`}>Career With Digital Shastho.</h1>
                                </div>
                            </div>
                            <div className="md:text-left text-center md:my-5 my-5">
                                <button className='bg-[#2BB673] text-white md:text-[32px] text-[20px] py-[10px] px-[20px] rounded-md'>Take a Ture</button>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[80%] m-auto bg-[#2BB673] rounded-md overflow-hidden">
                                <p className='py-8 px-5 text-center text-[16px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="h-[343px] w-full relative">
                                    <Image src="/assets/images/hand.png" alt="logo" layout="fill" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
