import React from 'react'

import Image from 'next/image'

import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <div className="row bg-[url('/assets/images/footer.png')] md:h-[600px] h-[1050px] relative bg-no-repeat bg-cover overflow-hidden">
        <div className="h-full inset-0 bg-[#128041] bg-opacity-90 w-full absolute top-0 left-0 ">

          <div className="container mx-auto md:py-32 py-16 px-5 ">
            <div className="grid md:grid-cols-4 grid-cols-2">
              <div className="md:col-span-1 col-span-2 md:mb-5 mb-10">
                <div className="relative h-[100px] w-[200px] bg-white">
                  <Image src={"/assets/images/logo.png"} alt="logo" layout='fill'></Image>
                </div>
                <p className='text-white mb-4'>Lorem Ipsum is simply dummy text of the printing</p>
                <div className="">
                  <h3 className='text-white font-semibold my-2'>Download Our Apps</h3>
                  <div className="flex gap-2">
                    <div className="h-[24px] w-[75px] relative">
                      <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                    </div>
                    <div className="h-[24px] w-[75px] relative">
                      <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                    </div>
                  </div>
                </div>

                <span className='font-semibold text-white mt-5 block'>Follow Us On</span>
                <ul className='flex flex-row gap-4 mt-2'>
                  <li className=''><FiFacebook color='#fff' size={20} /></li>
                  <li className=''><FiTwitter color='#fff' size={20} /></li>
                  <li className=''><BsInstagram color='#fff' size={20} /></li>
                  <li className=''><FiLinkedin color='#fff' size={20} /></li>
                  <li className=''><AiOutlineYoutube color='#fff' size={20} /></li>
                </ul>
              </div>
              <div className="text-white">
                <span className='font-bold text-[22px]'>About Us</span>
                <ul className='text-[16px]'>
                  <li>Order status</li>
                  <li>Order status</li>
                  <li>Order status</li>
                  <li>Order status</li>
                  <li>Order status</li>
                  <li>Order status</li>
                </ul>
              </div>
              <div className="text-white">
                <span className='font-bold text-[22px]'>Latest News</span>
                <ul className='text-[16px]'>
                  <li>Order status</li>
                  <li>Order status</li>
                  <li>Order status</li>
                  <li>Order status</li>
                  <li>Order status</li>
                  <li>Order status</li>
                </ul>
              </div>
              <div className="md:col-span-1 col-span-2 mb-5 text-white md:mt-0 mt-10">
                <span className='font-bold text-[22px]'>Touch With Us</span>
                <div className="">
                  <input className='bg-[#F6F6F6] px-2 py-2 w-[200px] border border-solid border-gray-200 outline-none' type="text" placeholder='E-mail Address' />
                  <button className='bg-[#2BB673] py-[9px] px-3'>Subscribe</button>
                </div>

                <div className="">
                  <h3 className='font-semibold my-2'>Contact</h3>
                  <ul>
                    <li className=''><FiFacebook color='#fff' size={20} className="inline-block mr-5 my-2"/>+5445552445</li>
                    <li className=''><FiTwitter color='#fff' size={20} className="inline-block mr-5 my-2" />test@gmail.com</li>
                    <li className=''><BsInstagram color='#fff' size={20} className="inline-block mr-5 my-2" />www.example.com</li>
                    <li className=''><FiLinkedin color='#fff' size={20} className="inline-block mr-5 my-2" />45/02, A, Dhaka, Bangladesh</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container mx-auto py-10  text-center">
              <p className='text-[16px] text-white'>@ 2020-2022 All rights reserved by Digital Shastho</p>
              <hr className='my-3 w-5/6 mx-auto' />
              <span className='text-[16px] text-white mr-5'>Privacy Policy</span>
              <span className='text-[16px] text-white'>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
