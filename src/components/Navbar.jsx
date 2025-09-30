// src/components/Navbar.jsx
import { Container } from "./Container";
import logo from "../assets/Logo.jpg";
import { useState } from "react";
import {
  IconMenu2,
  IconUserCircle,
  IconX,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const { user, student, trainer, logoutUser, logoutStudent, loading } =
    useAuth();
  const navigate = useNavigate();

  const link = [
    { name: "Home", link: "/" },
    {
      name: "Courses",
      dropdown: [
        { name: "Data Science", link: "/Courses/dataScience" },
        { name: "Artificial Intelligence", link: "/Courses/ai" },
        { name: "Machine Learning", link: "/Courses/ml" },
        { name: "AWS Solution Architect", link: "/Courses/aws" },
        { name: "DevOps", link: "/Courses/devops" },
        { name: "Azure Solution Architect", link: "/Courses/azureSolution" },
        { name: "Linux Administration", link: "/Courses/linuxadmin" },
        { name: "Advance Python Programming", link: "/Courses/python" },
      ],
    },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.15 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const handleTrainerRegistration = () => {
    if (trainer) navigate("/trainer");
    else navigate("/trainer-login");
  };

  return (
    <div className="w-full bg-bgprimary top-0 left-0 z-50 fixed shadow-md">
      <Container>
        {/* Top Bar */}
        <div className="bg-bgprimary text-white text-xs sm:text-sm px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <IconPhone size={16} />{" "}
              <a href="tel:+918340901901">+91 8340901901</a>
            </div>
            <div className="flex items-center gap-2">
              <IconMail size={16} />{" "}
              <a href="mailto:info@ganatech.co.in">info@ganatech.co.in</a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ganatech901/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/ganatech.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600">
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UC1T_OImlb4wBhbvcJ3-w_Hg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600">
                <FaYoutube />
              </a>
              <a
                href="https://x.com/ganatech123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {loading ? (
              <span className="text-white">Loading...</span>
            ) : (
              <>
                {student && (
                  <span
                    onClick={() => {
                      logoutStudent();
                      toast.success("Logout successfully");
                    }}
                    className="cursor-pointer text-sm font-semibold text-red-400 hover:text-red-600 flex items-center gap-1">
                    <IconUserCircle /> Logout
                  </span>
                )}
                {!user && !student && (
                  <>
                    <div className="flex items-center gap-x-2 text-primary hover:text-text-primary cursor-pointer">
                      <IconUserCircle />
                      <span className="text-sm font-semibold capitalize">
                        <Link to="/login">Log in</Link>
                      </span>
                    </div>
                    <span
                      onClick={handleTrainerRegistration}
                      className="hover:text-primary whitespace-nowrap cursor-pointer">
                      Trainer Registration
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="w-full flex justify-between items-center px-4 py-3 md:px-0 bg-bgprimary">
          <motion.div className="flex justify-center items-center gap-x-2 cursor-pointer">
            <div className="md:w-10 md:h-10 my-2 overflow-hidden rounded-full h-8 w-8">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-full w-full object-cover cursor-pointer"
                />
              </Link>
            </div>
            <Link to="/">
              <span className="md:text-xl text-md font-logo font-medium text-white capitalize">
                Gana Tech Solution
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="md:flex hidden justify-center items-center gap-x-6 text-white text-md font-logo font-extralight relative">
            {link.map((item, i) =>
              item.dropdown ? (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}>
                  <span className="hover:text-primary cursor-pointer">
                    {item.name}
                  </span>
                  <AnimatePresence>
                    {dropdownOpen === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white text-black font-light rounded-lg shadow-lg w-48 max-h-60 overflow-y-auto">
                        {item.dropdown.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={sub.link}
                            className="block px-4 py-2 hover:bg-gray-200">
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={i}
                  to={item.link}
                  className="hover:text-primary transition-colors duration-300 hover:cursor-pointer">
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center justify-center cursor-pointer w-9 h-9 z-50 relative">
            {menuOpen ? (
              <IconX
                stroke={1.5}
                className="w-full h-full text-white"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <IconMenu2
                stroke={1.5}
                className="w-full h-full text-white"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={menuVariants}
              className="absolute top-16 left-0 w-full h-screen bg-bgprimary px-6 py-10 md:hidden overflow-y-auto">
              <div className="flex flex-col gap-y-6 mb-8 text-white text-lg font-logo font-extralight">
                <motion.div variants={linkVariants}>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-primary transition-colors duration-300">
                    Home
                  </Link>
                </motion.div>

                {/* Mobile Logout Buttons */}
                {user && (
                  <span
                    onClick={() => {
                      logoutUser();
                      toast.success("Logout successfully");
                      setMenuOpen(false);
                    }}
                    className="cursor-pointer text-red-400 hover:text-red-600 flex items-center gap-2">
                    <IconUserCircle /> Logout
                  </span>
                )}
                {student && (
                  <span
                    onClick={() => {
                      logoutStudent();
                      setMenuOpen(false);
                    }}
                    className="cursor-pointer text-red-400 hover:text-red-600 flex items-center gap-2">
                    <IconUserCircle /> Logout
                  </span>
                )}

                {/*Login or Trainer Registration */}
                {!user && !student && (
                  <>
                    <div className="flex items-center gap-x-2 text-primary hover:text-text-primary cursor-pointer">
                      <IconUserCircle />
                      <span className="text-sm font-semibold capitalize">
                        <Link to="/login" onClick={() => setMenuOpen(false)}>
                          Log in
                        </Link>
                      </span>
                    </div>
                    <span
                      onClick={() => {
                        setMenuOpen(false);
                        handleTrainerRegistration();
                      }}
                      className="hover:text-primary cursor-pointer">
                      Trainer Registration
                    </span>
                  </>
                )}

                {/* Courses */}
                <div>
                  <span
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    className="font-semibold text-white cursor-pointer flex justify-between items-center">
                    Courses <span>{coursesOpen ? "▲" : "▼"}</span>
                  </span>
                  {coursesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-y-2 max-h-60 overflow-y-auto">
                      {link
                        .find((item) => item.name === "Courses")
                        ?.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.link}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm hover:text-primary">
                            {sub.name}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>

                <motion.div variants={linkVariants}>
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-primary transition-colors duration-300">
                    About
                  </Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-primary transition-colors duration-300">
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/918340901901"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50">
          <FaWhatsapp size={28} />
        </a>
      </Container>
    </div>
  );
}
