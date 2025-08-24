'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import '@/components/FeatureSection.css';

const features = [
  {
    title: "24x7 Emergency",
    desc: "Immediate care available anytime, day or night with our dedicated emergency response team.",
    icon: "🚑",
    slug: "emergency",
    color: "#ff3d85",
    stats: "Available 24/7"
  },
  {
    title: "Expert Doctors", 
    desc: "World-class physicians with decades of experience and specialized medical expertise.",
    icon: "👨‍⚕️",
    slug: "doctors",
    color: "#6366f1",
    stats: "500+ Specialists"
  },
  {
    title: "Hospital Experience",
    desc: "Complete assistance and premium support throughout your entire healthcare journey.",
    icon: "🌍",
    slug: "hospital",
    color: "#10b981",
    stats: "Premium Care"
  },
];

const FeaturesSection = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Enhanced click tracking
  const handleCardClick = (feature) => {
    // Add analytics or tracking here if needed
    console.log(`Clicked on ${feature.title} feature`);
  };

  return (
    <section 
      id={id} 
      className="features-section" 
      ref={sectionRef}
      aria-labelledby="features-title"
    >
      {/* Section Header */}
      <div className="features-header">
        <h2 id="features-title">Why Choose Us</h2>
        <p className="features-subtitle">
          Discover the exceptional services and features that make us your trusted healthcare partner
        </p>
      </div>

      {/* Features Grid */}
      <div 
        className="features-grid" 
        role="grid" 
        aria-label="Healthcare features"
      >
        {features.map((feature, index) => (
          <Link 
            href={`/features/${feature.slug}`} 
            key={feature.slug}
            className="feature-card-link"
            onClick={() => handleCardClick(feature)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            aria-label={`Learn more about ${feature.title}: ${feature.desc}`}
            role="gridcell"
          >
            <article className="feature-card">
              {/* Feature Icon */}
              <div 
                className="feature-icon"
                style={{
                  '--feature-color': feature.color,
                }}
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              {/* Feature Content */}
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                
                {/* Feature Stats/Badge */}
                <div className="feature-stats">
                  <span className="stats-badge">
                    {feature.stats}
                  </span>
                </div>
              </div>

              {/* Hover Arrow */}
              <div 
                className="feature-arrow"
                aria-hidden="true"
              >
                →
              </div>

              {/* Loading State Placeholder */}
              {!isVisible && (
                <div className="feature-card-loading" aria-hidden="true" />
              )}
            </article>
          </Link>
        ))}
      </div>

      {/* Optional: Add a decorative element */}
      <div className="features-decoration" aria-hidden="true">
        <div className="decoration-dot decoration-dot-1"></div>
        <div className="decoration-dot decoration-dot-2"></div>
        <div className="decoration-dot decoration-dot-3"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;