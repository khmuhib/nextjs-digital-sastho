import React from 'react'
import Image from 'next/image'

export default function HomeCounter() {
    return (

        <>

            <div className="row py-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 px-5 md:px-0">
                        <div className="shadow flex flex-col justify-center items-center py-10 rounded-xl border-gray-100 border-2">
                            <div className="relative h-[30px] w-[30px]">
                                <Image src="/assets/images/c1.png" alt="logo" layout="fill" />
                            </div>
                            <h3 className='mt-[15px] text-[20px] font-medium'>1000+</h3>
                            <p>Users</p>
                        </div>
                        <div className="shadow flex flex-col justify-center items-center py-10 rounded-xl border-gray-100 border-2">
                            <div className="relative h-[30px] w-[30px]">
                                <Image src="/assets/images/c2.png" alt="logo" layout="fill" />
                            </div>
                            <h3 className='mt-[15px] text-[20px] font-medium'>1000+</h3>
                            <p>Users</p>
                        </div>
                        <div className="shadow flex flex-col justify-center items-center py-10 rounded-xl border-gray-100 border-2">
                            <div className="relative h-[30px] w-[30px]">
                                <Image src="/assets/images/c3.png" alt="logo" layout="fill" />
                            </div>
                            <h3 className='mt-[15px] text-[20px] font-medium'>1000+</h3>
                            <p>Users</p>
                        </div>
                        <div className="shadow flex flex-col justify-center items-center py-10 rounded-xl border-gray-100 border-2">
                            <div className="relative h-[30px] w-[30px]">
                                <Image src="/assets/images/c4.png" alt="logo" layout="fill" />
                            </div>
                            <h3 className='mt-[15px] text-[20px] font-medium'>1000+</h3>
                            <p>Users</p>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        </>
    )
}
