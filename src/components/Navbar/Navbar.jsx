import React, { useState } from "react";
import "./Navbar.css";
import GanaLogo from "../../assets/GanaLogo.png"; // Adjust path if needed
import Profilepng from "../../assets/profile.webp"; // Adjust path if needed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img
          src={GanaLogo}
          alt="GanaTech Logo"
          style={{ height: "100%", width: "150px" }}
        />
      </div>
      <div className="nav-items">
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#hero">Solutions</a>
          <a href="#highlights">Vision</a>
          <a href="#partners">Programs</a>
          <a href="#newsletter">Blog</a>
        </div>
        <div className="nav-button">
          <div className="profilelogo">
            <img src={Profilepng} alt="profile" style={{ height: "1.8rem" }} />
          </div>
          <button className="login">Log In</button>
        </div>
        <div className="get-started">
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
