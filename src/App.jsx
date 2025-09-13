import {
  AHeroSection,
  Navbar,
  TrainingSection,
  HeroSection,
  OurTrainingPart,
  FooterSection,
} from "./components/index";
import heroBg from "./assets/heroBg.avif";
import Achievement from "./components/sections/Achievement";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/NavbarSections/About";
import Contact from "./components/NavbarSections/Contact";
import Student from "./components/RegistrationForm/StudentForm.jsx";
import Trainer from "./components/RegistrationForm/TrainerRegistrationForm.jsx";

// Your landing page (same as before)
function Home({ scale }) {
  return (
    <div className="w-full overflow-x-hidden relative font-global">
      <motion.img
        animate={{ scale }}
        transition={{ type: "tween", ease: "easeIn", duration: 0 }}
        className="md:max-h-[130vh] h-screen w-full object-cover fixed -z-10 top-20 left-0"
        src={heroBg}
        alt="Hero Background"
      />

      <Navbar />
      <HeroSection />
      <AHeroSection />
      <TrainingSection />
      <Achievement />
      <OurTrainingPart />
      <FooterSection />
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Always scroll to top on reload/refresh
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Scale background on scroll
  const scale = 1 + (scrollY / window.innerHeight) * 0.1;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home scale={scale} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect any unknown URL to home */}
        <Route path="/student-registration" element={<Student/>} />
        <Route path="/trainer-registration" element={<Trainer/>} />
      </Routes>
    </BrowserRouter>
  );
}
