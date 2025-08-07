import React from "react";
import instagram from "@/public/icons/instagram.svg"
import linkedin from "@/public/icons/linkedin.svg"
import github from "@/public/icons/github.svg"
import "./Footer.css";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="footer-logo fist">Smart<span className="footer-logo second">Care</span></h2>
          <p>Your trusted partner in health & wellness. We are committed to excellence and care.</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Departments</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://github.com/Ritik01417/"><Image src={github} alt="GitHub" width={25} height={25} /></a>
        <a href="https://www.linkedin.com/in/ritik-kamwal-9968b4250/"><Image src={linkedin} alt="LinkedIn" width={25} height={25} /></a>
        <a href="https://www.instagram.com/__rit.ik.__/"><Image src={instagram} alt="Instagram" width={25} height={25} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Email: smartcare@gmail.com</p>
          <p>Address: Ritik-IT Solution,Sector 6, Gurugram, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ritik kamwal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
