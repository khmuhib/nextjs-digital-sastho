import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutMarketing() {
    const data = [
        {

            title: 'Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo Prothom Alo',
            writer: 'Prothom Alo Writer',
            img: '/assets/images/m1.png'
        },
        {

            title: 'Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho Kaler kontho ',
            writer: 'Kaler kontho Writer',
            img: '/assets/images/m2.png'
        },
        {

            title: 'Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin Bangladash Protidin ',
            writer: 'Bangladash Protidin  Writer',
            img: '/assets/images/m3.png'
        },
        {

            title: 'Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak Vhorer Dak ',
            writer: 'Vhorer Dak Writer',
            img: '/assets/images/m4.png'
        },
    ]

    const [selected, setSelected] = useState(true)





    return (
        <>


            <div className="row md:block hidden">
                <div className="container mx-auto">
                    <div className="flex gap-5 justify-between px-5">
                        {

                            data.map((item, i) => (
                                <>

                                    <div className="relative" key={i}>
                                        <div className="relative h-[120px] w-[300px]" onClick={() => setSelected(!selected)}>
                                            <Image src={item.img} alt="logo" layout='fill'></Image>
                                        </div>
                                    </div>


                                    

                                </>



                            ))

                        }

                    </div>
                    {selected ?


                        <div className='bg-[#F6F6F6] flex items-center py-5 w-full shadow'>
                            <div className="w-3/4 px-10">
                                <p className='text-[22px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p className='text-[#202020] text-[20px]'>Lorem Ipsum is simply : CEO.</p>
                            </div>
                            <div className="w-1/4">
                                <button className='border border-[#128041] py-2 px-5 rounded-md'>View The Article</button>
                            </div>
                        </div>



                        :

                        null
                    }
                </div>
            </div>
        </>
    )
}
