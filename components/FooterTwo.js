import React from 'react'
import Image from 'next/image'

import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';

export default function FooterTwo() {
    return (
        <>
            <div className="row bg-[url('/assets/images/footer.png')] md:h-[700px] h-[1100px] relative bg-no-repeat bg-cover overflow-hidden">
                <div className="h-full inset-0 bg-[#128041] bg-opacity-90 w-full absolute top-0 left-0">

                    <div className="container mx-auto md:py-32 py-16 px-5">
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10">
                            <div className="md:col-span-1 col-span-2 md:mb-5 mb-10">

                                <div className="flex flex-col items-end mt-20">
                                    <h3 className='text-[28px] font-semibold text-[#fff]'>Resource</h3>
                                    <a href="#" className='text-[16px] underline text-[#fff]'>Web link</a>
                                    <a href="#" className='text-[16px] underline text-[#fff]'>App video link</a>
                                    <a href="#" className='text-[16px] underline text-[#fff]'>Play store</a>
                                    <a href="#" className='text-[16px] underline text-[#fff]'>Doctor app</a>
                                    <a href="#" className='text-[16px] underline text-[#fff]'>Nurse app</a>
                                    <a href="#" className='text-[16px] underline text-[#fff]'>Medicine</a>
                                    <a href="#" className='text-[16px] underline text-[#fff]'>Vaccine</a>
                                    <a href="#" className='text-[16px] underline text-[#fff]'>Medicine rider</a>
                                </div>
                                <span className='font-semibold text-white mt-20 block text-right'>Follow Us On</span>
                                <ul className='flex flex-row gap-4 mt-2 justify-end'>
                                    <li className=''><FiFacebook color='#fff' size={20} /></li>
                                    <li className=''><FiTwitter color='#fff' size={20} /></li>
                                    <li className=''><BsInstagram color='#fff' size={20} /></li>
                                    <li className=''><FiLinkedin color='#fff' size={20} /></li>
                                    <li className=''><AiOutlineYoutube color='#fff' size={20} /></li>
                                </ul>
                            </div>
                            <div className="col-span-2">
                                <div className="lg:w-[75%]">
                                    <h1 className='text-white text-[42px] font-semibold mb-5'>Touch with us</h1>
                                    <div className="flex flex-wrap rounded-tl-[60px] rounded-br-[60px] overflow-hidden">
                                        <div className="w-[50%] bg-[#2BB673] flex flex-col items-center justify-center py-[50px]">
                                            <span className='p-[15px] bg-[#34CE84] rounded-full'><FiPhone color='#fff' size={20}/></span>
                                            <p>Phone</p>
                                            <p>+965595958</p>
                                        </div>
                                        <div className="w-[50%] bg-[#CFC151] flex flex-col items-center justify-center py-[50px]">
                                            <span className='p-[15px] bg-[#E2D356] rounded-full'><FiMail color='#fff' size={20}/></span>
                                            <p>Phone</p>
                                            <p>+965595958</p>
                                        </div>
                                        <div className="w-[50%] bg-[#9EB23B] flex flex-col items-center justify-center py-[50px]">
                                            <span className='p-[15px] bg-[#AFC542] rounded-full'><FiGlobe color='#fff' size={20}/></span>
                                            <p>Phone</p>
                                            <p>+965595958</p>
                                        </div>
                                        <div className="w-[50%] bg-[#128041] flex flex-col items-center justify-center py-[50px]">
                                            <span className='p-[15px] bg-[#179B50] rounded-full'><FiMapPin color='#fff' size={20}/></span>
                                            <p>Phone</p>
                                            <p>+965595958</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-[#404241] py-2">
                <div className="container grid md:grid-cols-2 grid-cols-1 mx-auto gap-5">
                    <div className="">
                        <p className='text-[16px] text-white text-center md:text-left'>@all rights reserved by Digital Shastho</p>
                    </div>
                    <div className="flex md:justify-end gap-x-5 justify-center">
                        <FiFacebook color='#fff' size={20} className="inline-block" />
                        <FiTwitter color='#fff' size={20} className="inline-block" />
                        <BsInstagram color='#fff' size={20} className="inline-block" />
                        <FiLinkedin color='#fff' size={20} className="inline-block" />
                    </div>
                </div>
            </div>

        </>
    )
}
