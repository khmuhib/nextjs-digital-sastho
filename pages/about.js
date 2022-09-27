import React from 'react'
import AboutHeader from '../components/about/AboutHeader'
import AboutMissionVision from '../components/about/AboutMissionVision'
import AboutWhatDigitalSastho from '../components/about/AboutWhatDigitalSastho'
import AboutWhoWeAre from '../components/about/AboutWhoWeAre'

export default function about() {
    return (
        <>
            <AboutHeader></AboutHeader>
            <AboutWhoWeAre></AboutWhoWeAre>
            <AboutMissionVision></AboutMissionVision>

            <div className="row py-10">
                <div className="container mx-auto">
                    <div className="table m-auto">
                        <h1 className='text-[20px] text-center font-semibold'>What Digital Shastho Does and Offers</h1>
                        <hr className='py-[1px] bg-[#2BB673] w-[200px] mt-[5px]' />
                    </div>
                </div>
            </div>

            <AboutWhatDigitalSastho />

        </>
    )
}
