"use client"
import Image from 'next/image';
import doctor from "@/public/image.png"
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const router = useRouter();
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Expert Care<br />Close to Home</h1>
        <p>
          Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery facilities right here in  <span style={{ color: '#00C6A9' }}>SmartCare</span>.
        </p>
        <button onClick={()=>router.push("/contact")}>Appointment</button>
      </div>
      <div className="hero-image">
        <Image className='landing-image' src={doctor} alt="Doctor" />
      </div>
    </section>
  );
};

export default HeroSection;
