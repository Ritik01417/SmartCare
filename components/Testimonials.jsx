"use client";
import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "jen wagmen",
    role: "Skin issue ",
    image: "/image/1st.jpg",
    feedback:
      "The care I received at SmartCare Hospital was exceptional. The doctors explained everything clearly, and the nurses were incredibly kind and attentive throughout my recovery.",
  },
  {
    name: "Alix musk",
    role: "Chick Surgery",
    image: "/image/2nd.jpg",
    feedback:
      "Our hospital's commitment to patient safety and technology-driven treatment has made a significant impact. I’m proud to be part of such a progressive institution.",
  },
  {
    name: "Dolph Ortan",
    role: "Pediatric Patient",
    image: "/image/3rd.jpg",
    feedback:
      "From the moment we entered the pediatric unit, we felt reassured. The staff was warm, and the environment was child-friendly. My son is healthy and smiling again!",
  },
  {
    name: "Willian",
    role: "Cancer patient",
    image: "/image/4th.jpg",
    feedback:
      "My father was admitted in critical condition. Thanks to the ICU team’s constant monitoring and professional care, he made a full recovery. Eternally grateful!",
  },
  {
    name: "Harpreet Brar",
    role: "Cardiac transplant",
    image: "/image/5th.jpg",
    feedback:
      "SmartCare Hospital’s training environment and patient-centric approach have helped me grow as a doctor. Our teamwork and compassion set us apart.",
  },
  {
    name: "john moxly",
    role: "Eye surgery",
    image: "/image/6th.jpg",
    feedback:
      "Appointments are quick, and the diagnostics department is top-notch. I no longer dread hospital visits!",
  },
];

const Testimonials = ({ id }) => {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCardsPerPage = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setCardsPerPage(1);
    } else if (width >= 768 && width < 1024) {
      setCardsPerPage(2);
    } else {
      setCardsPerPage(3);
    }
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      (prev + cardsPerPage) >= testimonials.length ? 0 : prev + cardsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - cardsPerPage < 0 ? testimonials.length - cardsPerPage : prev - cardsPerPage
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index * cardsPerPage);
  };

  return (
    <div id={id} className="testimonial-wrapper">
      <h2 className="heading">What do our users say?</h2>
      <div className="carousel-container">
        <button className="nav-button left" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="testimonial-carousel">
          {testimonials
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((t, index) => (
              <div className="testimonial-card" key={index}>
                <img src={t.image} alt={t.name} className="avatar" />
                <p className="testimonial-text">{t.feedback}</p>
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-role">{t.role}</p>
              </div>
            ))}
        </div>

        <button className="nav-button right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

     
      <div className="dots-container">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${currentIndex / cardsPerPage === i ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
