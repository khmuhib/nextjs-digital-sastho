import React from 'react'
import Image from 'next/image'

export default function doctorCardSection() {
    return (
        <>
            <div className="row">
                <h3 className='text-center py-10 text-[20px] font-bold'>You Can Connect With The Following Services.</h3>
            </div>

            <div className="row px-5">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
                        <div className="">
                            <div className="border border-black text-center py-5 rounded-md">
                                <div className="h-[60px] w-[60px] relative m-auto">
                                    <Image src="/assets/images/grid1.png" alt="logo" layout="fill" />
                                </div>
                                <p>Online <br /> Consultasion</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="border border-black text-center py-5 rounded-md">
                                <div className="h-[60px] w-[60px] relative m-auto">
                                    <Image src="/assets/images/grid2.png" alt="logo" layout="fill" />
                                </div>
                                <p>Online <br /> Consultasion</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="border border-black text-center py-5 rounded-md">
                                <div className="h-[60px] w-[60px] relative m-auto">
                                    <Image src="/assets/images/grid3.png" alt="logo" layout="fill" />
                                </div>
                                <p>Online <br /> Consultasion</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="border border-black text-center py-5 rounded-md">
                                <div className="h-[60px] w-[60px] relative m-auto">
                                    <Image src="/assets/images/grid4.png" alt="logo" layout="fill" />
                                </div>
                                <p>Online <br /> Consultasion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
