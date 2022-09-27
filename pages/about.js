import React from 'react'
import AboutHeader from '../components/about/AboutHeader'
import AboutMissionVision from '../components/about/AboutMissionVision'
import AboutWhoWeAre from '../components/about/AboutWhoWeAre'

export default function about() {
    return (
        <>
            <AboutHeader></AboutHeader>
            <AboutWhoWeAre></AboutWhoWeAre>
            <AboutMissionVision></AboutMissionVision>
        </>
    )
}
