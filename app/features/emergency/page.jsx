"use client"
import React from 'react'
import Image from 'next/image'
import ambulanceImg from '@/public/image/ambulance_use.jpg'
import './emergency.css'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

const ambulanceServices = [
  'Basic Life Support (BLS)',
  'Advanced Life Support (ALS)',
  'ICU / Mobile ICU Ambulance',
  'Oxygen Ambulance',
  'Neonatal & Paediatric Ambulance',
  'Air Ambulance',
  'Interstate / Long‑Distance Transport',
  'Mortuary / Dead‑Body Transport'
];

const hospitalServices24x7 = [
  'Emergency Department & Trauma Care',
  'MRI / CT Scan / X‑ray / Ultrasound Diagnostics',
  '24×7 Lab & Pathology',
  'Emergency Surgery & Operating Rooms',
  'Intensive Care Unit (ICU)',
  'Dialysis (Round the Clock)',
  'In‑house Pharmacy & Telemedicine Support'
];

export default function Page() {
  const router = useRouter();
  return (
    <>
    <Navbar/>
    <div className="landing-wrapper">
      <div className="background-image">
        <Image src={ambulanceImg} alt="Ambulance" layout="fill" objectFit="cover" priority />
      </div>

      <div className="landing-card">
        <h1>Smart<span>Care</span></h1>
        <h5>Why Fear <span>24*7 </span>service here  </h5>
        <button onClick={()=>router.push('/contact')}>Book now</button>
      </div>
    </div>
     <div className="services-section">
      <section className="ambulance-services">
        <h2>🚑 Ambulance Services</h2>
        <ul>
          {ambulanceServices.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="hospital-services">
        <h2>🏥 24/7 Hospital Services</h2>
        <ul>
          {hospitalServices24x7.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  )
}
