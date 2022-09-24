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
                        slidesPerView={1}
                        spaceBetween={10}
                        // slidesPerGroup={3}
                        /* centeredSlides={true} */
                        loop={true}
                        loopFillGroupWithBlank={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 3,
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
                            <div className="h-28 bg-gradient-to-r from-[#128041] to-[#2BB673]">
                                <div className="flex">
                                    <div className="">
                                        <h3>Download The Doctor App</h3>
                                        <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                        <div className="">
                                            <div className="flex gap-5">
                                                <div className="h-10 w-28 relative">
                                                    <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                                </div>
                                                <div className="h-10 w-28 relative">
                                                    <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="h-10 w-28 relative">
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
