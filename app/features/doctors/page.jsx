// import './expertDoctors.css';
// const doctors = [
//   {
//     name: "Dr. Ayesha Kapoor",
//     specialty: "Cardiologist",
//     image: "/doctors/lady-doctor.png",
//     slug: "ayesha-kapoor",
//   },
//   {
//     name: "Dr. Rahul Mehta",
//     specialty: "Orthopedic Surgeon",
//     image: "/doctors/gents-doctor.png",
//     slug: "rahul-mehta",
//   },
//   {
//     name: "Dr. Sneha Iyer",
//     specialty: "Neurologist",
//     image: "/doctors/lady-doctor-1.png",
//     slug: "sneha-iyer",
//   },
// ];

// const ExpertDoctors = ({ id }) => {
//   return (
//     <section id={id} className="doctors-section">
//       <h2>Meet Our Expert Doctors</h2>
//       <div className="doctors-grid">
//         {doctors.map((doc, i) => (
//           <div key={i} className="doctor-card">
//             <div className="doctor-image">
//               <img src={doc.image} alt={doc.name} />
//             </div>
//             <div className="doctor-info">
//               <h3>{doc.name}</h3>
//               <p>{doc.specialty}</p>
//               <a href={`/doctors/${doc.slug}`} className="doctor-button">Book Appointment</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExpertDoctors;


'use client';

import { useEffect, useRef } from 'react';
import   './expertDoctors.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ExpertDoctors = () => {
  const sectionHeaderRef = useRef(null);
  const doctorCardsRef = useRef([]);
  const heroContentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Doctor data
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Michael Chen",
      specialty: "Cardiothoracic Surgeon",
      experience: "15+ years of specialized experience in heart and lung surgery",
      avatar: "👨‍⚕️",
      stats: {
        surgeries: "500+",
        successRate: "98%",
        experience: "15"
      }
    },
    {
      id: 2,
      name: "Dr. Sarah Williams",
      specialty: "Neurologist",
      experience: "12+ years specializing in brain and nervous system disorders",
      avatar: "👩‍⚕️",
      stats: {
        patients: "1200+",
        successRate: "95%",
        experience: "12"
      }
    },
    {
      id: 3,
      name: "Dr. James Rodriguez",
      specialty: "Orthopedic Surgeon",
      experience: "18+ years in joint replacement and sports medicine",
      avatar: "👨‍⚕️",
      stats: {
        surgeries: "800+",
        successRate: "97%",
        experience: "18"
      }
    },
    {
      id: 4,
      name: "Dr. Emily Thompson",
      specialty: "Pediatrician",
      experience: "10+ years dedicated to children's health and development",
      avatar: "👩‍⚕️",
      stats: {
        children: "2000+",
        satisfaction: "99%",
        experience: "10"
      }
    },
    {
      id: 5,
      name: "Dr. Robert Kim",
      specialty: "Oncologist",
      experience: "14+ years fighting cancer with advanced treatments",
      avatar: "👨‍⚕️",
      stats: {
        patients: "600+",
        remissionRate: "92%",
        experience: "14"
      }
    },
    {
      id: 6,
      name: "Dr. Lisa Anderson",
      specialty: "Dermatologist",
      experience: "11+ years in skin care and cosmetic procedures",
      avatar: "👩‍⚕️",
      stats: {
        treatments: "1500+",
        satisfaction: "96%",
        experience: "11"
      }
    }
  ];

  // Smooth scroll to doctors section
  const scrollToDoctors = (e) => {
    e.preventDefault();
    const doctorsSection = document.getElementById('doctors');
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe section header
    if (sectionHeaderRef.current) {
      observer.observe(sectionHeaderRef.current);
    }

    // Observe doctor cards with staggered animation
    doctorCardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card);
        }, index * 100);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Parallax and scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = 1 - scrolled / 500;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add floating animation to doctor images
  useEffect(() => {
    const addFloatingEffect = (card) => {
      const image = card.querySelector(`.doctorImage`);
      let isFloating = false;
      
      const handleMouseEnter = () => {
        if (!isFloating) {
          isFloating = true;
          image.style.animation = `float 2s ease-in-out infinite`;
        }
      };
      
      const handleMouseLeave = () => {
        isFloating = false;
        image.style.animation = '';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    const cleanupFunctions = doctorCardsRef.current
      .filter(card => card)
      .map(addFloatingEffect);

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
    };
  }, []);

  const renderStatItem = (label, value) => (
    <div className='statItem' key={label}>
      <span className='statNumber'>{value}</span>
      <span className='statLabel'>{label}</span>
    </div>
  );

  return (
    <>
    {/* <Navbar/> */}
    <div className='container'>
      {/* Hero Section */}
      <section className='heroSection'>
        <div className='heroContent' ref={heroContentRef}>
          <h1 className='heroTitle'>Meet Our Expert Doctors</h1>
          <p className='heroSubtitle'>World-Class Healthcare Professionals</p>
          <p className='heroDescription'>
            Our team of highly qualified specialists brings decades of experience and cutting-edge medical expertise to provide you with the best possible care.
          </p>
          <a href="#doctors" className='ctaButton' onClick={scrollToDoctors}>
            Discover Our Experts
          </a>
        </div>
        <div className='scrollIndicator' ref={scrollIndicatorRef}>
          <div className='scrollArrow'></div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className='doctorsSection' id="doctors">
        <div className='sectionHeader' ref={sectionHeaderRef}>
          <h2 className='sectionTitle'>Our Medical Specialists</h2>
          <p className='expert-sectionSubtitle'>
            Meet the dedicated professionals who make exceptional healthcare possible through their expertise, compassion, and commitment to excellence.
          </p>
        </div>

        <div className='doctorsGrid'>
          {doctorsData.map((doctor, index) => (
            <div 
              key={doctor.id} 
              className='doctorCard'
              ref={el => doctorCardsRef.current[index] = el}
            >
              <div className='doctorImage'>{doctor.avatar}</div>
              <h3 className='doctorName'>{doctor.name}</h3>
              <p className='doctorSpecialty'>{doctor.specialty}</p>
              <p className='doctorExperience'>{doctor.experience}</p>
              
              <div className='doctorStats'>
                {Object.entries(doctor.stats).map(([key, value]) => {
                  const labels = {
                    surgeries: 'Surgeries',
                    patients: 'Patients',
                    children: 'Children',
                    treatments: 'Treatments',
                    successRate: 'Success Rate',
                    satisfaction: 'Satisfaction',
                    remissionRate: 'Remission Rate',
                    experience: 'Years Exp.'
                  };
                  return renderStatItem(labels[key], value);
                })}
              </div>
              
              <button className='contactDoctor'>
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ExpertDoctors;