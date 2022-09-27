import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/css';

import Image from "next/image";

import { AiTwotoneStar } from 'react-icons/ai';

export default function HomeClientSays() {
    return (
        <>
            <div className="row py-10">
                <div className="container mx-auto">
                    <Swiper
                        //slidesPerView={1}
                        spaceBetween={10}
                        loop={true}

                        pagination={{
                            clickable: false,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                          "@0.00": {
                            slidesPerView: 1,
                          },
                          "@0.75": {
                            slidesPerView: 2,
                          },
                          "@1.00": {
                            slidesPerView: 3,
                          },
                          "@1.50": {
                            slidesPerView: 2,
                          },
                        }}
                        navigation={false}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="border-t-4 border-[#128041] shadow px-10 py-10 w-[95%] m-auto ">
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                                    <div className="">
                                        <div className="relative h-[200px] w-[200px] md:m-0 mx-auto bg-slate-200 rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-r-8 border-[#128041]">
                                            <Image className="" src="/assets/images/s1.png" alt="logo" layout="fill" />
                                        </div>
                                        <div className="">
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-[16px] md:text-left text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <a className="underline block mt-[100px] text-right text-[#128041] text-[16px]" href="#">Mark Anthony</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-b-4 border-[#128041] shadow px-10 py-10 w-[95%] m-auto">
                                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                                    <div className="">
                                        <div className="relative h-[200px] w-[200px] md:m-0 mx-auto bg-slate-200 rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-r-8 border-[#128041]">
                                            <Image className="" src="/assets/images/s1.png" alt="logo" layout="fill" />
                                        </div>
                                        <div className="">
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                            <a href=""><AiTwotoneStar color='yellow' size={20} className="inline-block" /></a>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-[16px] md:text-left text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <a className="underline block mt-[100px] text-right text-[#128041] text-[16px]" href="#">Mark Anthony</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
