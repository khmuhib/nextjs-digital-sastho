import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <div className="row bg-[url('/assets/images/cr4.png')] py-[150px] bg-cover bg-no-repeat">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="text-center">
                        <h1 className='text-[42px] font-semibold text-white'>Are You A Verified Doctor? Join With Us.</h1>
                        <p className='my-5 text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        <div className="flex gap-5 justify-center pt-5">
                            <div className="h-[45px] w-[160px] relative">
                                <Image src="/assets/images/g-play.png" alt="logo" layout="fill" />
                            </div>
                            <div className="h-[45px] w-[160px] relative">
                                <Image src="/assets/images/a-play.png" alt="logo" layout="fill" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
