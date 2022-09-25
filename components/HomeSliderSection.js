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

export default function HomeSliderSection() {
    return (
        <>
            <div className="row">
                <div className="container mx-auto">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        loop={ true}

                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="bg-gradient-to-r from-[#128041] to-[#2BB673] overflow-hidden rounded-xl">
                                <div className="flex">
                                    <div className="px-5 py-10">
                                        <h3 className="text-[30px] text-white font-semibold">Download The Doctor App</h3>
                                        <p className="text-[12px] text-[#CFC151] my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <div className="">
                                            <div className="flex gap-2">
                                                <div className="h-[24px] w-[75px] relative">
                                                    <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                                </div>
                                                <div className="h-[24px] w-[75px] relative">
                                                    <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div className="h-[200px] w-[150px] relative before:content-[''] before:block before:h-[200px] before:w-[200px] before:bg-yellow-200 before:rounded-full before:absolute before:top-[50px] before:left-[-30px]">
                                            <Image className="" src="/assets/images/s1.png" alt="logo" layout="fill" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-gradient-to-r from-[#128041] to-[#2BB673] overflow-hidden rounded-xl">
                                <div className="flex">
                                    <div className="px-5 py-10">
                                        <h3 className="text-[30px] text-white font-semibold">Download The Doctor App</h3>
                                        <p className="text-[12px] text-[#CFC151] my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <div className="">
                                            <div className="flex gap-2">
                                                <div className="h-[24px] w-[75px] relative">
                                                    <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                                </div>
                                                <div className="h-[24px] w-[75px] relative">
                                                    <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div className="h-[200px] w-[150px] relative before:content-[''] before:block before:h-[200px] before:w-[200px] before:bg-yellow-200 before:rounded-full before:absolute before:top-[50px] before:left-[-30px]">
                                            <Image className="" src="/assets/images/s2.png" alt="logo" layout="fill" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-gradient-to-r from-[#128041] to-[#2BB673] overflow-hidden rounded-xl">
                                <div className="flex">
                                    <div className="px-5 py-10">
                                        <h3 className="text-[30px] text-white font-semibold">Download The Doctor App</h3>
                                        <p className="text-[12px] text-[#CFC151] my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <div className="">
                                            <div className="flex gap-2">
                                                <div className="h-[24px] w-[75px] relative">
                                                    <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                                </div>
                                                <div className="h-[24px] w-[75px] relative">
                                                    <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div className="h-[200px] w-[150px] relative before:content-[''] before:block before:h-[200px] before:w-[200px] before:bg-yellow-200 before:rounded-full before:absolute before:top-[50px] before:left-[-30px]">
                                            <Image className="" src="/assets/images/s1.png" alt="logo" layout="fill" />
                                        </div>
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
