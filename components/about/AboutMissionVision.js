import React from 'react'
import Image from 'next/image'
import { BsCaretRightFill } from 'react-icons/bs';

export default function AboutMissionVision() {
    return (
        <>

            <div className="row">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 px-5">
                        <div className="">
                            <div className="">
                                <div className="my-5">
                                    <h2 className='text-[22px] text-[#2BB673] font-semibold'>Vision</h2>
                                    <hr className='bg-gray-500 py-[1px] w-[40px]'/>
                                </div>
                                <div className="bg-[url('/assets/images/footer.png')] relative md:h-[750px] lg:h-[550px] h-[800px]">
                                    <div className="inset-0 bg-[#202020] bg-opacity-90 w-full absolute top-0 left-0">
                                        <div className="flex items-center justify-center align-middle content-center">
                                            <div className="py-16 px-3">
                                                <div className="relative h-[92px] w-[92px] m-auto my-5">
                                                    <Image src={"/assets/images/vision.png"} alt="logo" layout='fill'></Image>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div className=""><BsCaretRightFill color='#fff' size={20} /></div>
                                                    <div className="text-[20px] text-white ml-2">There are many variations of passages of Lorem Ipsum available. passages of Lorem Ipsum available.</div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div className=""><BsCaretRightFill color='#fff' size={20} /></div>
                                                    <div className="text-[20px] text-white ml-2">There are many variations of passages of Lorem Ipsum available. passages of Lorem Ipsum available.</div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div className=""><BsCaretRightFill color='#fff' size={20} /></div>
                                                    <div className="text-[20px] text-white ml-2">There are many variations of passages of Lorem Ipsum available. passages of Lorem Ipsum available.</div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div className=""><BsCaretRightFill color='#fff' size={20} /></div>
                                                    <div className="text-[20px] text-white ml-2">There are many variations of passages of Lorem Ipsum available. passages of Lorem Ipsum available.</div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="my-5">
                                    <h2 className='text-[22px] text-[#2BB673] font-semibold'>Mission</h2>
                                    <hr className='bg-gray-500 py-[1px] w-[40px]'/>
                                </div>
                                <div className="bg-[url('/assets/images/footer.png')] relative md:h-[750px] lg:h-[550px] h-[800px]">
                                    <div className="inset-0 bg-[#202020] bg-opacity-90 w-full absolute top-0 left-0">
                                        <div className="flex items-center justify-center align-middle content-center">
                                            <div className="py-16 px-3">
                                                <div className="relative h-[92px] w-[92px] m-auto my-5">
                                                    <Image src={"/assets/images/mission.png"} alt="logo" layout='fill'></Image>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div className=""><BsCaretRightFill color='#fff' size={20} /></div>
                                                    <div className="text-[20px] text-white ml-2">There are many variations of passages of Lorem Ipsum available. passages of Lorem Ipsum available.</div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div className=""><BsCaretRightFill color='#fff' size={20} /></div>
                                                    <div className="text-[20px] text-white ml-2">There are many variations of passages of Lorem Ipsum available. passages of Lorem Ipsum available.</div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div className=""><BsCaretRightFill color='#fff' size={20} /></div>
                                                    <div className="text-[20px] text-white ml-2">There are many variations of passages of Lorem Ipsum available. passages of Lorem Ipsum available.</div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div className=""><BsCaretRightFill color='#fff' size={20} /></div>
                                                    <div className="text-[20px] text-white ml-2">There are many variations of passages of Lorem Ipsum available. passages of Lorem Ipsum available.</div>
                                                </div>
                                            </div>

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
