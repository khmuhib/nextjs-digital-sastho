import React from 'react'

export default function AboutWhoWeAre() {
    return (
        <>
            <div className="row md:py-24 py-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 px-5">
                        <div className="md:hidden block">
                            <h1 className='text-[38px] font-bold text-[#128041] text-center mb-5'>Who We Are</h1>
                        </div>
                        <div className="md:block hidden">
                            <div className="bg-[#128041] w-[333px] flex flex-col h-[341px] justify-center items-center m-auto relative rounded-md before:content-[''] before:block before:absolute before:h-[300px] before:w-[300px] before:border-2 before:border-[#128041] before:rounded-tl-[100px] before:rounded-br-[50px] before:bottom-[-40px] before:left-[-60px]">
                                <h2 className='table text-[38px] font-bold text-white before:block before:h-[5px] before:w-[50px] before:bg-white before:absolute before:left-[100px] before:top-[32px]'>Who<br /> We Are</h2>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="mb-5">
                                    <h2 className='text-[22px] font-semibold mb-2'>Sub Heading Here</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                </div>
                                <div className="mb-5">
                                    <h2 className='text-[22px] font-semibold mb-2'>Sub Heading Here</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                </div>
                                <div className="mb-5">
                                    <h2 className='text-[22px] font-semibold mb-2'>Sub Heading Here</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
