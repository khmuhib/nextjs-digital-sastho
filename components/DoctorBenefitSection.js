import React from 'react'
import { BsCaretRightFill } from 'react-icons/bs';
import Image from 'next/image';

export default function DoctorBenefitSection() {
    return (
        <>
            <div className="row">
                <h3 className='text-center py-10 text-[20px] font-bold'>You Can Connect With The Following Services.</h3>
            </div>

            <div className="row">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                        <div className="col-span-2">

                            <div className="flex items-center justify-center align-middle content-center ">
                                <div className="py-16 px-3 ">
                                    <div className="flex items-center mb-5">
                                        <div className=""><BsCaretRightFill color='#2BB673' size={20} /></div>
                                        <div className="text-[20px] text-black ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                    </div>
                                    <div className="flex items-center mb-5">
                                        <div className=""><BsCaretRightFill color='#2BB673' size={20} /></div>
                                        <div className="text-[20px] text-black ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</div>
                                    </div>
                                    <div className="flex items-center mb-5">
                                        <div className=""><BsCaretRightFill color='#2BB673' size={20} /></div>
                                        <div className="text-[20px] text-black ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                    </div>
                                    <div className="flex items-center mb-5">
                                        <div className=""><BsCaretRightFill color='#2BB673' size={20} /></div>
                                        <div className="text-[20px] text-black ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col">
                                <div className="relative h-[214px] w-[333px] m-auto my-5">
                                    <Image src={"/assets/images/b1.png"} alt="logo" layout='fill'></Image>
                                </div>
                                <div className="relative h-[214px] w-[333px] m-auto my-5">
                                    <Image src={"/assets/images/b2.png"} alt="logo" layout='fill'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
