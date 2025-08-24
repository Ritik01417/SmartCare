'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './hospital.module.css';
import Footer from '@/components/Footer';

const HospitalExperience = () => {
  const heroContentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const sectionRefs = useRef([]);
  const experienceCardsRef = useRef([]);
  const [isVisible, setIsVisible] = useState({});

  // Hospital Experience Data
  const hospitalExperiences = [
    {
      id: 1,
      title: "Modern Facilities",
      description: "World-class infrastructure and equipment",
      icon: "🏥",
      details: [
        "State-of-the-art medical equipment",
        "Advanced surgical suites",
        "Smart patient rooms",
        "Modern diagnostic centers"
      ],
      color: "blue",
      stats: { facilities: "50+", technology: "Latest", certification: "JCI" }
    },
    {
      id: 2,
      title: "International Cuisine",
      description: "Custom meals to suit dietary preferences",
      icon: "🍽️",
      details: [
        "Personalized meal planning",
        "International menu options",
        "Dietary restriction accommodations",
        "24/7 room service available"
      ],
      color: "green",
      stats: { cuisines: "15+", chefs: "Expert", satisfaction: "98%" }
    },
    {
      id: 3,
      title: "Wellness & Recovery Programs",
      description: "Post-treatment health support",
      icon: "💪",
      details: [
        "Personalized rehabilitation plans",
        "Physical therapy services",
        "Mental health support",
        "Holistic wellness approach"
      ],
      color: "purple",
      stats: { programs: "20+", specialists: "50+", success: "95%" }
    },
    {
      id: 4,
      title: "Digital Health Records",
      description: "Secure access to your medical data",
      icon: "📱",
      details: [
        "Encrypted data storage",
        "24/7 online access",
        "Multi-device compatibility",
        "Easy sharing with specialists"
      ],
      color: "orange",
      stats: { security: "360*", uptime: "99.9%", access: "24/7" }
    },
    {
      id: 5,
      title: "Telemedicine Consultations",
      description: "Follow-ups from anywhere",
      icon: "💻",
      details: [
        "Virtual doctor consultations",
        "Remote monitoring",
        "Prescription management",
        "Global accessibility"
      ],
      color: "red",
      stats: { availability: "24/7", languages: "12+", satisfaction: "97%" }
    }
  ];

  // Smooth scroll function
  const scrollToExperiences = () => {
    const element = document.getElementById('experiences');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
          setIsVisible(prev => ({
            ...prev,
            [entry.target.dataset.id]: true
          }));
        }
      });
    }, observerOptions);

    // Observe all sections and experience cards
    [...sectionRefs.current, ...experienceCardsRef.current].forEach((element, index) => {
      if (element) {
        setTimeout(() => {
          observer.observe(element);
        }, index * 100);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
      
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - scrolled / 400);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get color classes
  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: styles.blueBg, accent: styles.blueAccent },
      green: { bg: styles.greenBg, accent: styles.greenAccent },
      purple: { bg: styles.purpleBg, accent: styles.purpleAccent },
      orange: { bg: styles.orangeBg, accent: styles.orangeAccent },
      red: { bg: styles.redBg, accent: styles.redAccent }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.floatingShape1}></div>
          <div className={styles.floatingShape2}></div>
          <div className={styles.floatingShape3}></div>
        </div>
        <div className={styles.heroContent} ref={heroContentRef}>
          <div className={styles.heroLabel}>
            <span className={styles.labelIcon}>✨</span>
            Premium Healthcare Experience
          </div>
          
          <h1 className={styles.heroTitle}>
            Redefining Hospital
            <span className={styles.titleHighlight}> Experience</span>
          </h1>
          
          <p className={styles.heroDescription}>
            Where cutting-edge technology meets compassionate care, creating an unparalleled 
            healthcare journey that prioritizes your comfort, wellness, and peace of mind.
          </p>
          
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Happy Patients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Satisfaction Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support Available</span>
            </div>
          </div>
          
          <div className={styles.heroActions}>
            <button className={styles.primaryButton} onClick={scrollToExperiences}>
              Explore Our Experience
              <span className={styles.buttonArrow}>→</span>
            </button>
            <button className={styles.secondaryButton}>
              <span className={styles.playIcon}>▶</span>
              Watch Tour
            </button>
          </div>
        </div>
        
        {/* <div className={styles.scrollIndicator} ref={scrollIndicatorRef}>
          <div className={styles.scrollText}>Scroll to explore</div>
          <div className={styles.scrollArrow}></div>
        </div> */}
      </section>

      {/* Experience Overview Section */}
      <section className={styles.overviewSection}>
        <div 
          className={styles.overviewContent}
          ref={el => sectionRefs.current[0] = el}
          data-id="overview"
        >
          <h2 className={styles.overviewTitle}>
            Your Journey Our <span className={styles.titleGradient}>Priority</span>
          </h2>
          <p className={styles.overviewDescription}>
            Every aspect of our hospital experience is meticulously designed to ensure your comfort, 
            recovery, and well-being. From world-class facilities to personalized care, we're committed 
            to exceeding your expectations at every step.
          </p>
        </div>
      </section>

      {/* Hospital Experiences Section */}
      <section className={styles.experiencesSection} id="experiences">
        <div 
          className={styles.sectionHeader}
          ref={el => sectionRefs.current[1] = el}
          data-id="header"
        >
          <h2 className={styles.sectionTitle}>Hospital Experience Features</h2>
          <p className={styles.sectionSubtitle}>
            Discover the comprehensive care and modern amenities that make our hospital experience exceptional
          </p>
        </div>

        <div className={styles.experiencesGrid}>
          {hospitalExperiences.map((experience, index) => {
            const colorClasses = getColorClasses(experience.color);
            return (
              <div 
                key={experience.id}
                className={`${styles.experienceCard} ${colorClasses.bg}`}
                ref={el => experienceCardsRef.current[index] = el}
                data-id={`experience-${experience.id}`}
              >
                <div className={styles.cardHeader}>
                  <div className={`${styles.cardIcon} ${colorClasses.accent}`}>
                    {experience.icon}
                  </div>
                  <div className={styles.cardTitleGroup}>
                    <h3 className={styles.cardTitle}>{experience.title}</h3>
                    <p className={styles.cardDescription}>{experience.description}</p>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <ul className={styles.featuresList}>
                    {experience.details.map((detail, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <span className={`${styles.featureIcon} ${colorClasses.accent}`}>✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardStats}>
                    {Object.entries(experience.stats).map(([key, value]) => (
                      <div key={key} className={styles.statContainer}>
                        <span className={`${styles.statValue} ${colorClasses.accent}`}>{value}</span>
                        <span className={styles.statKey}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button className={`${styles.cardButton} ${colorClasses.accent}`}>
                    Learn More
                    <span className={styles.cardButtonIcon}>→</span>
                  </button>
                </div>

                <div className={`${styles.cardGlow} ${colorClasses.accent}`}></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div 
          className={styles.ctaContent}
          ref={el => sectionRefs.current[2] = el}
          data-id="cta"
        >
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Ready to Experience Excellence?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of satisfied patients who have experienced our world-class healthcare services.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <button className={styles.ctaPrimaryButton}>
              Book Consultation
              <span className={styles.ctaButtonIcon}>📅</span>
            </button>
            <button className={styles.ctaSecondaryButton}>
              Contact Us
              <span className={styles.ctaButtonIcon}>📞</span>
            </button>
          </div>
        </div>
      </section>
      
    </div>
    <Footer/>
    </>
  );
};

export default HospitalExperience;