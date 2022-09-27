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
import HomeScreenShot from '../components/HomeScreenShot'
import HomeOurTopFeature from '../components/HomeOurTopFeature'
import HomeCounter from '../components/HomeCounter'
import HomeClientSays from '../components/HomeClientSays'
import SectionTitle from '../components/SectionTitle'

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
        <SectionTitleOne name="Download Your One"/>
        <HomeSliderSection />
        <SectionTitleTwo name="App Screenshots" />
        <HomeScreenShot />
        <HomeOurTopFeature />
        <HomeCounter />
        <SectionTitleTwo name="What client says" />
        <HomeClientSays />
        <SectionTitle name="Frequently Asked Questions"/>
        <AccordianSection />

      </main>
    </div>
  )
}
