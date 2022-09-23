import React from 'react'
import Image from 'next/image'

export default function HomeCareerWith() {
    return (
        <>
            <div className="row bg-slate-400 py-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                        <div className="">
                            <div className="h-44">
                                <div className="relative top-0 left-0 z-10">
                                    <h1 className={`bg-transparent md:text-left text-center lg:text-[60px] text-[40px] text-[#128041] font-bold before:content-[''] before:block before:w-[96px] before:h-[136px] before:bg-no-repeat before:top-0 before:left-[80%] before:absolute before:bg-[url('/assets/images/p1.png')]`}>Career With Digital Shastho.</h1>
                                </div>
                            </div>
                            <div className="lg:text-left text-center my-5">
                                <button className='bg-[#2BB673] text-white text-[32px] py-3 px-7 rounded-md'>Take a Ture</button>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[80%] m-auto bg-[#2BB673] rounded-md overflow-hidden">
                                <p className='py-8 px-5 text-center text-[16px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="h-[343px] w-full relative">
                                    <Image src="/../public/assets/images/hand.png" alt="logo" layout="fill" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
