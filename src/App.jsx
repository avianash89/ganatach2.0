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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/NavbarSections/About";
import Contact from "./components/NavbarSections/Contact";
import Student from "./components/RegistrationForm/StudentForm.jsx";
import Trainer from "./components/RegistrationForm/TrainerRegistrationForm.jsx";
import Course from "./components/NavbarSections/ViewCourse.jsx";
import Login from "./components/NavbarSections/Login.jsx";
import { Toaster } from "react-hot-toast";
import DataScience from "./components/Course/DataScience.jsx";
import ArtificialIntelligence from "./components/Course/ArtificialIntelligence.jsx";
import MachineLearning from "./components/Course/MachineLearning.jsx";
import Aws from "./components/Course/Aws.jsx";
import DevOps from "./components/Course/DevOps.jsx";
import AzureSolution from "./components/Course/AzureSolution.jsx";
import LinuxAdmin from "./components/Course/LinuxAdmin.jsx";
import AdvancePython from "./components/Course/AdvancePython.jsx";
import TrainerPage from "./components/RegistrationForm/TrainerPage.jsx";
import TrainerLogin from "./components/NavbarSections/TrainerLogin.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import TrainerProtectedRoute from "./components/ProtectedRoute/TrainerProtectedRoute.jsx";
import AdminPage from "./components/Admin/AdminPage.jsx";
import EditTrainer from "./Pages/EditTrainer.jsx";
import EditStudent from "./Pages/EditStudent.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import AdminProtectedRoute from "./components/ProtectedRoute/AdminProtectedRoute.jsx";
import CourseDetails from "./components/Course/CourseDetails.jsx";

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
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 + (scrollY / window.innerHeight) * 0.1;

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home scale={scale} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-registration" element={<Student />} />
        <Route path="/trainer-registration" element={<Trainer />} />
        <Route path="/trainer-login" element={<TrainerLogin />} />
        <Route path="/Courses/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Pass setShowNavbar to AdminPage */}
        <Route
          path="/admin-login"
          element={<AdminLogin setShowNavbar={setShowNavbar} />}
        />

        <Route
          path="/edit-trainer/:id"
          element={<EditTrainer setShowNavbar={setShowNavbar} />}
        />

        <Route
          path="/edit-student/:id"
          element={<EditStudent setShowNavbar={setShowNavbar} />}
        />

        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminPage setShowNavbar={setShowNavbar} />
            </AdminProtectedRoute>
          }
        />

        {/* ✅ Protected Trainer Route */}
        <Route
          path="/trainer"
          element={
            <TrainerProtectedRoute>
              <TrainerPage setShowNavbar={setShowNavbar} />
            </TrainerProtectedRoute>
          }
        />
        {/* Course */}
        <Route path="/course" element={<Course />} />
        <Route path="/Courses/dataScience" element={<DataScience />} />
        <Route path="/Courses/ai" element={<ArtificialIntelligence />} />
        <Route path="/Courses/ml" element={<MachineLearning />} />
        <Route path="/Courses/aws" element={<Aws />} />
        <Route path="/Courses/devops" element={<DevOps />} />
        <Route path="/Courses/azureSolution" element={<AzureSolution />} />
        <Route path="/Courses/linuxadmin" element={<LinuxAdmin />} />
        <Route path="/Courses/python" element={<AdvancePython />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}
