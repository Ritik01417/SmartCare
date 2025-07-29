import FeaturesSection from '@/components/FeatureSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import Head from 'next/head'
import React from 'react'




function Home() {
  return (
    <>
      <Head>
        <title>SmartCare</title>
      </Head>
      <Navbar />
      <HeroSection />
      <FeaturesSection id="feature"/>
      <Testimonials id="testimonials"/>
      <Footer/>
    </>
  )
}

export default Home
