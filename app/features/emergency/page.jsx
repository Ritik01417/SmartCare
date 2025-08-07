
'use client';

import { useEffect, useRef, useState } from 'react';
import  './emergency.css';
import Footer from '@/components/Footer';

const EmergencyServices = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const heroContentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const sectionRefs = useRef([]);
  const serviceCardsRef = useRef([]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Smart Ambulance Services Data
  const ambulanceServices = [
    {
      id: 1,
      title: "GPS Tracking",
      description: "Real-time location tracking for fastest route optimization",
      icon: "🌍",
      features: ["Live tracking", "Route optimization", "ETA updates"]
    },
    {
      id: 2,
      title: "Mobile ICU",
      description: "Fully equipped intensive care unit on wheels",
      icon: "🏥",
      features: ["Advanced life support", "Critical care equipment", "Trained paramedics"]
    },
    {
      id: 3,
      title: "Telemedicine",
      description: "Direct connection with emergency physicians",
      icon: "📱",
      features: ["Video consultation", "Real-time guidance", "Pre-hospital care"]
    },
    {
      id: 4,
      title: "AI Dispatch",
      description: "Intelligent emergency response system",
      icon: "🤖",
      features: ["Priority classification", "Resource allocation", "Predictive routing"]
    }
  ];

  // Hospital Services Data
  const hospitalServices = [
    {
      id: 1,
      title: "Trauma Center",
      description: "Level 1 trauma facility with 24/7 specialist coverage",
      icon: "🚑",
      stats: { time: "< 10 min", capacity: "50 beds", specialists: "24/7" }
    },
    {
      id: 2,
      title: "Cardiac Care",
      description: "Advanced cardiac emergency and intervention services",
      icon: "❤️",
      stats: { time: "< 15 min", procedures: "500+/year", success: "98%" }
    },
    {
      id: 3,
      title: "Stroke Unit",
      description: "Comprehensive stroke care with rapid response",
      icon: "🧠",
      stats: { time: "< 5 min", treatments: "24/7", recovery: "85%" }
    },
    {
      id: 4,
      title: "Pediatric ER",
      description: "Specialized emergency care for children",
      icon: "👶",
      stats: { time: "< 8 min", specialists: "15+", satisfaction: "99%" }
    },
    {
      id: 5,
      title: "Emergency Surgery",
      description: "Immediate surgical intervention when needed",
      icon: "⚕️",
      stats: { availability: "24/7", surgeons: "10+", response: "< 20 min" }
    },
    {
      id: 6,
      title: "Poison Control",
      description: "Immediate treatment for poisoning and overdose",
      icon: "☣️",
      stats: { hotline: "24/7", response: "< 2 min", antidotes: "200+" }
    }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Emergency call function
  const handleEmergencyCall = () => {
    // In a real application, this would trigger the emergency call system
    alert('Emergency call initiated! Our team will contact you immediately.');
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

    // Observe all sections and service cards
    [...sectionRefs.current, ...serviceCardsRef.current].forEach((element, index) => {
      if (element) {
        setTimeout(() => {
          observer.observe(element);
        }, index * 50);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - scrolled / 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='emergency-container'>
      {/* Hero Section */}
      <section className='emergency-heroSection'>
        <div className='emergencyOverlay'>
          <div className='pulsingDot'></div>
          <div className='pulsingRing'></div>
        </div>
        
        <div className='emergency-heroContent' ref={heroContentRef}>
          <div className='emergencyBadge'>
            <span className='liveDot'></span>
            LIVE 24/7
          </div>
          
          <h1 className='emergency-heroTitle'>Emergency Medical Services</h1>
          <p className='emergency-heroSubtitle'>
            When every second counts, we're here for you
          </p>
          
          <div className='timeDisplay'>
            <div className='currentTime'>{formatTime(currentTime)}</div>
            <div className='timeLabel'>Always Available</div>
          </div>
          
          <div className='heroActions'>
            <button className='emergencyButton' onClick={handleEmergencyCall}>
              <span className='emergencyIcon'>🚨</span>
              CALL EMERGENCY
            </button>
            <button 
              className='learnMoreButton'
              onClick={() => scrollToSection('services')}
            >
              Learn More
            </button>
          </div>
        </div>
        
        <div className='scrollIndicator' ref={scrollIndicatorRef}>
          <div className='scrollArrow'></div>
        </div>
      </section>

      {/* Smart Ambulance Services Section */}
      <section className='servicesSection' id="services">
        <div 
          className='sectionHeader'
          ref={el => sectionRefs.current[0] = el}
        >
          <h2 className='emergency-sectionTitle'>Smart Ambulance Services</h2>
          <p className='sectionSubtitle'>
            Advanced technology meets emergency care for faster, smarter medical response
          </p>
        </div>

        <div className='servicesGrid'>
          {ambulanceServices.map((service, index) => (
            <div 
              key={service.id}
              className='serviceCard'
              ref={el => serviceCardsRef.current[index] = el}
            >
              <div className='serviceIcon'>{service.icon}</div>
              <h3 className='serviceTitle'>{service.title}</h3>
              <p className='serviceDescription'>{service.description}</p>
              <ul className='serviceFeatures'>
                {service.features.map((feature, idx) => (
                  <li key={idx} className='featureItem'>
                    <span className='checkIcon'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className='serviceAction'>
                <button className='serviceButton'>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
{/* --------------------------------------------------------- */}
      {/* Hospital Services Section */}
      <section className='hospitalSection'>
        <div 
          className='sectionHeader'
          ref={el => sectionRefs.current[1] = el}
        >
          <h2 className='emergency-sectionTitle'>Hospital Emergency Services</h2>
          <p className='sectionSubtitle'>
            Comprehensive emergency care with state-of-the-art facilities and expert medical teams
          </p>
        </div>

        <div className='hospitalGrid'>
          {hospitalServices.map((service, index) => (
            <div 
              key={service.id}
              className='hospitalCard'
              ref={el => serviceCardsRef.current[ambulanceServices.length + index] = el}
            >
              <div className='hospitalIcon'>{service.icon}</div>
              <div className='hospitalContent'>
                <h3 className='hospitalTitle'>{service.title}</h3>
                <p className='hospitalDescription'>{service.description}</p>
                
                <div className='hospitalStats'>
                  {Object.entries(service.stats).map(([key, value]) => (
                    <div key={key} className='statItem'>
                      <span className='statValue'>{value}</span>
                      <span className='statLabel'>
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className='hospitalAction'>
                <button className='hospitalButton'>Contact Department</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default EmergencyServices;