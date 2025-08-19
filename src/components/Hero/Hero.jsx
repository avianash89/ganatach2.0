import React, { useEffect } from "react";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero");
      if (window.scrollY > 50) {
        hero.classList.add("scrolled");
      } else {
        hero.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <p>Empower Your IT</p>
        <p>Career</p>
        <p>with Gana Tech</p>
        <p>Solutions</p>
        <p className="subtitle">
          Use Data to Get a 360-Degree View of Your Business
        </p>
        <p className="subtitle">View of Your Business</p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
