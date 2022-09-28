import React from 'react'

export default function AboutCareer() {
    return (
        <>

            <div className="row py-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center px-5 md:gap-y-0 gap-y-5">
                        <div className="">
                            <div className="">
                                <h1 className='text-[42px] font-semibold'>Career Opportunities With Digital Shastho</h1>
                                <p className='text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="border shadow-md border-gray-300 px-16 py-5 rounded-md">
                                <form action="">
                                    <div className="w-full my-2">
                                        <label className="block">Full Name</label>
                                        <input className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="Your Full Name" />
                                    </div>
                                    <div className="w-full my-2">
                                        <label className="block">Phone Number</label>
                                        <input className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="Your Phone Number" />
                                    </div>
                                    <div className="w-full my-2">
                                        <label className="block">E-mail Address</label>
                                        <input className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="Your E-mail" />
                                    </div>
                                    <div className="w-full my-2">
                                        <textarea className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Type Your Curiosity" />
                                    </div>
                                    <div className="w-full my-2">
                                        <label className="block">Upload Your CV</label>
                                        <input className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="file" placeholder="Your E-mail" />
                                    </div>
                                    <div className="w-full my-3">
                                        <input className="bg-[#2BB673] px-5 py-2 w-full text-white" type="submit" value={"Submit"} />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
