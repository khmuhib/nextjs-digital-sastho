import React from 'react'
import Image from 'next/image'

export default function HomePageHeroSection() {
    return (
        <>

            <div className="row md:h-[700px] h-[1000px] bg-green-200">
                <div className="container mx-auto">
                    <div className="relative">
                        <div className="flex top-0 left-0 right-0 m-auto absolute py-16 md:mx-0 mx-5">
                            <div className="w-1/4 h-full">
                                <div className="">
                                    <div className="w-7 h-6 bg-[#D0E6D9] rounded-md ml-5"></div>
                                    <div className="w-11 h-11 bg-[#D0E6D9] rounded-md my-3 ml-12"></div>
                                    <div className="w-11 h-11 bg-[#D0E6D9] rounded-md "></div>
                                </div>

                            </div>
                            <div className="w-3/4">
                                <div className="w-11/12 bg-[#ADCF9F] rounded-tl-[100px] rounded-br-[100px] md:h-[500px] h-[400px] float-right mt-10 "></div>
                            </div>
                        </div>

                        <div className="bg-transparent z-10 absolute w-full grid md:grid-cols-3 grid-cols-1 top-0 left-0 right-0 py-32 px-10">
                            <div className="md:col-span-2 ml-10">
                                <div className="">
                                    <h1 className='md:text-[60px] text-[40px] text-[#128041] font-bold md:block md:w-2/3 w-full'>Welcome to Digital Shastho</h1>
                                </div>
                                <div className="my-10">
                                    <p>Healthy Bangladesh</p>
                                </div>
                                <div className="flex gap-5">
                                    <div className="h-10 w-28 relative">
                                        <Image src="/../public/assets/images/a-play.png" alt="logo" layout="fill" />
                                    </div>
                                    <div className="h-10 w-28 relative">
                                        <Image src="/../public/assets/images/a-play.png" alt="logo" layout="fill" />
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-[300px] rounded-tl-[100px] rounded-br-[100px] bg-[#D9D9D9] text-center md:top-[-100px] top-[100px] left-0 right-0 m-auto">
                                <Image className='absolute' src="/../public/assets/images/home-hero-girl.png" alt="logo" layout="fill" />
                            </div>

                        </div>
                    </div>
                    {/*
                    <div className="flex">
                        <div className="flex-none">
                            <div className="w-7 h-6 bg-[#128041] rounded-md"></div>
                            <div className="w-7 h-6 bg-[#128041] rounded-md"></div>
                            <div className="w-7 h-6 bg-[#128041] rounded-md"></div>
                        </div>
                        <div className="grow bg-orange-400">
                            <div className="w-full bg-[#ADCF9F] rounded-tl-[100px] rounded-br-[100px] pt-72">dasda</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
