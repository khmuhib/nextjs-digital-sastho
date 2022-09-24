import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
// import { decrement, increment } from '../slices/counterSlice'
import HomePageHeroSection from '../components/HomePageHeroSection'
import AccordianSection from '../components/AccordianSection'
import HomeCovidAlert from '../components/HomeCovidAlert'
import HomeCareerWith from '../components/HomeCareerWith'
import HomeSeeVideo from '../components/HomeSeeVideo'
import SectionTitleOne from '../components/SectionTitleOne'
import SectionTitleTwo from '../components/SectionTitleTwo'
import HomeSliderSection from '../components/HomeSliderSection'

export default function Home() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePageHeroSection/>
        <HomeCovidAlert/>
        <HomeCareerWith/>
        <HomeSeeVideo />
        <SectionTitleOne />
        <SectionTitleTwo />
        <HomeSliderSection/>
        <AccordianSection/>

      </main>
    </div>
  )
}
