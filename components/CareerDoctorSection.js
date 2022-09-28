import React from 'react'
import Image from 'next/image'

export default function CareerDoctorSection() {
    return (
        <>
            <div className="row bg-[url('/assets/images/cr4.png')] py-[100px] bg-cover bg-no-repeat">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:gap-0 px-5 md:px-0">
                        <div className="">
                            <div className="">
                                <div className="w-[400px] flex flex-col h-[350px] justify-center items-center m-auto relative rounded-md before:content-[''] before:block before:absolute before:h-[260px] before:w-[350px] before:border-2 before:border-white before:rounded-tl-[100px] before:rounded-br-[50px] before:bottom-[-40px] md:before:left-[-60px] before:left-[-40px]">

                                    <div className="bg-[url('/assets/images/hand.png')] bg-top-bottom bg-no-repeat relative h-[450px] w-full bg-red-300 before:content-[''] before:absolute before:block before:h-[50px] before:w-full before:bg-white before:bottom-0 before:right-0 before:z-10 before:rounded-tl-[40px]">
                                        <h3 className='text-[#128041] absolute bottom-0 left-0 right-0 m-auto table py-4 z-10'>Verified Doctor</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h1 className='text-[42px] font-semibold text-white'>Are You A Doctor? Earn With Us.</h1>
                                <p className='text-[16px] text-white my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className='bg-[#2BB673] py-[18px] my-5 block w-[250px] text-center text-white text-[20px] rounded-md'>Know More</a>
                                <div className="flex gap-5">
                                    <div className="h-[45px] w-[160px] relative">
                                        <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                    </div>
                                    <div className="h-[45px] w-[160px] relative">
                                        <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
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
