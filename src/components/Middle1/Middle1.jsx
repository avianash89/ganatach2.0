import React, { useEffect } from "react";
import "./Middle1.css";

export default function Middle1() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll, .border");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("border")) {
              entry.target.classList.add("animate-border");
            } else {
              entry.target.classList.add("animate");
            }
          }
        });
      },
      { threshold: 0.2 } // 20% visible to trigger
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="box">
      <div className="inner-box1">
        <h2 className="animate-on-scroll">
          Your Path to a Future-Ready IT Career
        </h2>
        <p className="animate-on-scroll">
          <span>
            At Gana Tech Solutions, we are dedicated to providing a platform for
            individuals to transform their IT skills and knowledge. Our
            industry-aligned curriculum and expert-led training empower learners
            to elevate their careers in the dynamic world of IT.
          </span>
        </p>
      </div>

      <div className="inner-box2">
        <div className="card-row">
          <div className="card1">
            <h3 className="animate-on-scroll">
              <span>Comprehensive Cloud Analytics Training</span>
            </h3>
            <p className="animate-on-scroll">
              <span>
                Our cloud analytics training program is designed to equip
                learners with the latest tools and techniques in cloud-based
                data analysis and visualization, preparing them to drive
                insights and innovation in their organizations.
              </span>
            </p>
            <div className="border"></div>
          </div>

          <div className="card2">
            <h3 className="animate-on-scroll">
              <span>Accelerate Your Career in Data Science</span>
            </h3>
            <p className="animate-on-scroll">
              <span>
                Discover the world of data science at Gana Tech Solutions and
                gain expertise in data analysis, machine learning, and
                predictive modeling to solve complex business challenges and
                drive informed decision-making.
              </span>
            </p>
            <div className="border"></div>
          </div>
        </div>

        <div className="card-row">
          <div className="card3">
            <h3 className="animate-on-scroll">
              <span>Versatile Application Development Courses</span>
            </h3>
            <p className="animate-on-scroll">
              <span>
                Explore a wide range of application development courses at Gana
                Tech Solutions, where you can master the skills needed to build
                scalable and secure applications across various platforms and
                technologies.
              </span>
            </p>
            <div className="border"></div>
          </div>

          <div className="card4">
            <h3 className="animate-on-scroll">
              <span>Superior Customer Experience and Support</span>
            </h3>
            <p className="animate-on-scroll">
              <span>
                At Gana Tech Solutions, we prioritize the learning experience of
                our students and provide exceptional support to ensure their
                success in the IT industry.
              </span>
            </p>
            <div className="border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
