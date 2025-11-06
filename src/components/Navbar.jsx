// src/components/Navbar.jsx
import { Container } from "./Container";
import logo from "../assets/Logo.jpg";
import { useState, useRef, useEffect } from "react";
import {
  IconMenu2,
  IconUserCircle,
  IconX,
  IconPhone,
  IconMail,
  IconSearch,
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
import axios from "axios";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);

  const searchRef = useRef(null);
  const { student, trainer, logoutStudent, loading } = useAuth();
  const navigate = useNavigate();

  // ✅ Use your deployed backend URL
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  // 🔹 Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/courses`);
        setCourses(res.data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        toast.error("❌ Could not load courses");
      }
    };
    fetchCourses();
  }, []);

  // 🔹 Navbar links
  const link = [
    { name: "Home", link: "/" },
    {
      name: "Courses",
      dropdown: courses.map((course) => ({
        name: course.title,
        link: `/Courses/${course._id}`,
      })),
    },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // 🔹 Filter search results
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const handleTrainerRegistration = () => {
    if (trainer) navigate("/trainer");
    else navigate("/trainer-login");
  };

  return (
    <div className="w-full bg-bgprimary fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <Container>
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

          {/* Right Side Login/Logout */}
          <div className="hidden md:flex items-center gap-4">
            {loading ? (
              <span className="text-white">Loading...</span>
            ) : (
              <>
                {student ? (
                  <span
                    onClick={() => {
                      logoutStudent();
                      toast.success("Logout successfully");
                    }}
                    className="cursor-pointer text-sm font-semibold text-red-400 hover:text-red-600 flex items-center gap-1">
                    <IconUserCircle /> Logout
                  </span>
                ) : (
                  <>
                    <div className="flex items-center gap-x-2 text-primary hover:text-text-primary cursor-pointer">
                      <IconUserCircle />
                      <span className="text-sm font-semibold capitalize">
                        <Link to="/login">Student Log in</Link>
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

        <nav className="w-full flex justify-between items-center px-4 py-3 md:px-0 bg-bgprimary relative">
          {/* Logo */}
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
            {link.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}>
                {item.dropdown ? (
                  <>
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
                          className="absolute top-full left-0 mt-2 bg-white text-black font-light rounded-lg shadow-lg w-56 max-h-60 overflow-y-auto">
                          {item.dropdown.length > 0 ? (
                            item.dropdown.map((sub, idx) => (
                              <Link
                                key={idx}
                                to={sub.link}
                                className="block px-4 py-2 hover:bg-gray-200">
                                {sub.name}
                              </Link>
                            ))
                          ) : (
                            <p className="text-sm text-gray-500 px-4 py-2">
                              No courses found
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    key={i}
                    to={item.link}
                    className="hover:text-primary transition-colors duration-300">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Search */}
            <div className="relative" ref={searchRef}>
              <IconSearch
                size={22}
                className="cursor-pointer hover:text-primary"
                onClick={() => setSearchOpen(!searchOpen)}
              />
              {searchOpen && (
                <div className="absolute right-0 mt-2 bg-white p-3 rounded-lg shadow-lg w-64 text-black">
                  <input
                    type="text"
                    placeholder="Search Courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 mb-2 focus:outline-none"
                  />
                  <div className="max-h-40 overflow-y-auto">
                    {filteredCourses.length > 0 ? (
                      filteredCourses.map((course) => (
                        <Link
                          key={course._id}
                          to={`/Courses/${course._id}`}
                          className="block px-2 py-1 hover:bg-gray-200 rounded"
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchTerm("");
                          }}>
                          {course.title}
                        </Link>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No results found</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
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
      </Container>

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
              {link.map((item, i) => (
                <div key={i}>
                  {item.dropdown ? (
                    <details>
                      <summary className="cursor-pointer font-medium py-2">
                        {item.name}
                      </summary>
                      <div className="ml-4 mt-2 flex flex-col gap-y-2 max-h-60 overflow-y-auto">
                        {item.dropdown.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={sub.link}
                            className="text-sm hover:text-primary"
                            onClick={() => setMenuOpen(false)}>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={item.link}
                      className="block font-medium py-2 hover:text-primary"
                      onClick={() => setMenuOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Student Login / Trainer Registration */}
              {!student && (
                <div className="flex flex-col gap-3 mt-4 border-t pt-4">
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-white font-semibold py-2 px-4 rounded bg-blue-600 text-center hover:bg-blue-700 transition">
                    Student Login
                  </Link>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      handleTrainerRegistration();
                    }}
                    className="text-white font-semibold py-2 px-4 rounded bg-green-600 hover:bg-green-700 transition">
                    Trainer Registration
                  </button>
                </div>
              )}

              {/* Mobile Logout if student logged in */}
              {student && (
                <span
                  onClick={() => {
                    logoutStudent();
                    setMenuOpen(false);
                    toast.success("Logout successfully");
                  }}
                  className="cursor-pointer text-red-400 hover:text-red-600 font-semibold py-2 px-4">
                  Logout
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918340901901"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50">
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
