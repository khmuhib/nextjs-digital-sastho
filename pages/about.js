import React from 'react'
import AboutCareer from '../components/about/AboutCareer'
import AboutHeader from '../components/about/AboutHeader'
import AboutMarketing from '../components/about/AboutMarketing'
import AboutMissionVision from '../components/about/AboutMissionVision'
import AboutWhatDigitalSastho from '../components/about/AboutWhatDigitalSastho'
import AboutWhoWeAre from '../components/about/AboutWhoWeAre'
import FooterTwo from '../components/FooterTwo'

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

            <div className="row py-10">
                <div className="container mx-auto">
                    <div className="table m-auto">
                        <h1 className='text-[20px] text-center font-semibold'>Marking Headlines</h1>
                        <h3 className='text-[16px]'>What says the newspaper about us</h3>
                    </div>
                </div>
            </div>

            <AboutMarketing />
            <AboutCareer />
            <FooterTwo/>


        </>
    )
}
