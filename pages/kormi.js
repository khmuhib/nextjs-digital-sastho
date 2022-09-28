import React from 'react'
import HeroSection from '../components/HeroSection'
import DoctorCardSection from '../components/DoctorCardSection'
import DoctorStepByStepSection from '../components/DoctorStepByStepSection'
import DoctorBenefitSection from '../components/DoctorBenefitSection'
import AccordianSection from '../components/AccordianSection'
import SectionTitle from '../components/SectionTitle'
import FooterTwo from '../components/FooterTwo'

export default function kormi() {
  return (
    <>
      <HeroSection />
      <DoctorCardSection />
      <DoctorStepByStepSection />
      <DoctorBenefitSection />
      <SectionTitle name="Frequently Asked Questions" />
      <AccordianSection />
      <FooterTwo/>

    </>
  )
}
