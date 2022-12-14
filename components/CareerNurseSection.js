import React from 'react'
import Image from 'next/image'

export default function CareerNurseSection() {
    return (
        <>
            <div className="row  md:py-[200px] py-[50px] bg-cover bg-no-repeat">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:gap-0 px-5 md:px-0">
                        <div className="">
                            <div className="">
                                <h1 className="table text-[42px] font-semibold text-black relative before:content-[''] before:block before:absolute before:h-[71px] before:w-[52px] before:top-[50px] before:right-[10px] md:before:top-[30px] md:before:right-[0px] before:bg-[url('/assets/images/career_title.png')]">Are You A Nurse? <br />Earn With us</h1>
                                <p className='text-[16px] text-[#2B2B2B] my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className='bg-[#2BB673] py-[12px] my-5 block w-[340px] text-center text-white text-[20px] rounded-md'>Know More</a>
                                <div className="text-center w-[350px] my-5"><p className="text-[#2B2B2B] relative before:content-[''] before:block before:absolute before:bg-[#2B2B2B] before:h-[1px] before:w-[100px] before:right-[70%] before:top-[13px] after:block after:absolute after:bg-[#2B2B2B] after:h-[1px] after:w-[100px] after:left-[70%] after:top-[13px]">or Download</p></div>
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
                        <div className="">
                            <div className="">
                                <div className="md:w-[400px] md:h-[350px] w-[300px] h-[350px] flex flex-col justify-center items-center m-auto relative rounded-md before:content-[''] before:block before:absolute before:h-[260px] before:w-[350px] before:border-2 before:border-[#656565] before:rounded-tl-[100px] before:rounded-br-[50px] before:bottom-[-40px] md:before:left-[-60px] before:left-[-25px]">

                                    <div className="bg-[url('/assets/images/hand.png')] bg-top-bottom bg-no-repeat relative h-[450px] w-full bg-red-300 before:content-[''] before:absolute before:block before:h-[50px] before:w-full before:bg-white before:bottom-0 before:right-0 before:z-10 before:rounded-tr-[40px] overflow-hidden rounded-md shadow-2xl">
                                        <h3 className='text-[#128041] absolute bottom-0 left-0 right-0 m-auto table py-4 z-10'>Verified Nurse</h3>
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
